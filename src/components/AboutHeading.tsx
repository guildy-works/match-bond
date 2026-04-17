import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import clsx from "clsx"

export const AboutHeqading = (props: {
    title: string,
    num: string,
    className?: string,
    twoLine?: boolean
}) => {
    return <FadeAndSlideScrollTriggerAnimation className={clsx("flex items-center text-center justify-center", props.className)}>
        <span className="text-[36px] text-gold/60 font-light">{props.num}</span>
        <h2 className={clsx("ml-4 font-medium font-mincho", props.twoLine ? "text-[18px]" : "text-[24px] md:text-[28px]")}>{props.title}</h2>
    </FadeAndSlideScrollTriggerAnimation>
}