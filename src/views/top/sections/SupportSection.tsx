import { LinkButton } from "@/components/LinkButton";
import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import mariage1 from "@/assets/mariage1.jpg";
import mariage2 from "@/assets/mariage2.png";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import { HighlightMarker } from "@/components/HighlightMarker";

export const SupportSection = () => {
    return (
        <div className="w-full mt-20">
            <div className="relative max-w-screen-lg grid md:grid-cols-2 py-20 mx-auto gap-6">
                <div className="w-[100vw] absolute inset-0 md:top-52 bg-blush/50" />

                <div className="flex flex-col gap-8 p-8 sm:px-16 sm:pt-44 mt-auto items-center z-10" >
                    <TitleType title="どんな婚活サポート？" subTitle="Support" ancher="support" />

                    <div className="flex flex-col max-w-md">
                        <HighlightMarker className="mx-auto text-title4"> 出会いだけで終わらない。</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4 leading-[1.9] text-body-light text-size2" >
                            Match‐Bondは、出会いを提供して終わる結婚相談所ではありません。
                            婚活を前に進めるために、「今のあなたに必要な場所」を用意しています。
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <TransitionImage alt="婚活サポート" imageData={mariage1} className="sm:hidden rounded-xl mt-auto shadow-sm" />

                    <div className="flex flex-col max-w-md">
                        <HighlightMarker className="mx-auto text-size1 tracking-tight"> 婚活を前に進める「40社以上の婚活応援企業」と提携</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4 leading-[1.9] text-body-light text-size2" >
                            Match‐Bondは、美容・飲食店・ストレス解消・結婚準備までカバーする4０社以上の婚活応援企業と独自に提携しています。
                            （会員様限定／特別価格で利用可能）
                            <span className="block mt-3 text-primary/80 text-size3">
                            【提携ジャンル例】<br />
                            美容院／脱毛／エステ／ネイル／カフェ／飲食店<br />
                            結婚指輪／結婚式場／結婚フォト など
                            </span>
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="flex flex-col max-w-md">
                        <HighlightMarker className="mx-auto text-title4"> 「今のあなたに必要な場所」</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4 leading-[1.9] text-body-light text-size2" >
                            婚活の進み方は、人それぞれ違います。
                            <span className="inline-block mt-2 space-y-1 text-size3 text-body-muted">
                            ・ 自分磨きから始めたい<br />
                            ・ 初デートを成功させたい<br />
                            ・ もう一歩、距離を縮めたい<br />
                            ・ 少し婚活を休みたい<br />
                            ・ 成婚退会後、結婚を具体的に考えたい
                            </span>
                            <span className="block mt-2">
                            その時々の状況に合わせて、<br/>
                            今のあなたに必要な場所・サービスをつなぎます。
                            </span>
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="flex flex-col max-w-md">
                        <HighlightMarker className="mx-auto text-title4"> 出会いから、その先まで</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4 leading-[1.9] text-body-light text-size2" >
                            Match‐Bondは、出会いを作るだけでは終わりません。
                            婚活中も、成婚退会後も、ひとりで抱え込まず前に進める仕組みを整えています。
                            婚活にかかる金銭的・精神的な負担を少しでも軽くすることも、<br/>
                            私たちの役割です。
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="flex flex-col max-w-md">
                        <HighlightMarker className="mx-auto text-title4"> 婚活をひとりで抱え込まないために</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4 leading-[1.9] text-body-light text-size2" >
                            婚活は、頑張りすぎても止まりすぎても前に進みにくいもの。
                            Match‐Bondは、あなたの婚活を前に進めるための人・場所・選択肢を整える結婚相談所です。
                            公式LINEから24時間お悩み相談は受付。必ず12時間以内にご対応します。
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="w-full space-y-3 flex flex-col max-w-md">
                        <LinkButton href="/services#service1" title="婚活中にお得なサービスが受けれるお店はコチラ" className="w-full" innerClassName="!px-0" />
                        <LinkButton href="/services#service2" title="成婚退会後にお得なサービスが受けれるお店はコチラ" className="w-full" innerClassName="!px-0" />
                    </div>

                    <p className="text-body-muted text-size3 max-w-md leading-5">
                        ※ お得なサービスは結婚相談所に入会した場合のみご利用頂けます。
                    </p>
                </div>

                <div className="px-8 my-auto flex flex-col gap-6 h-full">
                    <TransitionImage alt="婚活サポート" imageData={mariage1} className="hidden sm:block rounded-2xl mt-auto shadow-md" />
                    <TransitionImage alt="婚活サポート" imageData={mariage2} className="rounded-2xl shadow-md" />
                </div>
            </div>
        </div>
    );
};
