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
        <SectionType1 className="w-full bg-linen py-10 md:py-20" innerClassName="flex flex-col items-center">
            <TitleType title="婚活イベント" subTitle="Events" ancher="events" />
            <div className="heading-line mt-3" />
            <div className="flex flex-col gap-6 mt-8 max-w-lg text-center" >
                <FadeAndSlideScrollTriggerAnimation className="leading-[1.9] text-body-light text-size2">
                    Match-Bondの婚活イベントは<HighlightMarker> マッチング率96%</HighlightMarker>（2024年10月時点）。
                    婚活イベントは最初に「初対面の気まずさ」という最大の難関が待ち構えています。
                    Match-Bondはイベントに<HighlightMarker> 様々なアイデアを詰め込んでいます。</HighlightMarker>
                    どんなアイデアかって？それは参加してみてのお楽しみ！<br /><br />

                    「話す」きっかけや流れを作ることで、居心地の良さは変わります。
                    少しでも「楽しい」と思っていただけるようなイベントを開催しています。
                    1人で参加するのが不安でも、しっかりサポートするので大丈夫です。<br /><br />

                    <span className="text-primary text-size2">
                    結婚相談所に入会すると婚活イベントを毎回500円引きで参加できます。
                    </span>
                </FadeAndSlideScrollTriggerAnimation>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
                <FadeAndSlideScrollTriggerAnimation className="h-full">
                    <Image src={Events1} alt="婚活イベント" className="rounded-xl h-full shadow-sm" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="h-full">
                    <Image src={Events2} alt="婚活イベント" className="rounded-xl h-full shadow-sm" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="h-full">
                    <Image src={Events3} alt="婚活イベント" className="rounded-xl h-full shadow-sm" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="h-full">
                    <Image src={Events4} alt="婚活イベント" className="rounded-xl h-full shadow-sm" />
                </FadeAndSlideScrollTriggerAnimation>
            </div>
        </SectionType1>
    );
};
