import { BookingBunner } from "@/components/BookingBunner";
import { SectionType1 } from "@/components/SectionType1";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Link from "next/link";
import { ReactNode } from "react";

export const FeaturesSection = () => {

    return (
        <SectionType1 className="bg-color12/10" >
            <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center pb-20">
                <FadeAndSlideScrollTriggerAnimation className="space-y-3 w-fit">
                    <h2 className="text-center">
                        <span className="text-color9 text-title1">Match-Bond</span>
                        <span className="text-grey1 text-title2">のサービス</span>
                    </h2>
                    <hr className="border-color11" />
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation className="text-color10 text-center">
                    <div className="text-center">
                        <div>
                            <span className="font-black">初期費用０円</span>
                            <span className="text-size2">の結婚相談所</span>
                        </div>
                        <div>×</div>
                        <div>
                            <span className="font-black">４０社以上の婚活協力企業</span>
                            <span className="text-size2">と提携</span>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        「今のあなたに必要な場所」が婚活を前に進めます。
                        出会いから成婚退会まで含めて、
                        婚活を前に進める仕組みを設計しています。
                    </div>
                </FadeAndSlideScrollTriggerAnimation>

                <CardGrid />
            </div >

            <div className="w-full mb-24 sm:mb-0">
                <BookingBunner />
            </div>


        </SectionType1 >

    )
}

const CardItem = ({ title, content, colorClass, delay, href }: { delay: number, title: ReactNode, content: ReactNode, colorClass: string, href: string }) => {
    return (
        <Link href={href}>
            <FadeAndSlideScrollTriggerAnimation
                delay={delay}
                className={`size-full text-center p-3 sm:p-6 rounded-3xl flex flex-col justify-center items-center min-h-28 ${colorClass}`}>
                <h2 className="text-size2 text-white mb-2 border-b-orange-100 border-b-2  pb-2 w-full whitespace-pre">{title}</h2>
                <p className="text-size2 text-white">{content}</p>
            </FadeAndSlideScrollTriggerAnimation>
        </Link>
    );
};

const CardGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <CardItem
                href="#mariage"
                title={<>私たちの<br className="sm:hidden" />結婚相談所について</>}
                delay={0}
                content={<>
                    婚活を始める負担を、<br/>限りなくゼロに。<br className="" />
                    婚活を前に<br className="sm:hidden" />進める仕組みは、<br />どこよりも丁寧に。
                </>}
                colorClass="bg-color9"
            />
            <CardItem
                href="#support"
                delay={0.01}
                title={<>どんな婚活サポート</>}
                content={<>４０社以上の<br className="sm:hidden" />婚活協力企業が<br className="" />
                    あなたの婚活を<br className="sm:hidden" />全力応援</>}
                colorClass="bg-color10"
            />
            <CardItem
                delay={0.02}
                href="#plan"
                title="料金プラン"
                content={<>
                初期費用０円<br className="sm:hidden" />（入会費・登録費）<br />
                    お客様の想いから<br className="sm:hidden" />生まれた<br />
                    ３つのプラン
                    </>}
                colorClass="bg-color11"
            />
            <CardItem
                delay={0.03}
                href="#reviews"
                title="お客様の声"
                content={<>福山市№１の<br className="sm:hidden" />Google口コミ</>}
                colorClass="bg-color9"
            />
            <CardItem
                delay={0.04}
                href="#events"
                title="婚活イベント"
                content={<>96％の確率で<br className="sm:hidden" />カップリング成立</>}
                colorClass="bg-color10"
            />
            <CardItem
                href="#consultants"
                delay={0.05}
                title="恋愛相談窓口"
                content={<>初回15分無料<br className="sm:hidden" />まずは、ココから！</>}
                colorClass="bg-color11"
            />
        </div>
    );
};

