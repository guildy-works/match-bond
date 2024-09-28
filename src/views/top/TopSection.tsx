import Image from "next/image";
import Top2Image from "@/assets/top2.jpg";
import TopImage from "@/assets/top1.jpg";
import RoseImage from "@/assets/rose.png";
import Link from "next/link";
import { FadeAndSlideAnimation } from "@/libs/Animations/FadeAndSlideAnimation";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";


export const TopSection = () => {
    return (
        <div className="w-full mx-auto">
            <div className="w-full flex flex-wrap">
                <div className="flex-1 ">
                    <FadeAndSlideAnimation in transform={{ translate: { x: "-100vw" } }}>
                        <div className="bg-color2 h-24 sm:h-44 w-full" />
                    </FadeAndSlideAnimation>

                    <div className="w-full flex justify-center">
                        <div className=" inset-0 m-auto text-center -mt-4">
                            <FadeAndSlideAnimation in tag={"h1"} className="font-asterdam text-title1">
                                Match Bond
                            </FadeAndSlideAnimation>

                            <SkewScrollTriggerAnimation tag={"h3"} className="text-title4 mt-5 sm:mt-12 text-font2">
                                福山市を中心に活動する結婚相談所
                            </SkewScrollTriggerAnimation>

                            <SkewScrollTriggerAnimation tag={"p"} className="text-size2 mt-5 sm:mt-">
                                一期一会、ご縁を大切に。
                            </SkewScrollTriggerAnimation>

                            <SkewScrollTriggerAnimation tag={"p"} className="text-title3 mt-5">
                                あなたの幸せを応援します。
                            </SkewScrollTriggerAnimation>

                            <FadeAndSlideScrollTriggerAnimation transform={{ scale: 1.2, }} >
                                <Image src={RoseImage} alt="rose" className="object-contain" style={{ maxHeight: "240px", maxWidth: "max(280px, 100%)" }} />
                            </FadeAndSlideScrollTriggerAnimation>
                        </div>

                    </div>
                </div>

                <TransitionImage
                    src={TopImage}
                    parallaxSlideLength={20}
                    scale={{ from: 0.8, to: 1 }}
                    className="md:h-svh w-full md:w-auto  md:max-w-3xl lg:max-w-fit"
                    style={{ maxHeight: "680px", }}
                    alt="Top"
                />
            </div>

            <FadeAndSlideScrollTriggerAnimation transform={{ translate: { x: "90vw" } }}
                className="bg-color1 w-full p-6 sm:p-12 md:p-24 relative">

                <div className="container mx-auto px-4 py-8 gap-8 sm:gap-16 md:gap-24 flex flex-wrap justify-center">

                    {/* 1番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation delay={500} className="w-64 h-full">
                        <img src="/kon1.jpg" alt="Guitar" className=" h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>

                    {/* 2番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation delay={550} className="w-64 h-full">
                        <img src="/kon2.jpg" alt="Knife" className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>

                    {/* 3番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation delay={600} className="w-64 col-span-2 h-full">
                        <img src="/kon3.jpg" alt="Woman" className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>

                    {/* 4番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation delay={700} className="w-64 col-span-2 h-full">
                        <img src="/kon4.jpg" alt="Abstract" className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>

                    {/* 5番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation delay={750} className=" w-64 col-span-2 h-full">
                        <img src="/kon5.jpg" alt="Woman" className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>


            </FadeAndSlideScrollTriggerAnimation>
        </div>

    )
}