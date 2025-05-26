'use client';
import { ComponentProps } from "@/interfaces/component";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";


export default function Asistence({ animateIn }: ComponentProps) {


    const [mount, setMount] = useState(1);
    const [mounted, setMounted] = useState(false);
    const [incrementDisabled, setIncrementDisabled] = useState(false);
    const [decrementDisabled, setDecrementDisabled] = useState(false);

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
                        <p className="text-center text-[#524400] text-2xl font-raleway px-4">{mount === 1 ? "persona" : "personas"} inclyendome</p>
                    </div>

                    <button className="bg-[#524400] text-white px-4 py-2 rounded-md">Confirmar asistencia de {mount} {mount === 1 ? "persona" : "personas"}</button>
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