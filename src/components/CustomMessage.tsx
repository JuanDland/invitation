import { ComponentProps } from "@/interfaces/component";
import { Parallax } from "react-scroll-parallax";

interface CustomMessageProps extends ComponentProps {
    message?: string;
}

export default function CustomMessage({ animateIn, animateOut, message }: CustomMessageProps) {

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
                    <p className="text-center text-[#524400] text-4xl font-title px-4">&quot;{message ? message : "Gracias por acompañarme en un momento tan importante; su presencia le da aún más significado a esta celebración"}&quot;</p>
                </Parallax>
            </Parallax>
        </div>
    )
}