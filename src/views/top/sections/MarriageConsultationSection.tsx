import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Image from 'next-export-optimize-images/picture';
import JBA from '@/assets/jba.png';
import IBJ from '@/assets/IBJ.png';
import Connect from '@/assets/Connect.png';
import { HighlightMarker } from "@/components/HighlightMarker";
import Link from "next/link";

const keyFeatures = [
    {
        value: "0円",
        label: "初期費用",
        desc: "入会費・登録費なし",
    },
    {
        value: "3つ",
        label: "選べるプラン",
        desc: "あなたのペースで",
    },
    {
        value: "40社以上",
        label: "提携企業",
        desc: "婚活を全力サポート",
    },
];

const plans = [
    {
        name: "3ヵ月お試しプラン",
        keyword: "まずは体験から",
        desc: "結婚相談所の雰囲気を知りたい方へ。無理なく婚活をスタートできます。",
    },
    {
        name: "マイペースプラン",
        keyword: "月会費 0円",
        desc: "自分のペースを大切にしながら婚活したい方へ。費用を気にせず続けられます。",
    },
    {
        name: "婚活集中プラン",
        keyword: "お見合い費 0円",
        desc: "積極的に婚活を進めたい方へ。何度お見合いしても追加費用なし。",
    },
];

export const MarriageConsultationSection = () => {
    return (
        <div className="w-full mt-20 bg-linen flex flex-col items-center">
            <TitleType title="結婚相談所" ancher="mariage" subTitle="Marriage" className="mt-20" />
            <div className="heading-line mt-3" />

            {/* Philosophy intro */}
            <div className="max-w-screen-md mx-auto px-8 mt-14 w-full">
                <FadeAndSlideScrollTriggerAnimation className="flex flex-col items-center gap-3 text-center">
                    <HighlightMarker className="text-title4">
                        婚活を始める負担を、限りなくゼロに。
                    </HighlightMarker>
                    <HighlightMarker className="text-title4">
                        婚活を前に進める仕組みは、どこよりも丁寧に。
                    </HighlightMarker>
                    <p className="mt-4 max-w-xl leading-[1.9] text-body-light text-size2">
                        Match‐Bondは、安心して一歩を踏み出せる婚活設計を大切にしています。
                        無理なく始められ、続けやすく、その人のペースで前に進める結婚相談所です。
                    </p>
                </FadeAndSlideScrollTriggerAnimation>

                {/* Key features grid */}
                <div className="grid grid-cols-3 gap-4 mt-12">
                    {keyFeatures.map((f) => (
                        <FadeAndSlideScrollTriggerAnimation key={f.label}>
                            <div className="bg-white rounded-2xl border border-sand/30 p-5 md:p-7 text-center shadow-sm">
                                <p className="text-primary font-mincho font-bold text-[1.8rem] md:text-[2.4rem] leading-none">{f.value}</p>
                                <p className="text-size2 text-body mt-2 font-medium">{f.label}</p>
                                <p className="text-size3 text-body-muted mt-1 leading-relaxed">{f.desc}</p>
                            </div>
                        </FadeAndSlideScrollTriggerAnimation>
                    ))}
                </div>
            </div>

            {/* Plans section */}
            <div className="max-w-screen-md mx-auto px-8 mt-16 w-full">
                <FadeAndSlideScrollTriggerAnimation className="text-center mb-8">
                    <HighlightMarker className="text-title4 mx-auto">
                        お客様の想いから生まれた3つのプラン
                    </HighlightMarker>
                    <p className="mt-4 text-size2 text-body-muted leading-[1.9] max-w-lg mx-auto">
                        従来の結婚相談所では「頑張れば頑張るほど費用がかかる」「少し休みたくても固定費がかかる」という声が多くありました。
                        Match‐Bondのプランは、実際のお客様の声をもとに設計されています。
                    </p>
                </FadeAndSlideScrollTriggerAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {plans.map((plan) => (
                        <FadeAndSlideScrollTriggerAnimation key={plan.name}>
                            <div className="bg-white rounded-2xl border border-sand/30 p-7 shadow-sm flex flex-col gap-3 h-full">
                                <span className="inline-block self-start px-3 py-1 bg-primary-pale text-primary text-size3 rounded-full font-medium">
                                    {plan.keyword}
                                </span>
                                <h3 className="text-size1 text-body font-medium">{plan.name}</h3>
                                <p className="text-size2 text-body-muted leading-[1.9] mt-auto">{plan.desc}</p>
                            </div>
                        </FadeAndSlideScrollTriggerAnimation>
                    ))}
                </div>

                <FadeAndSlideScrollTriggerAnimation className="mt-6 text-center">
                    <Link className="text-primary hover:text-primary-dark transition-colors text-size2" href="#plan">
                        → 詳しくは【料金プラン】をご覧ください
                    </Link>
                </FadeAndSlideScrollTriggerAnimation>
            </div>

            {/* Partnership network */}
            <div className="max-w-screen-md mx-auto px-8 mt-16 mb-16 w-full">
                <FadeAndSlideScrollTriggerAnimation className="text-center mb-10">
                    <HighlightMarker className="text-title4 mx-auto">
                        全国ネットワークでお相手を探す
                    </HighlightMarker>
                    <p className="mt-4 text-size2 text-body-muted leading-[1.9] max-w-lg mx-auto">
                        JBA・コネクトシップ・IBJの3つのネットワークで、全国約10万人以上の中から
                        あなたに合うお相手をご紹介します。
                    </p>
                </FadeAndSlideScrollTriggerAnimation>

                {/* JBA */}
                <div className="bg-white rounded-2xl border border-sand/30 p-7 md:p-10 mb-5 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="flex-shrink-0 flex justify-center">
                            <FadeAndSlideScrollTriggerAnimation>
                                <Image src={JBA} alt="JBA" className="w-full max-w-[180px]" />
                            </FadeAndSlideScrollTriggerAnimation>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-title4 text-body font-medium text-center md:text-left">JBAについて</h3>
                            <p className="text-size2 text-body-light leading-[1.9]">
                                国内大手のJBA（日本結婚相談協会）に所属し、毎週火曜日にお見合い相手をご紹介。
                                ノッツエ・BIU・良縁会の会員様も含め、全国約7万人（広島県・岡山県：約1,200人）からご紹介可能。
                                4社の会員情報を一括で検索・やりとりできます。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Connectship */}
                <div className="bg-white rounded-2xl border border-sand/30 p-7 md:p-10 mb-5 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="flex-shrink-0 flex justify-center">
                            <FadeAndSlideScrollTriggerAnimation>
                                <Image src={Connect} alt="コネクトシップ" className="w-full max-w-[160px]" />
                            </FadeAndSlideScrollTriggerAnimation>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1 text-center md:text-left">
                                <span className="inline-block self-start mx-auto md:mx-0 px-3 py-0.5 bg-sand/50 text-body-muted text-size3 rounded-full">
                                    オプション
                                </span>
                                <h3 className="text-title4 text-body font-medium">コネクトシップ</h3>
                            </div>
                            <p className="text-size3 font-medium text-primary bg-primary-pale px-4 py-2.5 rounded-xl text-center">
                                登録費用55,000円 ／ 月会費2,000円 ／ お見合い費1,000円
                            </p>
                            <p className="text-size2 text-body-light leading-[1.9]">
                                他社13社の結婚相談所会員をご紹介。JBAと合わせると約10万人に。
                                AIマッチングで毎週水曜日に新しいお相手をご紹介。
                                お見合い状況・交際率など進捗を数値で可視化します。
                            </p>
                        </div>
                    </div>
                </div>

                {/* IBJ */}
                <div className="bg-white rounded-2xl border border-sand/30 p-7 md:p-10 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="flex-shrink-0 flex justify-center">
                            <FadeAndSlideScrollTriggerAnimation>
                                <Image src={IBJ} alt="IBJ" className="w-full max-w-[160px]" />
                            </FadeAndSlideScrollTriggerAnimation>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1 text-center md:text-left">
                                <span className="inline-block self-start mx-auto md:mx-0 px-3 py-0.5 bg-sand/50 text-body-muted text-size3 rounded-full">
                                    オプション
                                </span>
                                <h3 className="text-title4 text-body font-medium">IBJ</h3>
                            </div>
                            <p className="text-size3 font-medium text-primary bg-primary-pale px-4 py-2.5 rounded-xl text-center">
                                登録費用88,000円 ／ 月会費5,000円 ／ お見合い費1,000円
                            </p>
                            <p className="text-size2 text-body-light leading-[1.9]">
                                単体で会員数10万人超。男性の80%以上が年収500万円以上・大卒85%以上。
                                活発な会員様が多く、お見合いも組みやすいのが特徴。
                                婚活業界No.1の成婚率。「市」単位での検索も可能
                                （福山市：約350名 ／ 尾道：約120名）。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
