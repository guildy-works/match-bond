import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { SectionType1 } from "@/components/SectionType1";
import { BookingBunner } from "@/components/BookingBunner";

const services = [
    {
        num: "01",
        subtitle: "まずは話してみる",
        title: "お悩み相談",
        desc: "恋愛・婚活・結婚後・夫婦関係・子育てについてのお悩みを受け付けています。何から始めればよいか分からない方もお気軽にどうぞ。",
    },
    {
        num: "02",
        subtitle: "目標を決めて動き出す",
        title: "恋愛コーチング",
        desc: "お客様の想いを明確にし、目標を設定。やるべき行動を一緒に考えます。",
    },
];

export const ConsultantsSection = () => {
    return (
        <SectionType1 className="w-full bg-blush/30 py-6 md:py-20" innerClassName="flex flex-col items-center">
            <TitleType ancher="consultants" title="恋愛・お悩み相談窓口" subTitle="Consultants" />
            <div className="heading-line mt-3" />

            <FadeAndSlideScrollTriggerAnimation className="mx-auto mt-6 text-center leading-[1.9] max-w-lg text-body-light text-size2">
                「婚活の前に、まず誰かに話したい」<br />
                そんなあなたにも、Match-Bondは寄り添います。<br />
                恋愛・婚活・結婚後・夫婦関係・子育てまで、<br />
                どんなお悩みもお受けしています。
            </FadeAndSlideScrollTriggerAnimation>

            {/* Free trial callout */}
            <FadeAndSlideScrollTriggerAnimation className="mt-6">
                <div className="inline-flex items-center gap-4 bg-white px-8 py-5 rounded-2xl border border-primary/50">
                    <div className="text-center">
                        <p className="text-[2rem] font-mincho font-bold text-primary leading-none">15分</p>
                        <p className="text-size3 text-body-muted mt-0.5">初回無料</p>
                    </div>
                    <div className="w-px h-10 bg-sand/60" />
                    <p className="text-size2 text-body-light leading-relaxed">
                        まずは無料でご相談ください。<br />
                        <span className="text-size3 text-body-muted">※ 事前予約が必要です。</span>
                    </p>
                </div>
            </FadeAndSlideScrollTriggerAnimation>

            {/* Service step cards */}
            <div className="max-w-4xl mx-auto mt-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {services.map((service, i) => (
                        <FadeAndSlideScrollTriggerAnimation key={service.num} delay={i * 0.04}>
                            <div className="bg-white rounded-2xl border border-primary/30 p-7 flex flex-col h-full">
                                <span className="font-asterdam text-gold/60 text-[1.4rem] tracking-wider">
                                    {service.num}
                                </span>
                                <div>
                                    <p className="text-size2 text-primary">{service.subtitle}</p>
                                    <h3 className="text-title3 text-body text-primary">{service.title}</h3>
                                </div>
                                <p className="text-size2 text-body-muted leading-[1.9]">{service.desc}</p>
                            </div>
                        </FadeAndSlideScrollTriggerAnimation>
                    ))}
                </div>
            </div>

            <div className="mt-10 sm:mt-14 md:mt-16">
                <BookingBunner />
            </div>
        </SectionType1>
    );
};
