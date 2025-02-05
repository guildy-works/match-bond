import { SectionBar } from "@/components/SectionBar"
import { SnsLinkList } from "@/components/SnsLinkList"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import LineQR from "@/assets/LineQR.png"
import Image from 'next-export-optimize-images/picture';

import Script from "next/script";

export const SnsSection = () => {
    return (
        <div className="mx-auto px-8 w-full max-w-6xl flex flex-col items-center space-y-8 mt-8 relative">
            <div id="sns" className="absolute -top-32" />

            <SectionBar text="Sns" />

            <SnsLinkList />

            <div className="relative">
                {/* 背景テキスト */}
                <div className="font-slight absolute top-32 left-0 right-0 text-[80px] w-[820px] text-color9/20 -rotate-12 ">
                    Match-Bond
                </div>
                <FadeAndSlideScrollTriggerAnimation>
                    婚活に関する情報、婚活イベントの告知をInstagramから配信しております。<br />
                    司会業、様々なイベント、社会人サークルのInstagramも併せて、<br />
                    ご紹介させて頂きます。   <br />
                    <br />
                    恋愛相談窓口は公式LINEから事前予約することができます。<br />
                    恋愛相談窓口は初回15分無料です。<br />
                    <br />
                    婚活サポートの内容をもっと聞きたい、<br />
                    どのサービスから受けたらいいの？といった内容でも恋愛相談窓口をご利用ください。<br />
                    （詳細は恋愛相談窓口をご確認ください。）   <br />
                </FadeAndSlideScrollTriggerAnimation>
            </div>

            <Image src={LineQR} alt="sns" className="hidden md:block rounded-lg w-[180px]" />

            <h2 className="text-title2">Instagramだけの最新情報</h2>

            <Script src="https://embedsocial.com/js/iframe.js" onLoad={() => {
                (window as any)?.iFrameResize()
            }}></Script>
            <iframe className="size-full" scrolling="no" src="https://embedsocial.com/api/pro_hashtag/4c3332316a250f2523529ea9478da1f4dad8226b"></iframe>
        </div>
    )
}

