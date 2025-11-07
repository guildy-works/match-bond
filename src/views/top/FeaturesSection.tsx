import { BookingBunner } from "@/components/BookingBunner";
import { SectionType1 } from "@/components/SectionType1";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Link from "next/link";
import { ReactNode } from "react";

export const FeaturesSection = () => {

    return (
        <SectionType1 className="bg-color12/10" >
            <div className="max-w-4xl mx-auto md:mt-40 flex flex-col gap-8 items-center pb-20">
                <FadeAndSlideScrollTriggerAnimation className="space-y-3 w-fit">
                    <h2 className="text-center">
                        <span className="text-color9 text-title1">Match-Bond</span>
                        <span className="text-grey1 text-title2">のサービス</span>
                    </h2>
                    <hr className="border-color11" />
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation className="text-color10">
                    「お得」「効率的」「幸せ」な婚活をサポートします。<br />

                    福山市近辺のお店で<br />
                    総額〇〇万円お得なサービスを受けながら、<br />
                    効率的に幸せな婚活・結婚を目指します。<br />
                    福山市のGoogle口コミNo１の婚活サポートです。
                </FadeAndSlideScrollTriggerAnimation>


                <CardGrid />
            </div>

<div className="w-full mb-24 sm:mb-0">
           <BookingBunner />
</div>
 

        </SectionType1>

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
                href="#support"
                title="どんな婚活サポート？"
                delay={0}
                content={<>「お得」「効率的」<br className="sm:hidden" />「幸せ」</>}
                colorClass="bg-color9"
            />
            <CardItem
                href="/services#service1"
                delay={0.01}
                title={<>お得なサービスが<br className="md:hidden" />受けれるお店一覧</>}
                content="婚活～結婚に有益なお店"
                colorClass="bg-color10"
            />
            <CardItem
                delay={0.02}
                href="#reviews"
                title="お客様の声"
                content={<>福山市No1の<br className="sm:hidden" />Google口コミ</>}
                colorClass="bg-color11"
            />
            <CardItem
                delay={0.03}
                href="#mariage"
                title="結婚相談所"
                content={<>「入会金・登録費」<br className="sm:hidden" />初期費用が0円</>}
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

