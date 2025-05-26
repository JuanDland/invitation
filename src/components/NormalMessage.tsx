import { Parallax } from "react-scroll-parallax";
import { ComponentProps } from "../interfaces/component";

export default function NormalMessage({ animateIn, animateOut }: ComponentProps) {

    return (
        <div className="absolute">
            <Parallax
                opacity={[1, -1]}
                scale={[1, 0]}
                {...animateOut}
            >
                <Parallax
                    opacity={[-1, 1]}
                    {...animateIn}
                    easing="easeOutQuad"
                >
                    <p className="text-center text-white text-2xl md:text-6xl mt-30 font-raleway px-6">
                        Con cariño, le extendemos la invitación a celebrar los...
                    </p>
                </Parallax>
            </Parallax>
        </div>
    )
}