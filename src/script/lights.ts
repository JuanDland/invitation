

// Generar un array de 20 luces con posiciones y tamaños aleatorios



const generateLights = () => {
    const lights = Array.from({ length: 20 }, () => ({
        size: Math.floor(Math.random() * 5) + 1,
        x: Math.random() * 100,
        y: Math.random() * 100
    }));

    return lights;
}

console.log(generateLights());