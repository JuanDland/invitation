import { ComponentProps } from "@/interfaces/component";
import { Parallax } from "react-scroll-parallax";

export default function Date({ animateIn, animateOut }: ComponentProps) {


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
                    <p className="text-center text-[#524400] text-3xl font-raleway px-4">Se celebrará el <b>29 de Julio</b> desde las <b>7:00pm</b></p>
                </Parallax>
            </Parallax>
        </div>
    )
}