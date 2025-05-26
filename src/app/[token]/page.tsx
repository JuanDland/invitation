'use client';
import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Lights from "@/components/Lights";
import Arrow from "@/components/Arrow";
import Circle from "@/components/Circle";
import MainMessage from "@/components/MainMessage";
import Asistence from "@/components/Asistence";

export default function InvitationPage() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

                    <Parallax
                        translateY={[0, -200]}
                        className="absolute"
                        startScroll={100}
                        endScroll={300}
                    >
                        <Parallax
                            opacity={[1, -1]}
                            scale={[1, 0]}
                            startScroll={700}
                            endScroll={1000}
                        >
                            <p className="text-center text-white text-6xl md:text-6xl font-title px-6">
                                Eduard Osorio
                            </p>
                        </Parallax>
                    </Parallax>

                    <Parallax
                        opacity={[1, -1]}
                        scale={[1, 0]}
                        startScroll={700}
                        endScroll={1000}
                        className="absolute"
                    >

                        <Parallax
                            opacity={[-1, 1]}
                            startScroll={50}
                            endScroll={400}
                            easing="easeOutQuad"
                        >
                            <p className="text-center text-white text-2xl md:text-6xl mt-30 font-raleway px-6">
                                Queremos que nos acompañes a celebrar los
                            </p>
                        </Parallax>
                    </Parallax>

                    <Parallax
                        opacity={[1, 0]}
                        startScroll={500}
                        endScroll={700}
                        className="absolute bottom-5"
                    >
                        <Arrow />
                    </Parallax>

                    <MainMessage />
                </div>

            </div>
            <div className="h-[4000px] bg-[#DBB554] relative">

                <div className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center">

                    <div className="absolute top-0 w-full h-full flex items-center justify-center">
                        <Parallax
                            scale={[0, 1]}
                            opacity={[0, 1]}
                            startScroll={2400}
                            endScroll={3000}
                        >
                            <Parallax
                                opacity={[1, 0]}
                                startScroll={3600}
                                endScroll={3900}
                            >
                                <p className="text-center text-[#524400] text-3xl font-title px-4">mensaje personalizado</p>
                            </Parallax>
                        </Parallax>
                    </div>

                    <div className="absolute top-0 w-full h-full flex items-center justify-center">
                        <Parallax
                            scale={[0, 1]}
                            opacity={[0, 1]}
                            startScroll={3600}
                            endScroll={3900}
                        >
                            <Parallax
                                opacity={[1, 0]}
                                startScroll={4500}
                                endScroll={4800}
                            >
                                <p className="text-center text-[#524400] text-3xl font-raleway px-4">Se celebrará el <b>29 de Julio</b> desde las <b>7:00pm</b></p>
                            </Parallax>
                        </Parallax>
                    </div>

                    <div className="absolute top-0 w-full h-full flex items-center justify-center z-30">
                        <Parallax
                            scale={[0, 1]}
                            opacity={[0, 1]}
                            startScroll={4500}
                            endScroll={4800}
                        >
                            <Parallax
                                opacity={[1, 0]}
                                startScroll={5400}
                                endScroll={5700}
                            >
                                <p className="text-center text-[#524400] text-xl font-raleway px-4">En</p>
                                <p className="text-center text-[#524400] text-3xl font-raleway px-4 font-bold">Estadero Alto Bonito, Mariquita</p>
                                {/* SIN API */}
                                <div className="select-all rounded-xl overflow-hidden mt-">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.3515619440805!2d-74.90093595873385!3d5.207324094792094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40b5007214e1b9%3A0x800a070a3b4b952!2sEstadero%20Alto%20Bonito!5e0!3m2!1ses!2sar!4v1748291837869!5m2!1ses!2sar"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </Parallax>
                        </Parallax>
                    </div>
                    <Asistence
                        animateIn={{
                            startScroll: 5400,
                            endScroll: 5700
                        }}
                    />
                </div>
            </div>
        </div>
    )

}