import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { ServiceDialog } from "@/components/ServiceDialog";
import Image from 'next-export-optimize-images/picture';
import Plan from '@/assets/plan.jpg';
import { HighlightMarker } from "@/components/HighlightMarker";
import { PricingPlan } from "@/components/PricingPlan";
import { Glossary } from "@/components/Glossary";

export const PricingPlanSection = () => {
    return (
        <div className="w-full bg-color1  p-8 sm:p-16 pt-0 sm:pt-0 relative">
            <div id="plan" className="absolute -top-32" />

            <div className='max-w-6xl mx-auto py-8 flex flex-col'>
                <FadeAndSlideScrollTriggerAnimation className="mx-auto mt-6">
                    <TitleType ancher="" title="料金プラン" subTitle="Plans" className="mx-auto" />
                </FadeAndSlideScrollTriggerAnimation>

                <div className="max-w-md mx-auto mt-6">
                    <HighlightMarker>初期費用０円（入会費・登録費）</HighlightMarker><br />
                    婚活に踏み出す、最初の一歩を応援したい。<br />
                    その想いから、Match‐Bondでは入会費・登録費といった初期費用をいただいていません。<br />
                    なぜ、初期費用0円なのか？<br />
                    事務所を構えず、不要な固定費をかけない運営を行っているからです。<br />
                    抑えた固定費は、会員様が婚活に集中できる仕組みづくりへ還元しています。<br />
                    「始めるだけでお金がかかる」そんな婚活にはしたくありません。<br /><br />

                    <HighlightMarker>お客様の想いから生まれた、３つのプラン</HighlightMarker><br />
                    従来の結婚相談所では、「頑張れば頑張るほど費用がかかる」「少し休みたくても固定費がかか<br />
                    る」そんな声が多くありました。<br />
                    Match‐Bondのプランは、実際のお客様の声と想いをもとに設計しています。
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mt-6 mx-auto">
                    <FadeAndSlideScrollTriggerAnimation className='h-full max-w-sm'>
                        <PricingPlan
                            title='3ヵ月お試しプラン'
                            image={Plan}
                            disableButton
                            description={<>
                                結婚相談所の雰囲気を知りたい方。<br />
                                無理なく入会を検討できます。
                            </>}
                        />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={0.02} className='h-full max-w-sm'>
                        <PricingPlan
                            title='マイペースプラン'
                            image={Plan}
                            disableButton
                            description={<>
                                月会費０円。<br />
                                少し休みたい、忙しい、<br />
                                自分のペースを大切に婚活したい方。
                            </>}
                        />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={0.04} className='h-full max-w-sm'>
                        <PricingPlan
                            title='婚活集中プラン'
                            image={Plan}
                            disableButton
                            description={<>
                                お見合い費0円<br />
                                積極的に婚活を進めたい方。
                            </>}
                        />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>

                <div className="mx-auto py-4 md:py-8 w-36">
                    <ServiceDialog  >
                        <div className='w-full p-4'>
                            <Image src={Plan} alt="料金表" />
                        </div>
                    </ServiceDialog>
                </div>

                <Glossary />
            </div>
        </div>
    );
};
