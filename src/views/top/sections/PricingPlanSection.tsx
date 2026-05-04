import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { ServiceDialog } from "@/components/ServiceDialog";
import Image from 'next-export-optimize-images/picture';
import Plan from '@/assets/plan.jpg';
import { HighlightMarker } from "@/components/HighlightMarker";
import { Glossary } from "@/components/Glossary";

const plans = [
    {
        name: "3ヵ月お試しプラン",
        badge: "はじめての方に",
        badgeClass: "bg-primary-pale text-primary",
        desc: <>結婚相談所の雰囲気を知りたい方。<br/>まずは3ヶ月、<br/>無理なく婚活を体験できます。</>,
    },
    {
        name: "マイペースプラン",
        badge: "月会費 0円",
        badgeClass: "bg-gold-light/50 text-gold-dark",
        desc: <>自分のペースを大切に婚活したい方。<br/>費用の心配なく、<br/>じっくりと活動できます。</>,
    },
    {
        name: "婚活集中プラン",
        badge: "お見合い費 0円",
        badgeClass: "bg-primary-pale text-primary",
        desc: <>積極的に婚活を進めたい方。<br/>何度お見合いしても<br/>追加費用は一切かかりません。</>,
    },
];

export const PricingPlanSection = () => {
    return (
        <div className="w-full bg-petal/40 p-8 sm:p-14 pt-0 sm:pt-0 relative">
            <div id="plan" className="absolute -top-32" />

            <div className="max-w-4xl mx-auto py-16 flex flex-col items-center">
                <FadeAndSlideScrollTriggerAnimation className="w-full">
                    <TitleType ancher="" title="料金プラン" subTitle="Plans" className="mx-auto" />
                </FadeAndSlideScrollTriggerAnimation>
                <div className="heading-line mt-3" />

                <div className="max-w-lg mx-auto mt-8 leading-[1.9] text-center text-body-light text-size2">
                    <HighlightMarker className="text-title4">初期費用０円（入会費・登録費）</HighlightMarker><br />
                    婚活に踏み出す最初の一歩を応援したい。その想いから、<br />
                    入会費・登録費といった初期費用をいただいていません。<br />
                    事務所を構えず不要な固定費をかけない運営を行い、<br />
                    抑えた固定費は会員様が婚活に集中できる<br  className="md:hidden"/>
                    仕組みづくりへ還元しています。<br /><br />
                </div>

                {/* Plans */}
                <div className="w-full mt-0">
                    <FadeAndSlideScrollTriggerAnimation className="text-center mb-8">
                        <HighlightMarker className="text-title4 mx-auto">
                            お客様の想いから生まれた、3つのプラン
                        </HighlightMarker>
                        <p className="mt-3 text-size2 text-body-muted leading-[1.9]">
                            婚活の進め方は人それぞれ。活動スタイルに合わせて選べるプランを用意しています。
                        </p>
                    </FadeAndSlideScrollTriggerAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {plans.map((plan, i) => (
                            <FadeAndSlideScrollTriggerAnimation key={plan.name} delay={i * 0.04}>
                                <div className="bg-white rounded-2xl border border-sand p-7 px-2 flex flex-col items-center text-center h-full">
                                    <span className={`inline-block px-4 py-1.5 rounded-full text-size3 font-medium ${plan.badgeClass}`}>
                                        {plan.badge}
                                    </span>
                                    <h3 className="text-title4 mt-2 text-primary">{plan.name}</h3>
                                    <p className="text-size2 text-body-muted leading-[1.9] mt-auto">{plan.desc}</p>
                                </div>
                            </FadeAndSlideScrollTriggerAnimation>
                        ))}
                    </div>
                </div>

                <div className="mx-auto py-6 md:py-10 w-44">
                    <ServiceDialog>
                        <div className="w-full p-4">
                            <Image src={Plan} alt="料金表" />
                        </div>
                    </ServiceDialog>
                </div>

                <Glossary />
            </div>
        </div>
    );
};
