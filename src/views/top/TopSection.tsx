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
                <FadeAndSlideScrollTriggerAnimation className="font-slight text-[1.8rem] md:text-[3.8rem] font-bold text-[#c3735e]">
                    <h1>Match-Bond</h1>
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation className="text-center mt-12 md:mt-24 text-[#c3735e]">
                    <div className="text-size2 md:text-[1.6rem] md:leading-10" >
                        あえて事務所を構えず<br />
                        浮いた費用はお客様に還元<br />
                        入会費•登録費無料の結婚相談所
                    </div>
                </FadeAndSlideScrollTriggerAnimation>
            </div>
        </div>

    )
}