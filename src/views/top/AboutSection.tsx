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
        <section className="w-full relative -mt-24 sm:mt-0 bg-color12/10">
            <div className="w-100vw sm:w-[70vw] absolute inset-0 bg-color12_2 -z-10 rounded-t-3xl sm:rounded-tr-3xl" />

            <div className="max-w-5xl grid md:grid-cols-2 mx-auto gap-3 items-center">
                <div className="mx-auto px-8 justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full">
                    <FadeAndSlideScrollTriggerAnimation>
                        <TitleType ancher="" title="代表　山本夢翔" subTitle="Yumeka Yamamoto" />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation
                        className="mt-3 sm:mt-5 md:mt-7 text-title4 text-color10">
                        Match-Bondのホームページにご訪問いただき、<br />
                        誠にありがとうございます。
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation

                        className="mt-3 sm:mt-5 md:mt-7 text-title4 text-color10">
                        Match-Bond代表の山本夢翔です。
                    </FadeAndSlideScrollTriggerAnimation>
                </div>

                <div className="px-8 -mt-12 md:my-auto">
                    <motion.div className="rounded-sm overflow-hidden"
                        viewport={{ once: true }}
                        initial={{ translateY: "60px", scale: 1.2 }}
                        whileInView={{ translateY: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <Image src={Profile} alt="img" className="translate-y-12" />
                    </motion.div>
                </div>
            </div>

            <div className="text-color6  w-full flex justify-center pt-12 overflow-hidden">

                <div className="max-w-5xl w-full flex flex-col">
                    {/* <FeatureCard
                        title="自己紹介"
                        num="01"
                        className="bg-color9_2"
                        imageSection={<TransitionImage imageData={About1} alt="about1" className="w-full rounded-xl" parallaxSlideLength={20} baseScale={1.1} />}
                    >
                        簡単に私の自己紹介をさせてください。<br />
                        1997年10月17日生まれ、生粋のO型です。<br />
                        中学生の職場体験で保育士を体験し、「絶対に保育士になる！」
                        と保育学科のある高校へ入学後、<br />
                        校長推薦で短期大学に入学し幼児教育学科を卒業。<br />
                        その後、福山市にあるこども園に就職しました。<br />
                        保育士の仕事をしていると、
                        もっといろんなことを経験してみたいと思うようになり、
                        社会人サークルに参加してみました。
                    </FeatureCard>

                    <FeatureCard
                        title="社会人サークル"
                        num="02"
                        className="bg-color6 text-color10"
                        imageSection={<TransitionImage imageData={About2} alt="about2" className="w-full rounded-xl" parallaxSlideLength={20} baseScale={1.1} />}
                    >
                        想像以上に社会人サークルの良さを感じたため、自分で福山市中心の社会人サークルを設立しました。<br />
                        社会人サークルを運営していると、遊びに来てくれる人が自然とカップルになることがありました。<br />
                        そんな経験から『人と人を繋げる仕事がしたい。』と思うようになり、結婚相談所の起業を決意しました。
                    </FeatureCard>

                    <FeatureCard
                        title="結婚相談所"
                        num="03"
                        className="bg-color12 text-color10"
                        imageSection={<TransitionImage imageData={Img1} alt="about2" className="w-full rounded-xl " parallaxSlideLength={20} baseScale={1.1} />}
                    >
                        結婚相談所を起業するために、福山市の結婚相談所を6か所周り、市場調査をしました。<br />
                        すると、自分だったら入会できない価格設定に驚愕しました。<br />
                        もっと、お客様に寄り添った結婚相談所にしなければ！と思い、Match-Bondができました。
                    </FeatureCard>

                    <motion.div
                        viewport={{ once: true }}
                        initial={{  translateY: "80px", scale: 1.1 }}
                        whileInView={{  translateY: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="space-y-8 mb-0 p-12 -mt-12 rounded-t-3xl bg-color6 text-color10 flex flex-col">
                        <div className="flex flex-col justify-center md:p-8 gap-4">
                            <AboutHeqading num="04" title="サービス" />
                            <FadeAndSlideScrollTriggerAnimation
                                className="space-y-2 mt-3 sm:mt-5 md:mt-7 text-size2 flex flex-col"
                            >
                                Match-Bondはお客様のために、大きく分けて2つのサービスを提供します。<br />
                                1つ目は福山市近辺のお店に協力してもらうことで、<br />
                                総額〇〇万円をお得に婚活・結婚をしてもらうサービスです。<br />

                                <Link
                                    href="#support"
                                    className="my-4 font-bold text-size1 text-color9 hover:text-color9 hover:underline transition-colors duration-300"
                                >
                                    詳細はコチラ
                                </Link>

                                2つ目は入会費・登録費といった初期費用が０円。<br />
                                そして、月会費無料プランを選ぶと月会費も0円という、<br />
                                結婚相談所のハードルを大きく下げるサービスです。<br />

                                <Link href="#mariage"
                                    className="my-4 font-bold text-size1 text-color9 hover:text-color9 hover:underline transition-colors duration-300">
                                    詳細はコチラ
                                </Link>

                                お客様が「お得」「効率的」「幸せ」に婚活できることをお約束します。<br />
                                結婚した後も幸せが続くようにご支援します。<br />
                            </FadeAndSlideScrollTriggerAnimation>
                        </div>
                        <Image src={Illust} alt="婚活を支援する企業になりませんか?" className="w-full max-w-screen-sm mx-auto" />
                    </motion.div>

                    <FeatureCard
                        title="結婚について"
                        num="05"
                        className="bg-color9_2"
                        imageSection={<TransitionImage imageData={Img2} alt="about2" className="w-full rounded-xl" parallaxSlideLength={20} baseScale={1.1} />}
                    >
                        令和元年以降3万組以上の結婚する人が減少しています。<br />
                        様々な情報から、「結婚はしない方いい」と思っている人が多いのではないかと思います。<br />
                        「一緒にいると心地の良い人」と結婚できることは、とても幸せなことです。<br />
                        独身でも楽しめることは数えきれないほどあります。<br />
                        結婚したら、楽しめることを制限されるかもしれません。<br />
                        しかし、結婚すると「心が満たされる」「未体験の幸せ」を実感することができます。<br />
                        こんな幸せを実感しないなんて勿体ないです！
                    </FeatureCard> */}

                    <motion.div
                        viewport={{ once: true }}
                        initial={{ translateY: "40px", scale: 1.1 }}
                        whileInView={{  translateY: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="space-y-8 p-12 -mt-12 rounded-t-3xl  bg-color6 text-color10">
                        <div className="flex flex-col justify-center md:p-8 gap-4">
                            <AboutHeqading num="06" title="企業理念" />
                            <FadeAndSlideScrollTriggerAnimation
                                className="space-y-2 mt-3 sm:mt-5 md:mt-7 text-size2 "
                            >
                                Match-Bondの企業理念は<br />

                                <h3 className="text-color9 text-title3 mb-4 font-bold">
                                    「結婚後も幸せが続く家庭づくりを」
                                </h3>


                                結婚がゴールではありません。<br />
                                知り合い、気になり、好きなり、付き合い、結婚、家庭を持ち、<br />
                                その中でたくさんの衝突が出てきます。
                                そんな時に、お客様を支えるパートナーでありたい。<br />
                                そんな思いから「夫婦関係」「子育て」のお悩み相談も行っています。<br />
                                Match-Bondはお客様の婚活から結婚後までを全力でサポートします。
                            </FadeAndSlideScrollTriggerAnimation>
                        </div>

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