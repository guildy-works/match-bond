import { BookingBunner } from "@/components/BookingBunner";
import { SectionType1 } from "@/components/SectionType1";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Link from "next/link";
import { ReactNode } from "react";

const stats = [
    { value: "0円", label: "初期費用", sub: "入会費・登録費" },
    { value: "96%", label: "マッチング率", sub: "2024年10月実績" },
    { value: "40社以上", label: "提携企業", sub: "婚活応援ネットワーク" },
    { value: "約10万人", label: "紹介可能人数", sub: "全国会員データ" },
];

export const FeaturesSection = () => {
    return (
        <SectionType1 className="bg-linen">
            <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center pb-16 w-full">

                {/* Section title */}
                <FadeAndSlideScrollTriggerAnimation className="space-y-3 w-fit text-center">
                    <p className="text-gold/60 font-asterdam text-[1.6rem] tracking-wider">Service</p>
                    <h2 className="text-center">
                        <span className="text-primary text-title2 font-mincho">Match-Bond</span>
                        <span className="text-body-light text-title3">のサービス</span>
                    </h2>
                    <div className="heading-line" />
                </FadeAndSlideScrollTriggerAnimation>

                {/* Stats strip */}
                <FadeAndSlideScrollTriggerAnimation className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-sand/50 border border-sand/50 rounded-2xl overflow-hidden">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-white/90 py-7 px-4 text-center">
                                <p className="text-primary font-bold text-[1.6rem] md:text-[2rem] font-mincho leading-none">{stat.value}</p>
                                <p className="text-size2 text-body mt-2 font-medium">{stat.label}</p>
                                <p className="text-size3 text-body-muted mt-1">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </FadeAndSlideScrollTriggerAnimation>

                {/* Intro copy */}
                <FadeAndSlideScrollTriggerAnimation className="text-center max-w-lg">
                    <div className="text-center space-y-1 text-body-light">
                        <div>
                            <span className="text-primary font-medium">初期費用０円</span>
                            <span className="text-size2">の結婚相談所</span>
                        </div>
                        <div className="text-gold/40 text-size3">×</div>
                        <div>
                            <span className="text-primary font-medium">４０社以上の婚活協力企業</span>
                            <span className="text-size2">と提携</span>
                        </div>
                    </div>

                    <p className="text-center mt-6 leading-relaxed text-body-light text-size2">
                        「今のあなたに必要な場所」が婚活を前に進めます。<br />
                        出会いから成婚退会まで、<br />
                        婚活を前に進める仕組みを設計しています。
                    </p>
                </FadeAndSlideScrollTriggerAnimation>

                <CardGrid />
            </div>

            <div className="w-full mb-20 sm:mb-0">
                <BookingBunner />
            </div>
        </SectionType1>
    )
}

const CardItem = ({ title, content, label, delay, href }: {
    delay: number
    title: ReactNode
    content: ReactNode
    label: string
    href: string
}) => (
    <Link href={href}>
        <FadeAndSlideScrollTriggerAnimation
            delay={delay}
            className="size-full text-center p-5 sm:p-6 rounded-2xl flex flex-col justify-start items-center min-h-36 bg-white border border-sand/40 hover:border-primary/20 hover:shadow-md transition-all duration-300 group">
            <span className="text-[0.6rem] text-primary tracking-[0.15em] uppercase border border-primary/25 rounded-full px-3 py-0.5 mb-3 group-hover:bg-primary-pale/60 transition-colors">
                {label}
            </span>
            <h2 className="text-size2 text-body mb-2 font-medium">{title}</h2>
            <p className="text-size3 text-body-muted leading-relaxed">{content}</p>
        </FadeAndSlideScrollTriggerAnimation>
    </Link>
);

const CardGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        <CardItem href="#mariage" label="Marriage" title="結婚相談所" delay={0}
            content={<>婚活を始める負担を限りなくゼロに。<br className="hidden sm:block" />前に進める仕組みを丁寧に。</>}
        />
        <CardItem href="#support" label="Support" delay={0.02} title="婚活サポート"
            content={<>４０社以上の婚活応援企業が<br className="hidden sm:block" />あなたの婚活を全力応援</>}
        />
        <CardItem delay={0.04} label="Plans" href="#plan" title="料金プラン"
            content={<>初期費用０円（入会費・登録費）<br className="hidden sm:block" />お客様の想いから生まれた３プラン</>}
        />
        <CardItem delay={0.06} label="Reviews" href="#reviews" title="お客様の声"
            content={<>福山市No.1のGoogle口コミ</>}
        />
        <CardItem delay={0.08} label="Events" href="#events" title="婚活イベント"
            content={<>96%の確率でカップリング成立</>}
        />
        <CardItem href="#consultants" label="Consult" delay={0.1} title="恋愛相談窓口"
            content={<>初回15分無料<br />まずは、ここから！</>}
        />
    </div>
);
