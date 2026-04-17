import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Plan from '@/assets/plan.jpg';
import { SectionType1 } from "@/components/SectionType1";
import { BookingBunner } from "@/components/BookingBunner";
import { PricingPlan } from "@/components/PricingPlan";

export const ConsultantsSection = () => {
    return (
        <SectionType1 className="w-full bg-blush/30 py-10 md:py-20" innerClassName="flex flex-col items-center">
            <TitleType ancher="consultants" title="恋愛・お悩み相談窓口" subTitle="Consultants" />
            <div className="heading-line mt-3" />

            <FadeAndSlideScrollTriggerAnimation className="mx-auto mt-8 text-center leading-[1.9] max-w-lg text-body-light text-size2">
                Match-Bondの恋愛相談窓口は
                「恋愛」「婚活」「結婚後」「夫婦関係」「子育て」についてのお悩みを受け付けています。<br /><br />
                何から利用したらいいのか分からない方も、恋愛相談窓口をお気軽にご利用ください。
            </FadeAndSlideScrollTriggerAnimation>

            <div className='max-w-4xl mx-auto mt-10'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <FadeAndSlideScrollTriggerAnimation className='h-full max-w-sm'>
                        <PricingPlan
                            title='お悩み相談'
                            disableButton
                            image={Plan}
                            description={<>恋愛・婚活・結婚後<br />夫婦関係・子育てについての相談を受け付けます。</>}
                        />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={0.03} className='h-full max-w-sm'>
                        <PricingPlan
                            title='恋愛コーチング'
                            disableButton
                            image={Plan}
                            description={<>お客様の想いを明確にし、<br />目標を設定、<br />やるべき行動をお伝えします。</>}
                        />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={0.06} className='h-full max-w-sm'>
                        <PricingPlan
                            title='恋愛タロット占い'
                            disableButton
                            image={Plan}
                            description={<>恋愛タロット占いで楽しく<br />
                                未来を占いましょう。</>}
                        />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </div>

            <p className="mt-8 text-center text-primary font-medium">
                初回15分無料で恋愛相談窓口を利用できます！<br />
                <span className="text-size3 text-body-muted font-normal">※事前予約が必要です。</span>
            </p>

            <div className="mt-10 sm:mt-14 md:mt-16">
                <BookingBunner />
            </div>
        </SectionType1>
    );
};
