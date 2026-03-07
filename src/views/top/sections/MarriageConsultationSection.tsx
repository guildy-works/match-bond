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
        <div className="w-full mt-24 bg-color1 flex flex-col items-center">
            <TitleType title="結婚相談所"
                ancher="mariage"
                subTitle="Service"
                className="mt-24" />

            {/* イントロセクション */}
            <div className="max-w-screen-md mx-auto px-8 mt-12">
                <div className="flex flex-col gap-8 items-center">
                    <div className="flex flex-col w-full max-w-xl">
                        <HighlightMarker className="mx-auto text-title4">
                            婚活を始める負担を、限りなくゼロに。
                        </HighlightMarker>
                        <HighlightMarker className="mx-auto text-title4">
                            婚活を前に進める仕組みは、どこよりも丁寧に。
                        </HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4" >
                            Match‐Bondは、安心して一歩を踏み出せる婚活設計を大切にしています。<br />
                            無理なく始められ、続けやすく、その人のペースで前に進める結婚相談所です。
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="flex flex-col w-full max-w-xl">
                        <HighlightMarker className="mx-auto text-title4"> 初期費用 0円（入会費・登録費）</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4" >
                            婚活に踏み出す、最初の一歩を応援したい。<br />
                            その想いから、Match‐Bondでは入会費・登録費といった初期費用をいただいていません。<br />
                            なぜ、初期費用0円なのか？<br />
                            事務所を構えず、不要な固定費をかけない運営を行っているからです。<br />
                            抑えた固定費は、会員様が婚活に集中できる仕組みづくりへ還元しています。<br />
                            「始めるだけでお金がかかる」そんな婚活にはしたくありません。
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="flex flex-col max-w-xl">
                        <HighlightMarker className="mx-auto text-title4"> お客様の想いから生まれた、3つの婚活プラン</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4" >
                            婚活の進め方は、人それぞれ。<br />
                            Match‐Bondでは、活動スタイルに合わせて選べるプランを用意しています。<br />
                            ・3ヶ月お試しプラン（まずは結婚相談所の雰囲気を知りたい方へ）<br />
                            ・マイペースプラン（月会費０円／自分のペースで婚活したい方へ）<br />
                            ・婚活集中プラン（お見合い費0円／積極的に婚活を進めたい方へ）<br />
                            従来の結婚相談所では、「頑張れば頑張るほど費用がかかる」「少し休みたくても固定費がかかる」そんな声が多くありました。<br />
                            Match‐Bondのプランは、実際のお客様の声と想いをもとに設計しています。
                        </FadeAndSlideScrollTriggerAnimation>
                        <Link className="mt-4 text-center text-c" href="#plan">
                            ▶ 詳しくは【料金プラン】をご覧ください
                        </Link>
                    </div>

                    <div className="flex flex-col w-full max-w-xl">
                        <HighlightMarker className="mx-auto text-title4"> 4０社以上の婚活応援企業と提携</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4" >
                            Match‐Bondは、美容・飲食店・ストレス解消・結婚準備までカバーする4０社以上の婚活応援企業と独自に提携しています。<br />
                            「今のあなたに必要な場所」が、婚活を前に進めるきっかけになると考えているからです。<br />
                            出会いから成婚退会までを見据え、婚活全体を支える仕組みを設計しています。
                        </FadeAndSlideScrollTriggerAnimation>
                        <Link className="mt-4 text-center text-color9" href="#support">
                            ▶ 詳しくは【どんな婚活サポート？】をご覧ください
                        </Link>
                    </div>
                </div>
            </div>

            {/* JBAセクション */}
            <div className="max-w-screen-md grid md:grid-cols-[200px_1fr] mx-auto p-4 md:p-8 items-center md:pr-52">
                <div className="flex justify-center md:justify-start">
                    <FadeAndSlideScrollTriggerAnimation>
                        <Image src={JBA} alt="JBA" className="w-full max-w-[300px]" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>

                <div className="flex flex-col gap-4">
                    <HighlightMarker className="text-title3 mx-auto">JBAについて</HighlightMarker>
                    <FadeAndSlideScrollTriggerAnimation className="w-full">
                        Match‐Bondは、<br className="sm:hidden" />毎週火曜日にお見合い相手の紹介が全プランにつきます。<br />
                        国内大手の JBA（日本結婚相談協会）<br className="sm:hidden" /> に所属し、
                        JBAシステムは、<br className="sm:hidden" />他にもノッツエ、BIU、<br className="sm:hidden" />
                        良縁会に所属している会員様の紹介が可能になります。<br />
                        複数ログインは必要なし。<br  />
                        一つのサイトから、<br  />
                        ４社の結婚相談所に所属する会員様情報が一括で検索、<br />
                        やりとりが可能。<br />
                        全国会員数：約7万人<br className="sm:hidden" />（ 広島県・岡山県の会員数：約1,200人）<br />
                        「JBAシステム」という検索サイトにより、<br className="sm:hidden" />いつでも・どこでも会員検索が可能です。<br />
                        理想の相手を、一緒に探していきましょう
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </div>

            {/* コネクトシップセクション */}
            <div className="max-w-screen-md grid md:grid-cols-[200px_1fr] mx-auto gap-6 p-4  md:p-8 items-center md:pr-52">
                <div className="flex justify-center md:justify-start">
                    <FadeAndSlideScrollTriggerAnimation>
                        <Image src={Connect} alt="コネクトシップ" className="w-full max-w-[220px]" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col text-center">
                        <p className="text-size1">オプション</p>
                        <HighlightMarker className="text-title3 mx-auto">コネクトシップについて</HighlightMarker>
                    </div>

                    <FadeAndSlideScrollTriggerAnimation className="text-size2 font-black text-color9 mx-auto mt-4">
                        登録費用55,000円<br />
                        月会費2,000円<br />
                        お見合い費1,000円<br />
                        他費用かかりません
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className="w-full mt-4">
                        コネクトシップを利用すると、<br className="sm:hidden" />
                        他社結婚相談所（約13社）の会員様をご紹介できます。<br className="sm:hidden" />
                        JBA会員とあわせると、紹介可能な会員数は約10万人となります。<br className="sm:hidden" />
                        AI分析による精度の高いマッチングで、<br className="sm:hidden" />
                        効率よく理想のパートナーを毎週水曜日に新しいご紹介<br className="sm:hidden" />
                        定期的に新しい出会いが届くから、<br className="sm:hidden" />
                        婚活のペースを保ちながらスピーディーに進められます。
                        お見合い状況・交際率など、進捗を数値で可視化。<br className="sm:hidden" />
                        感覚任せにしない、戦略的な婚活をサポートします。
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </div>

            {/* IBJセクション */}
            <div className="max-w-screen-md grid md:grid-cols-[200px_1fr] mx-auto p-4  md:p-8 items-center md:pr-52">
                <div className="flex justify-center md:justify-start">
                    <FadeAndSlideScrollTriggerAnimation>
                        <Image src={IBJ} alt="IBJ" className="w-full max-w-[220px]" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col text-center">
                        <p className="text-size1">オプション</p>
                        <HighlightMarker className="text-title3 mx-auto">IBJについて</HighlightMarker>
                    </div>

                    <FadeAndSlideScrollTriggerAnimation className="w-full">
                        <span className="text-title4 font-black">
                            登録費用８万８千円、月会費５０００円、お見合い費１０００円、他費用かかりません。
                            IBJ単体で会員様は１０万人越え。加盟結婚相談所も多く地方での婚活にも向いています。
                            IBJはハイキャリアな方も多く、
                        </span>
                        IBJ単体で会員様は10万人越え。
                        加盟結婚相談所も多く地方での婚活にも向いています。<br />
                        IBJはハイキャリアな方も多く、<br className="sm:hidden" />
                        男性の80%以上が年収500万以上、大卒、四大卒の方が85%以上。<br />
                        また、活発的な会員様が非常に多いため、<br className="sm:hidden" />
                        お見合いも組み易いことも特徴的です。<br />
                        婚活業界の中で成婚率圧倒的にNo. 1。<br />
                        そして県ではなく「市」で<br className="sm:hidden" />
                        会員様を検索することも可能です。<br />
                        婚活に全力を注ぎたい方に是非とも<br className="sm:hidden" />
                        お勧めしたいオプションです。（約福山市350名・約尾道120名）
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </div>
        </div >
    );
};
