import lights from "@/data/lights.json";

export default function Lights() {

    return (
        <div className="fixed w-full h-full top-0 left-0 overflow-hidden">
            {lights.map((light, index) => (
                <div
                    key={index}
                    className="absolute"
                    style={{
                        left: `${light.x}%`,
                        top: `${light.y}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <Light size={light.size} />
                </div>
            ))}
        </div>
    )
}

const Light = ({ size }: { size: number }) => (
    <div className={`border w-${size} h-${size} border-[#DBB90B] bg-[#ffd500] rounded-full shadow-2xl shadow-[#DBB90B] blur-xs`} />
)