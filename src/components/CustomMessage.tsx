import { ComponentProps } from "@/interfaces/component";
import { Parallax } from "react-scroll-parallax";

export default function CustomMessage({ animateIn, animateOut }: ComponentProps) {

    return (
        <div className="absolute top-0 w-full h-full flex items-center justify-center">
            <Parallax
                scale={[0, 1]}
                opacity={[0, 1]}
                {...animateIn}
            >
                <Parallax
                    opacity={[1, 0]}
                    {...animateOut}
                >
                    <p className="text-center text-[#524400] text-3xl font-title px-4">&quot;Gracias por acompañarme en un momento tan importante; su presencia le da aún más significado a esta celebración&quot;</p>
                </Parallax>
            </Parallax>
        </div>
    )
}