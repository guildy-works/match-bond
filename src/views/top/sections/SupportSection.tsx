import { LinkButton } from "@/components/LinkButton";
import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import mariage1 from "@/assets/mariage1.jpg";
import mariage2 from "@/assets/mariage2.png";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import { HighlightMarker } from "@/components/HighlightMarker";

export const SupportSection = () => {
    return (
        <div className="w-full mt-24">
            {/* 背景パネル */}
            <div className="relative max-w-screen-lg grid md:grid-cols-2 py-24 mx-auto gap-3">
                <div className="w-[100vw] absolute inset-0 md:top-60 bg-[#f5ece7]" />

                <div className="flex flex-col gap-8 p-8 sm:px-24 sm:pt-48 mt-auto items-center z-10" >
                    <TitleType title="どんな婚活サポート？" subTitle="Service" ancher="support" />

                    <div className="flex flex-col">
                        <HighlightMarker className="mx-auto text-title4"> 出会いだけで終わらない。</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4" >
                            Match‐Bondは、<br />
                            出会いを提供して終わる<br />
                            結婚相談所ではありません。<br />
                            婚活を前に進めるために、<br />
                            「今のあなたに必要な場所」を<br />
                            用意しています。
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <TransitionImage alt="私たちの想い" imageData={mariage1} className="sm:hidden rounded-md mt-auto" />

                    <div className="flex flex-col">
                        <HighlightMarker className="mx-auto"> 婚活を前に進める「40社以上の婚活応援企業」と提携</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4" >
                            Match‐Bondは、<br />
                            美容・飲食店・ストレス解消・結婚準備<br />
                            までカバーする
                            4０社以上の婚活応援企業と<br />
                            独自に提携しています。<br />
                            （会員様限定／特別価格で利用可能）<br />
                            【提携ジャンル例】<br />
                            美容院／脱毛／エステ／ネイル<br />
                            カフェ／飲食店<br />
                            結婚指輪／結婚式場／結婚フォト など
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="flex flex-col">
                        <HighlightMarker className="mx-auto text-title4"> 「今のあなたに必要な場所」</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4" >
                            婚活の進み方は、人それぞれ違います。<br />
                            ・ 自分磨きから始めたい<br />
                            ・ 初デートを成功させたい<br />
                            ・もう一歩、距離を縮めたい<br />
                            ・ 少し婚活を休みたい<br />
                            ・ 成婚退会後、結婚を具体的に考えたい<br />
                            その時々の状況に合わせて、<br />
                            今のあなたに必要な場所・サービスをつなぎます。
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="flex flex-col">
                        <HighlightMarker className="mx-auto text-title4"> 出会いから、その先まで</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4" >
                            Match‐Bondは、<br />
                            出会いを作るだけでは終わりません。<br />
                            婚活中も、成婚退会後も、ひとりで抱え込まず、<br />
                            前に進める仕組みを整えています。<br />
                            婚活にかかる金銭的・精神的な負担を<br />
                            少しでも軽くすることも、私たちの役割です。
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="flex flex-col">
                        <HighlightMarker className="mx-auto text-title4"> 婚活をひとりで抱え込まないために</HighlightMarker>
                        <FadeAndSlideScrollTriggerAnimation className="w-full mt-4" >
                            婚活は、頑張りすぎても、<br />
                            止まりすぎても前に進みにくいもの。<br />
                            Match‐Bondは、あなたの婚活を<br />
                            前に進めるための<br />
                            人・場所・選択肢を整える結婚相談所です。<br />
                            公式ラインから２４時間お悩み相談は受付。<br />
                            必ず１２時間以内にご対応します。
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    <div className="w-full space-y-4 flex flex-col">
                        <LinkButton href="/services#service1" title="婚活中にお得なサービスが受けれるお店はコチラ" className="w-full" innerClassName="!px-0" />
                        <LinkButton href="/services#service2" title="成婚退会後にお得なサービスが受けれるお店はコチラ" className="w-full" innerClassName="!px-0" />
                    </div>

                    <div className="flex text-font3/80">
                        <span className="text-size3 font-bold leading-4"> ※</span>
                        <p className="text-size3 font-bold leading-4 ml-1">
                            お得なサービスはMatch-Bondの結婚相談所に<br />
                            入会した場合のみご利用頂けます。
                        </p>
                    </div>

                </div>

                <div className="px-8 my-auto flex flex-col gap-8 h-full">
                    <TransitionImage alt="私たちの想い" imageData={mariage1} className="hidden sm:block rounded-md mt-auto" />
                    <TransitionImage alt="私たちの想い" imageData={mariage2} className="rounded-md" />
                </div>
            </div>
        </div>
    );
};
