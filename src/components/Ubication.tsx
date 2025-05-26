import { Parallax } from "react-scroll-parallax";
import { ComponentProps } from "../interfaces/component";

export default function Ubication({ animateIn, animateOut }: ComponentProps) {

    return (
        <div className="absolute top-0 w-full h-full flex items-center justify-center z-30">
            <Parallax
                scale={[0, 1]}
                opacity={[0, 1]}
                {...animateIn}
            >
                <Parallax
                    opacity={[1, 0]}
                    {...animateOut}
                >
                    <div className="grid gap-4">
                        <p className="text-center text-[#524400] text-xl font-raleway px-4">En</p>
                        <p className="text-center text-[#524400] text-3xl font-raleway px-4 font-bold">Estadero Alto Bonito, Mariquita</p>
                        {/* SIN API */}
                        <div className="select-all rounded-xl overflow-hidden mx-6">
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
                    </div>
                </Parallax>
            </Parallax>
        </div>
    )
}