import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import clsx from "clsx"

export const TitleType = ({ title, subTitle, className, ancher }: { title: string, subTitle: string, className?: string, ancher: string }) => {
    return (
        <>
            <FadeAndSlideScrollTriggerAnimation className={clsx("relative", className)}>
                {ancher && <div id={ancher} className="absolute -top-40" />}
                <h2 className="text-[2rem] text-color9/20 font-asterdam" >
                    {subTitle}
                </h2>
                <h2 className="text-[1.5rem] text-title2 text-color9 mt-2" >
                    {title}
                </h2>
            </FadeAndSlideScrollTriggerAnimation>
        </>
    )
}

export const TitleType2 = ({ title, subTitle }: { title: string, subTitle: string, }) => {
    return (
        <FadeAndSlideScrollTriggerAnimation
            transform={{ scale: 0.94 }}>
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