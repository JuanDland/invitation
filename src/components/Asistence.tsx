'use client';
import { ComponentProps } from "@/interfaces/component";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

interface AsistenceProps extends ComponentProps {
    token: string;
    name: string;
    fetchData: () => Promise<void>;
    isConfirmed: boolean;
    amount: number;
}

export default function Asistence({ animateIn, token, name, fetchData, isConfirmed, amount }: AsistenceProps) {


    const [mount, setMount] = useState(1);
    const [mounted, setMounted] = useState(false);
    const [incrementDisabled, setIncrementDisabled] = useState(false);
    const [decrementDisabled, setDecrementDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleIncrement = () => {
        if (mount < 9) {
            setMount(mount + 1);
        }
    }

    const handleDecrement = () => {
        if (mount > 1) {
            setMount(mount - 1);
        }
    }

    useEffect(() => {
        if (mount === 1) {
            setDecrementDisabled(true);
        } else {
            setDecrementDisabled(false);
        }

        if (mount === 9) {
            setIncrementDisabled(true);
        } else {
            setIncrementDisabled(false);
        }
    }, [mount]);


    const handleConfirm = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/confirm-invitation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token,
                    name,
                    guests: mount
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al confirmar asistencia');
            }

            await fetchData();

            // Aquí puedes agregar una notificación de éxito o redirección
            alert('¡Asistencia confirmada con éxito!');
        } catch (error) {
            console.error('Error:', error);
            alert('Error al confirmar asistencia. Por favor, intente nuevamente.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div
            className="absolute top-0 w-full h-full flex items-center justify-center"
            style={{
                zIndex: mounted ? 31 : 29
            }}
        >
            <Parallax
                scale={[0, 1]}
                opacity={[0, 1]}
                {...animateIn}
                onProgressChange={(progress) => {
                    if (progress > 0.5) {
                        setMounted(true);
                    } else {
                        setMounted(false);
                    }
                }}
            >
                <div className="flex flex-col items-center justify-center gap-10">

                    {
                        isConfirmed ? (
                            <div>
                                <p className="text-center text-[#524400] text-2xl font-raleway px-4 font-bold">Gracias por confirmar tu asistencia, {amount} {amount === 1 ? "persona" : "personas"}</p>
                            </div>
                        ) : (
                            <>
                                <p className="text-center text-[#524400] text-2xl font-raleway px-4 font-bold">Agradacemos la confirmación de asistencia</p>

                                <div className="grid gap-4 border rounded-xl p-4">
                                    <p className="text-center text-[#524400] text-2xl font-raleway px-4">Somos</p>
                                    <div className="flex items-center justify-center gap-6">
                                        <Button
                                            type="decrement"
                                            disabled={decrementDisabled}
                                            onClick={handleDecrement}
                                        />
                                        <p className="text-center text-[#524400] text-8xl px-4">{mount}</p>
                                        <Button
                                            type="increment"
                                            disabled={incrementDisabled}
                                            onClick={handleIncrement}
                                        />
                                    </div>
                                    <p className="text-center text-[#524400] text-2xl font-raleway px-4">{mount === 1 ? "persona" : "personas"} incluyendome</p>
                                </div>

                                <button className="bg-[#524400] text-white px-4 py-2 rounded-md cursor-pointer" onClick={handleConfirm} disabled={isLoading}>{isLoading ? "Confirmando..." : `Confirmar asistencia de ${mount} ${mount === 1 ? "persona" : "personas"}`}</button>
                            </>
                        )
                    }
                </div>
            </Parallax>
        </div>
    )
}

const Button = ({ type, disabled, onClick }: { type: "increment" | "decrement", disabled: boolean, onClick: () => void }) => (
    <div
        className={`w-20 h-20 bg-white rounded-full flex items-center justify-center ${disabled ? "opacity-40" : "cursor-pointer"}`}
        onClick={onClick}
    >
        <Image
            src={type === "increment" ? "/plus.png" : "/minus.png"}
            alt="increment"
            width={40}
            height={40}
        />
    </div>
)