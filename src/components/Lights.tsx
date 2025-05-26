export default function Lights() {
    // Generar un array de 20 luces con posiciones y tamaños aleatorios
    const lights = Array.from({ length: 20 }, () => ({
        size: Math.floor(Math.random() * 5) + 1,
        x: Math.random() * 100,
        y: Math.random() * 100
    }));

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