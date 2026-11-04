import { useRef, useEffect } from 'react';
import { animate, stagger, scrambleText } from "animejs";

export default function AnimatedCardGrid({className, children}) {

    const ref = useRef(null);

    useEffect(() => {
        const cards = ref.current.querySelectorAll(".card");
        animate(cards, {
            opacity: [0, 1],
            translateY: [24, 0],
            delay: stagger(120), // 每张卡错开 120ms，自动排好节奏
            duration: 700,
            ease: "outBack", // 弹性收尾，落地像有重量
        });

    }, [])

    return (
        <section ref={ref} className={className}>
            {children}
        </section>
    )
}