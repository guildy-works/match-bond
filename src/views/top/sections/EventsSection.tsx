import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Image from 'next-export-optimize-images/picture';
import Events1 from '@/assets/events/1.png';
import Events2 from '@/assets/events/2.png';
import Events3 from '@/assets/events/3.png';
import Events4 from '@/assets/events/4.png';
import { HighlightMarker } from "@/components/HighlightMarker";
import { SectionType1 } from "@/components/SectionType1";

export const EventsSection = () => {
    return (
        <SectionType1 className="w-full bg-color1 py-8 md:py-24" innerClassName="flex flex-col items-center">
            <TitleType title="婚活イベント" subTitle="Events" ancher="events" />
            <div className="flex flex-col gap-8 mt-8" >
                <FadeAndSlideScrollTriggerAnimation  >
                    Match-Bondの婚活イベントは<HighlightMarker> マッチング率96%</HighlightMarker>（2024年10月時点）です。<br />
                    婚活イベントは最初に最大の難関が待ち構えています。<br />
                    それは、「初体面の気まずさ」です。この難関をどうクリアするか？<br />
                    Match-Bondはイベントに<HighlightMarker> 様々なアイデアを詰め込んでいます。</HighlightMarker><br />
                    どんなアイデアかって？それは参加してみてのお楽しみ！<br /><br />

                    「話す」きっかけや流れを作ることで、居心地の良さは変わります。<br />
                    「出会い」を求めるお客様が、<br />
                    少しでも「楽しい」と思って頂けるようなイベントを開催しています。<br />
                    1人で参加するのが不安でも、しっかりサポートするので大丈夫です。<br />
                    「出会い」をしっかり楽しんでいきましょう。<br /><br />

                    Match-Bondの結婚相談所に入会すると婚活イベントを毎回500引きで参加できます。
                </FadeAndSlideScrollTriggerAnimation>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <FadeAndSlideScrollTriggerAnimation className="h-full">
                    <Image src={Events1} alt="sns" className="rounded-lg h-full" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="h-full">
                    <Image src={Events2} alt="sns" className="rounded-lg h-full" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="h-full">
                    <Image src={Events3} alt="sns" className="rounded-lg h-full" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="h-full">
                    <Image src={Events4} alt="sns" className="rounded-lg h-full" />
                </FadeAndSlideScrollTriggerAnimation>
            </div>
        </SectionType1>
    );
};
