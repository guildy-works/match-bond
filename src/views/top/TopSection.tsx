import TopImage from "@/assets/top.png";
import RoseImage from "@/assets/rose.png";
import Link from "next/link";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import Kon1Image from '@/assets/kon6.jpg';
import Kon2Image from '@/assets/kon7.jpg';
import Bg1 from '@/assets/top.jpg';
import Bg1_Mobile from '@/assets/top_mobile.jpg';
import Image from 'next-export-optimize-images/picture';

export const TopSection = () => {
    return (
        <div className="w-full mx-auto relative overflow-hidden">
            <TransitionImage imageData={Bg1} alt="background" className="hidden md:block w-full" />
            <TransitionImage imageData={Bg1_Mobile} alt="background" className="md:hidden w-full" />

            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-linen/60" />

            <div className="absolute flex flex-col justify-center items-center inset-0 m-auto">
                <FadeAndSlideScrollTriggerAnimation className="font-slight tracking-widest text-[2.3rem] md:text-[4.2rem] font-bold text-[#ec4b4a]">
                    <h1>Match-Bond</h1>
                </FadeAndSlideScrollTriggerAnimation>


                <FadeAndSlideScrollTriggerAnimation className="text-center mt-5 md:mt-8">
                    <p className="text-title4 md:text-[1.2rem] md:leading-9 tracking-[0.15em] text-[#ec4b4a] font-mincho" >
                        あなたの婚活に最善を尽くします
                    </p>
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation className="mt-7 md:mt-10">
                    <Link
                        href="#contacts"
                        className="inline-block px-8 py-2.5 border border-[#ec4b4a]/40 text-[#ec4b4a] text-size2 tracking-[0.1em] rounded-full hover:bg-[#ec4b4a] hover:text-white transition-all duration-500"
                    >
                        無料相談はこちら
                    </Link>
                </FadeAndSlideScrollTriggerAnimation>
            </div>
        </div>
    )
}