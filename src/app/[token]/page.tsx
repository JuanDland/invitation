'use client';
import { useEffect, useState } from "react";
import Lights from "@/components/Lights";
import Arrow from "@/components/Arrow";
import MainMessage from "@/components/MainMessage";
import Asistence from "@/components/Asistence";
import Invited from "@/components/Invited";
import NormalMessage from "@/components/NormalMessage";
import Ubication from "@/components/Ubication";
import CustomMessage from "@/components/CustomMessage";
import Date from "@/components/Date";

export default function InvitationPage() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 100);
    }, []);


    return (
        <div className="relative bg-gradient-to-b h-screen">

            {
                isLoading && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-30 bg-black">
                        Cargando...
                    </div>
                )
            }
            {/* Contenedor con suficiente scroll */}
            <div className="h-[3200px] relative bg-gradient-to-b from-[#211F1B] via-[#251f10] to-[#211F1B]">
                <Lights />
                {/* BLOQUE 1 - Nombre del invitado */}
                <div className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center">

                    <Invited
                        animateOut={{
                            startScroll: 700,
                            endScroll: 1000
                        }}
                    />

                    <NormalMessage
                        animateIn={{
                            startScroll: 50,
                            endScroll: 400
                        }}
                        animateOut={{
                            startScroll: 700,
                            endScroll: 1000
                        }}
                    />


                    <Arrow
                        animateOut={{
                            startScroll: 500,
                            endScroll: 700
                        }}
                    />

                    <MainMessage />
                </div>

            </div>
            <div className="h-[3700px] bg-[#DBB554] relative">

                <div className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center">

                    <CustomMessage
                        animateIn={{
                            startScroll: 2400,
                            endScroll: 3000
                        }}
                        animateOut={{
                            startScroll: 3200,
                            endScroll: 3500
                        }}
                    />

                    <Date
                        animateIn={{
                            startScroll: 3500,
                            endScroll: 3800
                        }}
                        animateOut={{
                            startScroll: 4000,
                            endScroll: 4300
                        }}
                    />

                    <Ubication
                        animateIn={{
                            startScroll: 4300,
                            endScroll: 4600
                        }}
                        animateOut={{
                            startScroll: 4800,
                            endScroll: 5100
                        }}
                    />

                    <Asistence
                        animateIn={{
                            startScroll: 5100,
                            endScroll: 5400
                        }}
                    />
                </div>
            </div>
        </div>
    )

}