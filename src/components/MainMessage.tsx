import { Parallax } from "react-scroll-parallax";
import Circle from "./Circle";


export default function MainMessage() {

    return (
        <>
            <div className="overflow-hidden absolute w-full h-full flex items-center justify-center">

                <Parallax
                    scale={[5, 1]}
                    opacity={[0, 1]}
                    startScroll={700}
                    endScroll={1200}
                >
                    <Parallax
                        translateY={[0, -30]}
                        startScroll={1400}
                        endScroll={1700}
                    >
                        <Parallax
                            opacity={[1, 0]}
                            startScroll={2300}
                            endScroll={2600}
                        >
                            <h1 className="text-[15rem] -my-15 font-bold text-center text-[#DBB90B] font-title">
                                50
                            </h1>

                            <h1 className="text-8xl font-bold text-center text-[#DBB90B] font-title">
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
                    <p className="text-center text-white text-2xl font-light mt-70 font-title">de</p>
                    <p className="text-center text-white text-6xl font-semibold mt-4 font-title">Carlos Jimenez</p>
                </Parallax>
            </Parallax>

            <Circle
                animateIn={{
                    startScroll: 1400,
                    endScroll: 1700
                }}
                animateOut={{
                    startScroll: 2300,
                    endScroll: 2600
                }}
            />
        </>
    )
}