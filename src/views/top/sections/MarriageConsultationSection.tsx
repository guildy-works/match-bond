import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Image from 'next-export-optimize-images/picture';
import JBA from '@/assets/jba.png';
import IBJ from '@/assets/IBJ.png';
import Connect from '@/assets/Connect.png';
import { HighlightMarker } from "@/components/HighlightMarker";
import Link from "next/link";

export const MarriageConsultationSection = () => {
    return (
        <div className="w-full mt-20 bg-linen flex flex-col items-center">
            <TitleType title="結婚相談所"
                ancher="mariage"
                subTitle="Marriage"
                className="mt-20" />
            <div className="heading-line mt-3" />

            {/* イントロ */}
            <div className="max-w-screen-md mx-auto px-8 mt-12">
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex flex-col w-full max-w-xl text-center">
                        <HighlightMarker className="mx-auto text-title4">
                            婚活を始める負担を、限りなくゼロに。
                        </HighlightMarker>
                        <HighlightMarker className="mx-auto text-title4">
                            婚活を前に進める仕組みは、どこよりも丁寧に。
                        </HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-5 leading-[1.9] text-body-light text-size2" >
                            Match‐Bondは、安心して一歩を踏み出せる婚活設計を大切にしています。
                            無理なく始められ、続けやすく、その人のペースで前に進める結婚相談所です。
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    {/* Info cards */}
                    <div className="flex flex-col w-full max-w-xl bg-white/70 p-7 rounded-2xl border border-sand/30">
                        <HighlightMarker className="mx-auto text-title4"> 初期費用 0円（入会費・登録費）</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4 leading-[1.9] text-body-light text-size2" >
                            婚活に踏み出す、最初の一歩を応援したい。
                            その想いから、Match‐Bondでは入会費・登録費といった初期費用をいただいていません。
                            事務所を構えず、不要な固定費をかけない運営を行い、
                            抑えた固定費は会員様が婚活に集中できる仕組みづくりへ還元しています。
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="flex flex-col max-w-xl bg-white/70 p-7 rounded-2xl border border-sand/30">
                        <HighlightMarker className="mx-auto text-title4"> お客様の想いから生まれた3つのプラン</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4 leading-[1.9] text-body-light text-size2" >
                            婚活の進め方は、人それぞれ。<br/>
                            活動スタイルに合わせて選べるプランを用意しています。
                        </FadeAndSlideScrollTriggerAnimation>
                        <span className="inline-block mt-3 space-y-1 text-primary text-size2">
                            ・3ヶ月お試しプラン（まずは結婚相談所の雰囲気を知りたい方へ）<br />
                            ・マイペースプラン（月会費０円／自分のペースで婚活したい方へ）<br />
                            ・婚活集中プラン（お見合い費0円／積極的に婚活を進めたい方へ）
                        </span>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4 leading-[1.9] text-body-light text-size2" >
                                従来の結婚相談所では「頑張れば頑張るほど費用がかかる」「少し休みたくても固定費がかかる」そんな声が多くありました。
                                Match‐Bondのプランは、実際のお客様の声と想いをもとに設計しています。
                        </FadeAndSlideScrollTriggerAnimation>
                        <Link className="mt-4 text-center text-primary hover:text-primary-dark transition-colors text-size2" href="#plan">
                            → 詳しくは【料金プラン】をご覧ください
                        </Link>
                    </div>

                    <div className="flex flex-col w-full max-w-xl bg-white/70 p-7 rounded-2xl border border-sand/30">
                        <HighlightMarker className="mx-auto text-title4"> 4０社以上の婚活応援企業と提携</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4 leading-[1.9] text-body-light text-size2" >
                            Match‐Bondは、美容・飲食店・ストレス解消・結婚準備までカバーする4０社以上の婚活応援企業と独自に提携しています。
                            「今のあなたに必要な場所」が、婚活を前に進めるきっかけになると考えているからです。
                        </FadeAndSlideScrollTriggerAnimation>
                        <Link className="mt-4 text-center text-primary hover:text-primary-dark transition-colors text-size2" href="#support">
                            → 詳しくは【婚活サポート】をご覧ください
                        </Link>
                    </div>
                </div>
            </div>

            {/* JBA */}
            <div className="max-w-screen-md grid md:grid-cols-[180px_1fr] mx-auto p-6 md:p-10 items-center md:pr-40 mt-8 gap-6">
                <div className="flex justify-center md:justify-start">
                    <FadeAndSlideScrollTriggerAnimation>
                        <Image src={JBA} alt="JBA" className="w-full max-w-[240px]" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
                <div className="flex flex-col gap-4">
                    <HighlightMarker className="text-title3 mx-auto">JBAについて</HighlightMarker>
                    <FadeAndSlideScrollTriggerAnimation className="w-full leading-[1.9] text-body-light text-size2">
                        Match‐Bondは毎週火曜日にお見合い相手の紹介が全プランにつきます。
                        国内大手のJBA（日本結婚相談協会）に所属し、ノッツエ、BIU、良縁会に所属している会員様の紹介が可能です。
                        一つのサイトから4社の会員様情報が一括で検索・やりとりが可能。
                        全国会員数：約7万人（広島県・岡山県：約1,200人）。
                        理想の相手を、一緒に探していきましょう。
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </div>

            {/* コネクトシップ */}
            <div className="max-w-screen-md grid md:grid-cols-[180px_1fr] mx-auto gap-6 p-6 md:p-10 items-center md:pr-40">
                <div className="flex justify-center md:justify-start">
                    <FadeAndSlideScrollTriggerAnimation>
                        <Image src={Connect} alt="コネクトシップ" className="w-full max-w-[180px]" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col text-center gap-1">
                        <p className="text-size3 text-body-muted">オプション</p>
                        <HighlightMarker className="text-title3 mx-auto">コネクトシップについて</HighlightMarker>
                    </div>

                    <FadeAndSlideScrollTriggerAnimation className="text-size3 font-medium text-primary mx-auto bg-primary-pale p-3 rounded-lg text-center">
                        登録費用55,000円 ／ 月会費2,000円 ／ お見合い費1,000円 ／ 他費用なし
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className="w-full leading-[1.9] text-body-light text-size2">
                        コネクトシップを利用すると他社結婚相談所（約13社）の会員様をご紹介できます。
                        JBA会員とあわせると紹介可能な会員数は約10万人。
                        AI分析による精度の高いマッチングで、効率よく理想のパートナーを毎週水曜日に新しくご紹介。
                        お見合い状況・交際率など進捗を数値で可視化し、戦略的な婚活をサポートします。
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </div>

            {/* IBJ */}
            <div className="max-w-screen-md grid md:grid-cols-[180px_1fr] mx-auto p-6 md:p-10 items-center md:pr-40 mb-14 gap-6">
                <div className="flex justify-center md:justify-start">
                    <FadeAndSlideScrollTriggerAnimation>
                        <Image src={IBJ} alt="IBJ" className="w-full max-w-[180px]" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col text-center gap-1">
                        <p className="text-size3 text-body-muted">オプション</p>
                        <HighlightMarker className="text-title3 mx-auto">IBJについて</HighlightMarker>
                    </div>

                    <FadeAndSlideScrollTriggerAnimation className="text-size3 font-medium text-primary mx-auto bg-primary-pale p-3 rounded-lg text-center">
                        登録費用88,000円 ／ 月会費5,000円 ／ お見合い費1,000円 ／ 他費用なし
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className="w-full leading-[1.9] text-body-light text-size2">
                        IBJ単体で会員数10万人超。加盟結婚相談所も多く地方での婚活にも向いています。
                        男性の80%以上が年収500万以上、大卒・四大卒の方が85%以上。
                        活発な会員様が非常に多くお見合いも組みやすいのが特徴です。
                        成婚率は婚活業界No.1。「市」単位で会員様を検索することも可能です。
                        （約福山市350名・約尾道120名）
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </div>
        </div>
    );
};
