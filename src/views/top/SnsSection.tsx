import { SectionBar } from "@/components/SectionBar"
import { SnsLinkList } from "@/components/SnsLinkList"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import LineQR from "@/assets/LineQR.png"
import Image from 'next-export-optimize-images/picture';
import Bunner from "@/assets/bunner.jpg"

import Script from "next/script";
import { BookingBunner } from "@/components/BookingBunner";
import { LatestBlogs } from "@/components/LatestBlogs";

export const SnsSection = () => {
    return (
        <div className="overflow-hidden mx-auto px-8 w-full max-w-4xl flex flex-col items-center space-y-10 mt-12 relative">
            <div id="sns" className="absolute -top-32" />

            {/* SNS heading */}
            <div className="text-center space-y-2">
                <p className="text-gold/50 font-asterdam text-[1.5rem] tracking-wider">Sns</p>
                <h2 className="text-title2 text-primary font-mincho">SNS</h2>
                <div className="heading-line" />
            </div>

            <SnsLinkList />

            <div className="relative max-w-lg text-center">
                {/* 背景テキスト */}
                <div className="font-slight absolute top-20 left-1/2 -translate-x-1/2 text-[60px] w-[600px] font-normal text-color9/20 -rotate-6 pointer-events-none select-none">
                    Match-Bond
                </div>
                <FadeAndSlideScrollTriggerAnimation className="leading-[2] text-body-light text-size2">
                    婚活に関する情報、婚活イベントの告知をInstagramから配信しております。<br />
                    司会業、様々なイベント、社会人サークルのInstagramも併せてご紹介させて頂きます。<br />
                    <br />
                    恋愛相談窓口は公式LINEから事前予約することができます。<br />
                    恋愛相談窓口は初回15分無料です。<br />
                    <br />
                    婚活サポートの内容をもっと聞きたい、どのサービスから受けたらいいの？<br />
                    といった内容でも恋愛相談窓口をご利用ください。<br />
                    <span className="text-body-muted text-size3">（詳細は恋愛相談窓口をご確認ください。）</span>
                </FadeAndSlideScrollTriggerAnimation>
            </div>

            <Image src={LineQR} alt="LINE QRコード" className="hidden md:block rounded-xl w-[140px] shadow-sm" />

            {/* Instagram feed */}
            <div className="text-center space-y-2 pt-4">
                <p className="text-gold/50 font-asterdam text-[1.2rem] tracking-wider">Instagram</p>
                <h2 className="text-title3 text-body">最新情報</h2>
                <div className="heading-line" />
            </div>

            <Script src="https://embedsocial.com/js/iframe.js" onLoad={() => {
                (window as any)?.iFrameResize()
            }}></Script>
            <iframe className="size-full" scrolling="no" src="https://embedsocial.com/api/pro_hashtag/4c3332316a250f2523529ea9478da1f4dad8226b"></iframe>

            {/* Blog */}
            <div className="text-center space-y-2 pt-4">
                <p className="text-gold/50 font-asterdam text-[1.2rem] tracking-wider">Blog</p>
                <h2 className="text-title3 text-body">新着ブログ</h2>
                <div className="heading-line" />
            </div>
            <LatestBlogs />

            {/* Banners */}
            <a className="w-full max-w-[480px] mx-auto block rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" href="https://lciq-diagnosis.com/home?agent_id=8561760" target="_blank" rel="noopener noreferrer">
                <Image src={Bunner} alt="恋愛診断" className="w-full" />
            </a>

            <BookingBunner />
        </div>
    )
}

