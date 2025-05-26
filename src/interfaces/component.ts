export interface ComponentProps {
    animateIn?: ParallaxProps;
    animateOut?: ParallaxProps;
}

interface ParallaxProps {
    startScroll: number;
    endScroll: number;
}