import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import Link from "next/link";

import Image1 from "@/assets/img.jpg";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { HighlightMarker } from "@/components/HighlightMarker";
import { LinkButton } from "@/components/LinkButton";
import { TitleType } from "@/components/Titles";
import Profile from "@/assets/profile.png";
import Image from 'next-export-optimize-images/picture';
import Img1 from "@/assets/img1.png";
import About1 from "@/assets/about1.png";
import About2 from "@/assets/about2.png";
import Illust from "@/assets/illust.png";
import { DOMMotionComponents, motion, useInView } from "motion/react"
import Img2 from "@/assets/img2.png";
import { AboutHeqading } from "@/components/AboutHeading";
import clsx from "clsx";
import { BookingBunner } from "@/components/BookingBunner";

export default function AboutSection() {
    return (
        <section className="w-full relative bg-linen flex flex-col">
            {/* Background accent shape */}
            <div className="w-full sm:w-[65vw] absolute inset-0 bg-blush/50 -z-10 rounded-t-[2rem] sm:rounded-tr-[2rem]" />

            {/* Profile intro */}
            <div className="max-w-4xl grid md:grid-cols-2 mx-auto gap-8 items-center">
                <div className="mx-auto px-8 sm:px-10 flex flex-col items-start gap-3 w-full">
                    <FadeAndSlideScrollTriggerAnimation>
                        <TitleType ancher="" title="代表　山本夢翔" subTitle="Yumeka Yamamoto" />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className="mt-6 text-title4 text-body leading-relaxed">
                        Match-Bondのホームページにご訪問いただき、<br />
                        誠にありがとうございます。
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className="mt-2 text-title4 text-body">
                        Match-Bond代表の山本夢翔です。
                    </FadeAndSlideScrollTriggerAnimation>
                </div>

               <div className="px-8 -mt-12 md:my-auto">
                    <motion.div className="rounded-sm overflow-hidden -z-10"
                        viewport={{ once: true,}}
                        initial={{ translateY: "60%", scale: 0.8}}
                        whileInView={{ translateY: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay:0 }}
                    >
                        <Image src={Profile} alt="代表プロフィール" className="translate-y-12" />
                    </motion.div>
                </div>
            </div>

            {/* Philosophy section */}
            <div className="w-full flex justify-center pt-8 overflow-hidden z-10">
                <div className="max-w-4xl w-full flex flex-col">
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ translateY: "30px" }}
                        whileInView={{ translateY: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 p-10 md:p-14 -mt-8 rounded-t-[2rem] bg-sand/60 text-body">
                        <div className="flex flex-col justify-center md:p-6 gap-4 items-center">
                            <AboutHeqading num="" title="企業理念" />
                            <div className="heading-line mt-1" />
                            <FadeAndSlideScrollTriggerAnimation
                                className="space-y-2 mt-4 max-w-md text-size2 flex flex-col items-center leading-[1.9] text-center"
                            >
                                <h3 className="text-title4 mb-4 font-medium text-primary-dark font-mincho">
                                    「結婚後も幸せが続く家庭づくりを」
                                </h3>

                                相手のことを少しずつ知りながらパートナーになる。<br />
                                パートナーになったから終わりではありません。<br />
                                そこからがやっとスタートになります。<br /><br />

                                結婚式や育児。日々の生活の中でも<br />
                                思いのすれ違いができたとき<br className="sm:hidden" />
                                どう関わったら良いのか、<br />
                                どうすれば思いが伝わるのかまで相談に乗ります。<br /><br />

                                まずはパートナー探しですね。<br />
                                自分の価値観をカウンセリングを通し<br />
                                改めて精査しながら一緒にお相手を探しましょう。<br /><br />

                                あなたの婚活に私たちは最善を尽くします。<br />
                                共に悩み、共に喜び、応援します。
                            </FadeAndSlideScrollTriggerAnimation>
                        </div>

                        <div className="flex flex-col justify-center md:p-6 gap-4 mt-6">
                            <AboutHeqading num="" title="サービス" />
                            <div className="heading-line" />
                            <FadeAndSlideScrollTriggerAnimation
                                className="space-y-2 mt-3 text-size2 flex flex-col items-center text-center leading-[1.9]"
                            >
                                Match-Bondはお客様のために、大きく分けて2つのサービスを提供します。<br /><br />

                                1つ目は福山市近辺のお店に協力してもらうことで、<br />
                                総額〇〇万円をお得に婚活・結婚をしてもらうサービスです。<br />

                                <Link
                                    href="#support"
                                    className="my-3 text-size2 text-primary hover:underline transition-colors duration-300"
                                >
                                    → 詳細はこちら
                                </Link>

                                2つ目は入会費・登録費といった初期費用が０円。<br />
                                月会費無料プランを選ぶと月会費も0円という、<br />
                                結婚相談所のハードルを大きく下げるサービスです。<br />

                                <Link href="#mariage"
                                    className="my-3 text-size2 text-primary hover:underline transition-colors duration-300">
                                    → 詳細はこちら
                                </Link>

                                お客様が「お得」「効率的」「幸せ」に婚活できることをお約束します。<br />
                                結婚した後も幸せが続くようにご支援します。
                            </FadeAndSlideScrollTriggerAnimation>
                        </div>

                        <FadeAndSlideScrollTriggerAnimation>
                            <Image src={Illust} alt="婚活を支援" className="w-full max-w-sm mx-auto mt-6" />
                        </FadeAndSlideScrollTriggerAnimation>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const FeatureCard = ({ children, title, imageSection, className, num }: { num: string, className?: string, children: React.ReactNode, title: string, imageSection: React.ReactNode }) => {
    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ translateY: "40px", scale: 1.1 }}
            whileInView={{ translateY: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={clsx("space-y-8 p-8 md:p-16 pt-12 pb-24 -mt-12 rounded-t-3xl grid md:grid-cols-2", className)}>
            <div className="flex flex-col justify-center md:p-8 gap-4">
                <AboutHeqading num={num} title={title} />
                <FadeAndSlideScrollTriggerAnimation
                    className="space-y-2 mt-3 sm:mt-5 md:mt-7 text-size2 "
                >
                    {children}
                </FadeAndSlideScrollTriggerAnimation>
            </div>
            {imageSection}
        </motion.div>
    )
}