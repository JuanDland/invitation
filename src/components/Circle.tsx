'use client';
import { ComponentProps } from "@/interfaces/component";
import { useState } from "react";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";


export default function Circle({ animateIn, animateOut }: ComponentProps) {

    const circleRef = useRef<SVGCircleElement>(null);
    const circumference = 2 * Math.PI * 50; // r = 50
    const [offset, setOffset] = useState(circumference);

    return (
        <div className="absolute top-0 w-full h-full flex items-center justify-center overflow-hidden">
            <Parallax
                opacity={[1, 0]}
                {...animateOut}
            >
                <Parallax
                    translateY={[0, 0]} // sin movimiento
                    onProgressChange={(progress) => {
                        const dashOffset = circumference * (1 - progress);
                        setOffset(dashOffset);
                    }}
                    {...animateIn}
                >
                    <svg width="800" height="800" viewBox="0 0 120 120">
                        <circle
                            ref={circleRef}
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="#DBB90B"
                            strokeWidth="0.5"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            opacity={0.2}
                        />
                    </svg>
                </Parallax>
            </Parallax>
        </div>
    )

}