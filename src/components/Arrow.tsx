import Image from "next/image";
import "./arrow.css";


export default function Arrow() {


    return (
        <div className="flex flex-col gap-4 w-full justify-center items-center">
            <p className="text-white text-sm">Desliza para ver más</p>
            <div className="rounded-full w-12 h-12 bg-[#ffffff] flex items-center justify-center ">
                <Image
                    src="/flecha.png"
                    alt="arrow"
                    width={30}
                    height={30}
                    className="rotate-90 animated-arrow"
                />
            </div>
        </div>
    )

}