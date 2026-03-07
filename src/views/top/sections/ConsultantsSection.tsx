import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Plan from '@/assets/plan.jpg';
import { SectionType1 } from "@/components/SectionType1";
import { BookingBunner } from "@/components/BookingBunner";
import { PricingPlan } from "@/components/PricingPlan";

export const ConsultantsSection = () => {
    return (
        <SectionType1 className="w-full bg-color1 py-8 md:py-24" innerClassName="flex flex-col items-center">
            <TitleType ancher="consultants" title="恋愛・お悩み相談窓口" subTitle="Consultants" />

            <FadeAndSlideScrollTriggerAnimation className="mx-auto mt-8">
                Match-Bondの恋愛相談窓口は<br />
                「恋愛」「婚活」「結婚後」「夫婦関係」「子育て」<br />
                についてのお悩みを受け付けています。<br /><br />

                Match-Bondを利用したいけど、<br />
                何から利用したらいいのか分からない方も<br />
                恋愛相談窓口をご利用ください。<br />
            </FadeAndSlideScrollTriggerAnimation>

            <div className='max-w-6xl mx-auto mt-8'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
                    <FadeAndSlideScrollTriggerAnimation className='h-full max-w-sm'>
                        <PricingPlan
                            title='お悩み相談'
                            disableButton
                            image={Plan}
                            description={<>恋愛・婚活・結婚後・夫婦関係・子育て<br />についての相談を受け付けます。</>}
                        />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={0.06} className='h-full max-w-sm'>
                        <PricingPlan
                            title='恋愛コーチング'
                            disableButton
                            image={Plan}
                            description={<>お客様の想いを明確にし、<br />目標を設定、<br />やるべき行動をお伝えします。</>}
                        />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={0.08} className='h-full max-w-sm'>
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

            <p className="mt-8">
                初回15分無料で恋愛相談窓口を利用できます！<br />
                ※事前予約が必要です。
            </p>

            <div className="mt-8 sm:mt-16 md:mt-24">
                <BookingBunner />
            </div>
        </SectionType1>
    );
};
