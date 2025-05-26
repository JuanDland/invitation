'use client';
import { Parallax } from "react-scroll-parallax";
import { ComponentProps } from "../interfaces/component";

export default function Invited({ animateOut }: ComponentProps) {

    return (
        <div className="absolute">
            <Parallax
                translateY={[0, -100]}
                startScroll={100}
                endScroll={300}
            >
                <Parallax
                    opacity={[1, -1]}
                    scale={[1, 0]}
                    {...animateOut}
                >
                    <p className="text-center text-white text-6xl md:text-6xl font-title px-6">
                        Nombre del invitado
                    </p>
                </Parallax>
            </Parallax>
        </div>
    )

}