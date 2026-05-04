import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import clsx from "clsx"

export const TitleType = ({ title, subTitle, className, ancher }: { title: string, subTitle: string, className?: string, ancher: string }) => {
    return (
        <>
            <FadeAndSlideScrollTriggerAnimation className={clsx("relative text-center", className)}>
                {ancher && <div id={ancher} className="absolute -top-40" />}
                <h2 className="text-[1.8rem] text-gold/50 font-asterdam tracking-wider" >
                    {subTitle}
                </h2>
                <h2 className="text-title2 font-mincho text-primary mt-1 font-medium" >
                    {title}
                </h2>
            </FadeAndSlideScrollTriggerAnimation>
        </>
    )
}

export const TitleType2 = ({ title, subTitle }: { title: string, subTitle: string, }) => {
    return (
        <FadeAndSlideScrollTriggerAnimation>
            <h2 className="flex gap-2 items-center" >
                <span className="text-title1 font-bold">
                    {subTitle}
                </span>
                <span className="text-title2">
                    {title}
                </span>
            </h2>

        </FadeAndSlideScrollTriggerAnimation>
    )
}