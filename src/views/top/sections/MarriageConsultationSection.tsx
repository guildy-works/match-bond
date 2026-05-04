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
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-12 -mx-6 max-w-2xl sm:mx-auto">
                    {keyFeatures.map((f) => (
                        <FadeAndSlideScrollTriggerAnimation key={f.label}>
                            <div className="bg-white rounded-2xl border border-sand py-5 px-1 md:p-7 text-center">
                                <p className="text-primary font-mincho font-bold text-[1.4rem] md:text-[2rem] leading-none">{f.value}</p>
                                <p className="text-size3 text-body mt-1 font-medium">{f.label}</p>
                                <p className="text-size3 text-body-muted leading-relaxed">{f.desc}</p>
                            </div>
                        </FadeAndSlideScrollTriggerAnimation>
                    ))}
                </div>
            </div>

            {/* Plans section */}
            <div className="max-w-screen-md mx-auto px-8 mt-16 w-full">
                <FadeAndSlideScrollTriggerAnimation className="text-center">
                    <HighlightMarker className="text-title4 mx-auto">
                        お客様の想いから生まれた3つのプラン
                    </HighlightMarker>
                    <p className="mt-4 text-size2 text-start text-body-muted leading-[1.9] max-w-lg mx-auto">
                        従来の結婚相談所では「頑張れば頑張るほど費用がかかる」
                        「少し休みたくても固定費がかかる」という声が多くありました。
                        Match‐Bondのプランは、
                        実際のお客様の声をもとに設計されています。
                    </p>
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation className="mt-2 mb-6 text-center">
                    <Link className="text-primary hover:text-primary-dark transition-colors text-size2" href="#plan">
                        → 詳しくは【料金プラン】をご覧ください
                    </Link>
                </FadeAndSlideScrollTriggerAnimation>
            </div>

            {/* Partnership network */}
            <div className="max-w-screen-md mx-auto px-8 w-full">
                <FadeAndSlideScrollTriggerAnimation className="text-center mb-6">
                    <HighlightMarker className="text-title4 mx-auto">
                        全国ネットワークでお相手を探す
                    </HighlightMarker>
                    <p className="mt-4 text-size2 text-body-muted  leading-[1.9] max-w-lg mx-auto">
                        JBA・コネクトシップ・IBJの3つのネットワークで、<br />
                        全国約10万人以上の中からあなたに合うお相手をご紹介します。
                    </p>
                </FadeAndSlideScrollTriggerAnimation>

                {/* JBA */}
                <div className="bg-white w-full md:max-w-3xl mx-auto rounded-2xl border border-sand mb-5 flex flex-col md:flex-row items-center justify-center">
                    <div className="flex-shrink-0 flex justify-center">
                        <FadeAndSlideScrollTriggerAnimation>
                            <Image src={JBA} alt="JBA" className="w-full max-w-[180px]" />
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>
                    <div className="flex flex-col gap-3 p-4 pt-0 md:pt-4">
                        <h3 className="text-title3 text-primary font-medium mx-auto text-center md:text-left">JBAについて</h3>
                        <p className="text-size2 text-body-light leading-[1.9]">
                            国内大手のJBA（日本結婚相談協会）に所属し、<br />
                            毎週火曜日にお見合い相手をご紹介。<br />
                            ノッツエ・BIU・良縁会の会員様も含め、<br />
                            全国約7万人（広島県・岡山県：約1,200人）からご紹介可能。<br />
                            4社の会員情報を一括で検索・やりとりできます。
                        </p>
                    </div>
                </div>

                {/* Connectship */}
                <div className="bg-white w-full md:max-w-3xl mx-auto rounded-2xl border border-sand mb-5 flex flex-col md:flex-row items-center justify-center">
                    <div className="flex-shrink-0 flex justify-center">
                        <FadeAndSlideScrollTriggerAnimation>
                            <Image src={Connect} alt="コネクトシップ" className="w-full max-w-[160px] pt-4 " />
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>
                    <div className="flex flex-col gap-3 p-4 pt-0 md:pt-4">
                        <div className="flex flex-col mx-auto">
                            <span className="inline-block self-start mx-auto px-3 bg-sand/50 text-body-muted text-size3 rounded-full">
                                オプション
                            </span>
                            <h3 className="text-title3 text-primary font-medium">コネクトシップ</h3>
                        </div>
                        <p className="text-size3 text-primary bg-primary-pale p-2 rounded-xl text-center mx-auto">
                            登録費用55,000円<br />
                            月会費2,000円<br />
                            お見合い費1,000円
                        </p>
                        <p className="text-size2 text-body-light leading-[1.9]">
                            他社13社の結婚相談所会員をご紹介。JBAと合わせると約10万人に。<br />
                            AIマッチングで毎週水曜日に新しいお相手をご紹介。<br />
                            お見合い状況・交際率など進捗を数値で可視化します。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
