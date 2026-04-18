import Link from "next/link";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import Bg1 from '@/assets/top.jpg';
import Bg1_Mobile from '@/assets/top_mobile.jpg';

export const TopSection = () => {
    return (
        <div className="w-full mx-auto relative overflow-hidden">
            <TransitionImage imageData={Bg1} alt="Match-Bond 結婚相談所" className="hidden md:block w-full" />
            <TransitionImage imageData={Bg1_Mobile} alt="Match-Bond 結婚相談所" className="md:hidden w-full" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/10 to-linen/65" />

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-6 pb-6">
                {/* Location badge */}
                <FadeAndSlideScrollTriggerAnimation className="mb-5">
                    <span className="inline-block px-5 py-1.5 border border-primary/25 text-primary text-size3 tracking-[0.2em] rounded-full bg-white/50 backdrop-blur-sm">
                        福山市の結婚相談所
                    </span>
                </FadeAndSlideScrollTriggerAnimation>

                {/* Brand name */}
                <FadeAndSlideScrollTriggerAnimation>
                    <h1 className="font-slight tracking-widest text-[2.4rem] md:text-[4.4rem] font-bold text-[#ec4b4a]">
                        Match-Bond
                    </h1>
                </FadeAndSlideScrollTriggerAnimation>

                {/* Tagline */}
                <FadeAndSlideScrollTriggerAnimation className="mt-4 text-center">
                    <p className="text-title4 md:text-[1.15rem] tracking-[0.12em] text-[#ec4b4a] text-body-light font-mincho leading-[2.4]">
                       あなたの婚活に最善を尽くします
                    </p>
                </FadeAndSlideScrollTriggerAnimation>

                {/* Sub-copy */}
                <FadeAndSlideScrollTriggerAnimation className="mt-1">
                    <p className="text-size3 text-body-muted/80 tracking-[0.06em] text-center">
                        初期費用０円 ✦ 婚活を前に進める仕組み
                    </p>
                </FadeAndSlideScrollTriggerAnimation>

                {/* CTAs */}
                <FadeAndSlideScrollTriggerAnimation className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                        href="#contacts"
                        className="inline-block px-10 py-3 bg-primary text-white text-size2 tracking-[0.12em] rounded-full hover:bg-primary-dark transition-all duration-500 shadow-md hover:shadow-lg"
                    >
                        無料相談をする
                    </Link>
                    <Link
                        href="#mariage"
                        className="inline-block px-8 py-3 border border-primary/35 text-primary text-size2 tracking-[0.1em] rounded-full bg-white/30 hover:bg-white/50 transition-all duration-500"
                    >
                        サービスを見る
                    </Link>
                </FadeAndSlideScrollTriggerAnimation>
            </div>
        </div>
    )
}
