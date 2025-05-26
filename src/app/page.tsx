'use client';

import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

export default function Page() {

    const parallax = useParallax({
        onProgressChange: (progress) => {

            if (parallax.ref.current) {

                console.log(progress);
            }

        }
    })


    return (
        <ParallaxProvider>

        </ParallaxProvider>
    );
}