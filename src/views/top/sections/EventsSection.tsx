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

            {/* 96% stat callout */}
            <FadeAndSlideScrollTriggerAnimation className="mt-10 flex flex-col items-center gap-2">
                <div className="flex items-end gap-4">
                    <p className="text-[4.5rem] md:text-[5.5rem] font-mincho font-bold text-primary leading-none">96%</p>
                    <div className="pb-3 text-left">
                        <p className="text-size2 text-body font-medium">マッチング率</p>
                        <p className="text-size3 text-body-muted">（2024年10月時点）</p>
                    </div>
                </div>
                <p className="text-size3 text-body-muted tracking-[0.1em]">イベント参加者のカップリング成立率</p>
            </FadeAndSlideScrollTriggerAnimation>

            <div className="heading-line mt-4" />

            {/* Description */}
            <div className="flex flex-col gap-5 mt-8 max-w-lg text-center">
                <FadeAndSlideScrollTriggerAnimation className="leading-[1.9] text-body-light text-size2">
                    婚活イベントの最大の難関は、初対面の気まずさ。
                    Match-Bondでは<HighlightMarker>様々なアイデアを詰め込み</HighlightMarker>、
                    自然に会話が生まれる場を作っています。
                    どんなアイデアかは、参加してのお楽しみ。
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation className="leading-[1.9] text-body-light text-size2">
                    「話す」きっかけや流れを作ることで、居心地の良さは変わります。
                    1人参加でも安心してご参加いただけるよう、しっかりサポートします。
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation>
                    <span className="inline-block px-6 py-2.5 bg-primary-pale text-primary text-size2 rounded-full font-medium border border-primary/20">
                        結婚相談所に入会すると毎回500円引き
                    </span>
                </FadeAndSlideScrollTriggerAnimation>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
                {[Events1, Events2, Events3, Events4].map((img, i) => (
                    <FadeAndSlideScrollTriggerAnimation key={i} className="h-full">
                        <Image src={img} alt="婚活イベント" className="rounded-xl h-full shadow-sm" />
                    </FadeAndSlideScrollTriggerAnimation>
                ))}
            </div>
        </SectionType1>
    );
};
