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
        <div className="w-full mx-auto relative">
            <TransitionImage imageData={Bg1} alt="background" className="hidden md:block w-full" />
            <TransitionImage imageData={Bg1_Mobile} alt="background" className="md:hidden w-full" />

            <div className="absolute flex flex-col justify-center items-center inset-0 m-auto">
                <FadeAndSlideScrollTriggerAnimation className="font-slight tracking-widest text-[2.3rem] md:text-[4.2rem] font-bold text-[#ec4b4a]">
                    <h1>Match-Bond</h1>
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation className="text-center mt-12 md:mt-24 text-[#ec4b4a]">
                    <div className="text-title4 md:text-[1.6rem] md:leading-10" >
                        あなたの婚活に最善を尽くします
                    </div>
                </FadeAndSlideScrollTriggerAnimation>
            </div>
        </div>

    )
}