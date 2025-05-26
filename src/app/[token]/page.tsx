'use client';
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";


export default function InvitationPage() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        // document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="relative bg-gradient-to-b from-[#211F1B] to-[#242017]">

            {
                isLoading && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-30 bg-black">
                        Cargando...
                    </div>
                )
            }
            {/* Contenedor con suficiente scroll */}
            <div className="h-[500vh] sm:h-[600vh] relative">

                {/* BLOQUE 1 - Nombre del invitado */}
                <div className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center">

                    <Parallax
                        translateY={[0, -200]}
                        className="absolute border"
                        startScroll={100}
                        endScroll={300}
                    >
                        <Parallax
                            opacity={[1, -1]}
                            scale={[1, 0]}
                            startScroll={700}
                            endScroll={1000}
                        >
                            <p className="text-center text-white text-4xl md:text-6xl">
                                Nombre de invitado
                            </p>
                        </Parallax>
                    </Parallax>

                    <Parallax
                        opacity={[1, -1]}
                        scale={[1, 0]}
                        startScroll={700}
                        endScroll={1000}
                        className="absolute border"
                    >

                        <Parallax
                            opacity={[-1, 1]}
                            startScroll={50}
                            endScroll={400}
                            easing="easeOutQuad"
                        >
                            <p className="text-center text-white text-4xl md:text-6xl mt-30">
                                queremos que nos acompañes a celebrar los
                            </p>
                        </Parallax>
                    </Parallax>

                    <div className="overflow-hidden absolute border w-full h-full flex items-center justify-center">

                        <Parallax
                            scale={[5, 1]}
                            opacity={[0, 1]}
                            startScroll={700}
                            endScroll={1200}
                        >
                            <Parallax
                                translateY={[0, -40]}
                                startScroll={1400}
                                endScroll={1700}
                            >
                                <Parallax
                                    opacity={[1, 0]}
                                    startScroll={2300}
                                    endScroll={2600}
                                >
                                    <h1 className="text-8xl md:text-[12rem] font-bold text-center text-[#DBB90B]">
                                        50
                                    </h1>

                                    <h1 className="text-6xl md:text-8xl font-bold text-center text-[#DBB90B]">
                                        Años
                                    </h1>
                                </Parallax>
                            </Parallax>
                        </Parallax>
                    </div>

                    <Parallax
                        opacity={[0, 1]}
                        startScroll={1400}
                        endScroll={1700}
                    >
                        <Parallax
                            opacity={[1, 0]}
                            startScroll={2300}
                            endScroll={2600}
                        >
                            <p className="text-center text-white text-3xl md:text-5xl font-light mt-50">de</p>
                            <p className="text-center text-white text-4xl md:text-6xl font-semibold mt-4">Carlos Jimenez</p>
                        </Parallax>
                    </Parallax>

                    <div className="absolute top-0 w-full h-full flex items-center justify-center">
                        <Parallax
                            scale={[0, 1]}
                            opacity={[0, 1]}
                            startScroll={2400}
                            endScroll={3000}
                        >
                            <Parallax
                                opacity={[1, 0]}
                                startScroll={3300}
                                endScroll={3600}
                            >
                                <p>Se celebrara el 29 de Julio desde las <b>7:00pm</b></p>
                            </Parallax>
                        </Parallax>
                    </div>

                    <div className="absolute top-0 w-full h-full flex items-center justify-center">
                        <Parallax
                            scale={[0, 1]}
                            opacity={[0, 1]}
                            startScroll={3000}
                            endScroll={3500}
                        >
                            <Parallax
                                opacity={[1, 0]}
                                startScroll={4000}
                                endScroll={4300}
                            >
                                <p>En Estadero Alto Bonito, Mariquita</p>
                                <p>Mapa</p>
                            </Parallax>
                        </Parallax>
                    </div>

                    <div className="absolute top-0 w-full h-full flex items-center justify-center">
                        <Parallax
                            scale={[0, 1]}
                            opacity={[0, 1]}
                            startScroll={4300}
                            endScroll={4600}
                        >
                            <p>Agradacemos la confirmación de asistencia</p>
                            <div>
                                <p>asist comp</p>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </div>
        </div>
    )

}