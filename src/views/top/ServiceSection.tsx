
import { LinkButton } from "@/components/LinkButton";
import { TitleType, TitleType2 } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import mariage1 from "@/assets/mariage1.png";
import mariage2 from "@/assets/mariage2.png";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import { ServiceDialog } from "@/components/ServiceDialog";

import Image from 'next-export-optimize-images/picture';
import { StaticImageData } from 'next/image';

import ThreeMonthPlan from '@/assets/3month_plan.png'
import Jba from '@/assets/jba.png';
import Oaite from '@/assets/oaite.png';
import Photo from '@/assets/photo.png';
import MakeUpImage from '@/assets/option-makeup.jpg';
import { SectionType1 } from "@/components/SectionType1";
import Link from "next/link";

import Review1 from '@/assets/reviews/1.png';
import Review2 from '@/assets/reviews/2.png';
import Review3 from '@/assets/reviews/3.png';
import Review4 from '@/assets/reviews/4.png';
import Review5 from '@/assets/reviews/5.png';
import Review6 from '@/assets/reviews/6.png';

import Events1 from '@/assets/events/1.png';
import Events2 from '@/assets/events/2.png';
import Events3 from '@/assets/events/3.png';
import Events4 from '@/assets/events/4.png';
import { HighlightMarker } from "@/components/HighlightMarker";


export const ServiceSection = () => {

    return (
        <>
            <Section1 />
            <Section6 />

            <Section3 />

            <Section2 />
            <Section4 />
            <Section5 />
        </>
    )
}

const Glossary = () => {
    return (
        <div >
            <div className="max-w-4xl mx-auto">
                <h1 className="text-title3 font-bold text-gray-800 mb-2 mt-4">用語説明</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                    <GlossaryItem
                        delay={0}
                        term="入会費"
                        description="入会するためにかかる費用"
                    />
                    <GlossaryItem
                        term="登録費"
                        delay={20}
                        description="登録するためにかかる費用"
                    />
                    <GlossaryItem
                        term="月会費"
                        delay={40}
                        description="結婚相談所の使用料（毎月）"
                    />
                    <GlossaryItem
                        term="お見合い費"
                        delay={60}
                        description="お見合いが成立した際にかかる費用"
                    />
                    <GlossaryItem
                        delay={80}
                        term="本交際"
                        description="交際する人を1名に決めること"
                    />
                    <GlossaryItem
                        term="成婚退会"
                        delay={100}
                        description="本交際で決めた人といっしょに退会すること"
                    />
                </div>
            </div>
        </div>
    )
}

const GlossaryItem = ({ term, description, delay }: any) => {
    return (
        <FadeAndSlideScrollTriggerAnimation delay={delay} className="h-full" innerClassName="h-full p-3 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-size2 font-semibold text-color9">{term}</h2>
            <p className="text-gray-600 mt-1 text-size3">{description}</p>
        </FadeAndSlideScrollTriggerAnimation>
    )
}

const Section2 = () => {
    return (
        <div className="w-full bg-color1  p-8 sm:p-16">
            <div className='max-w-6xl mx-auto py-8 flex flex-col'>
                <FadeAndSlideScrollTriggerAnimation className="mx-auto mt-6">
                    <TitleType ancher="" title="料金プラン" subTitle="Plans" className="mx-auto" />
                </FadeAndSlideScrollTriggerAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                    <FadeAndSlideScrollTriggerAnimation innerClassName='h-full'>
                        <PricingPlan
                            title='3ヵ月お試しプラン'
                            image={ThreeMonthPlan}
                            description='相談所って好みの人いるのかな。お見合いって本当に組めるのかな。と不安に思う方にお勧めです。'
                        />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={60} innerClassName='h-full'>
                        <PricingPlan
                            title='月会費￥0プラン'
                            image={ThreeMonthPlan}
                            description='仕事が忙しくて今月お見合いを組めないかもしれないな。と、お仕事に波がある方にお勧めです。'
                        />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={120} innerClassName='h-full'>
                        <PricingPlan
                            title='お見合い費￥0プラン'
                            image={ThreeMonthPlan}
                            description='沢山の方とのお見合いを経て、「この人だ。」と思えるお相手を探したい方にお勧めのプランです。'
                        />
                    </FadeAndSlideScrollTriggerAnimation>


                </div>

                <Glossary />
            </div>

        </div>
    )
}

const Section3 = () => {
    return (
        <div className="w-full mt-24 md:mt-48 bg-color1 flex flex-col items-center">
            <TitleType title="結婚相談所"
                ancher="mariage"
                subTitle="Service"
                className="mt-24" />
            {/* 背景パネル */}
            <div className="max-w-screen-md grid md:grid-cols-2 mx-auto gap-3 ">
                <div className="flex flex-col gap-8 p-8 sm:p-16 !pb-0 mt-auto items-center">
                    <FadeAndSlideScrollTriggerAnimation innerClassName="items-start" >
                        Match-Bondの結婚相談所は<br />
                        入会金・登録費といった<HighlightMarker> 初期費用が0円！</HighlightMarker><br />
                        月会費無料プランを選ぶと<HighlightMarker> 月会費も0円！</HighlightMarker><br />
                        Match-Bondがお客様に対して成果を出した場合のみ料金を頂く、成果報酬型の結婚相談所です。
                    </FadeAndSlideScrollTriggerAnimation>


                    <FadeAndSlideScrollTriggerAnimation className="w-full" >
                        さらに、入会すると、<HighlightMarker> 福山市近辺のお店で総額〇〇万円お得なサービス</HighlightMarker>を受けながら、<br />
                        効率的に幸せな婚活～結婚を目指すことができます。<br /><br />

                        さらにさらに、Match-Bondの婚活イベント、<br />
                        恋愛相談窓口もお得に利用することができます。<br /><br />

                        JBAについて<br />
                        Match-Bondは国内大手のJBA（日本結婚相談協会）に所属しています。<br />
                        <HighlightMarker>    会員数は全国約7万人</HighlightMarker>です。（広島県・岡山県の会員数は約1200名）<br />
                        おあいてネットというサービスにより、いつでもどこでも、他の会員様を検索できます。<br />
                        理想の相手をいっしょに見つけましょう。<br /><br />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className="mx-auto md:hidden">
                        <Image src={Oaite} alt="JBA" className="w-full max-w-[160px]" />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className="w-full">
                        コネクトシップについて<br />
                        他社の結婚相談所（約13企業）の会員様を月額2,000円でご紹介できます。<br />
                        JBAの会員数と合わせると<HighlightMarker> 合計約10万人の会員数</HighlightMarker> になります。<br />
                        （国内最多）<br />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>

                <div className="px-8 mt-auto flex flex-col gap-8 items-center">
                    <FadeAndSlideScrollTriggerAnimation className="hidden md:block">
                        <Image src={Oaite} alt="JBA" className="w-full max-w-[160px]" />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation>
                        <Image src={Jba} alt="おあいてネット" className="w-[280px]" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </div>
        </div>
    )
}

const Section6 = () => {
    return (
        <div className="w-full my-32 bg-[#f5ece7] max-w-screen-md grid md:grid-cols-2 py-24 md:px-32 mx-auto gap-3">
            <div className="flex flex-col gap-8 p-8 sm:p-16 my-auto items-center" >
                <TitleType ancher="reviews" title="お客様の声" subTitle="Reviews" />
                <LinkButton href="https://g.co/kgs/CJDKC7U" title="Google口コミはこちら" ></LinkButton>

                <FadeAndSlideScrollTriggerAnimation tag="h3" >
                    Instagram／LINEに届いたお客様の声
                </FadeAndSlideScrollTriggerAnimation>
            </div>

            <div className="px-8 max-w-screen-sm my-auto grid grid-cols-2 gap-2 md:gap-6 mx-auto">
                <div>
                    <Image src={Review4} alt="安心して相談できました" className="rounded-2xl" />
                </div>
                <div className="flex flex-col gap-2 md:gap-6">
                    <Image src={Review1} alt="安心して相談できました" className="rounded-2xl" />
                    <Image src={Review2} alt="安心して相談できました" className="rounded-2xl" />
                    <Image src={Review3} alt="安心して相談できました" className="rounded-2xl" />
                    <Image src={Review5} alt="安心して相談できました" className="rounded-2xl" />
                    <Image src={Review6} alt="安心して相談できました" className="rounded-2xl" />
                </div>

            </div>
        </div>
    )
}

const Section1 = () => {
    return (
        <div className="w-full mt-24 md:mt-48">
            {/* 背景パネル */}
            <div className="relative max-w-screen-lg grid md:grid-cols-2 py-24 mx-auto gap-3">
                <div className="w-[100vw] absolute inset-0 md:top-60 bg-[#f5ece7] -z-10" />

                <div className="flex flex-col gap-8 p-8 sm:px-24 sm:pt-48 mt-auto items-center" >
                    <TitleType title="どんな婚活サポート？" subTitle="Service" ancher="support" />

                    <FadeAndSlideScrollTriggerAnimation className="w-full" >
                        Match-Bondは<HighlightMarker> 福山市近辺のお客様限定</HighlightMarker> に婚活サポートを提供しています。<br />
                        福山市近辺ってどこまで？それはお客様基準としています。<br />
                        岡山県倉敷市に住んでいるけど、よく福山に行くよというお客様なら福山市近辺です。<br /><br />

                        <HighlightMarker>  Match-Bondは福山市近辺のお店</HighlightMarker>に協力してもらい、

                        <HighlightMarker>       婚活・結婚後に利用するサービス</HighlightMarker>  を

                        <HighlightMarker>    お得に利用できる仕組み</HighlightMarker>
                        を作っています。<br />

                        例えば、婚活のために外見を磨くことは大切ですよね。<br />
                        美容院、脱毛、エステ、ネイルなど様々なサービスをお得に利用できます。<br />
                        そして、結婚後は結婚指輪、結婚フォト、結婚式など大きな出費があります。<br />
                    </FadeAndSlideScrollTriggerAnimation>

                    <TransitionImage alt="私たちの想い" src={mariage1} className="sm:hidden rounded-md mt-auto" />

                    <FadeAndSlideScrollTriggerAnimation className="w-full" >
                        この大きな出費も軽減することができます。
                        この様な仕組みから<br />
                        <HighlightMarker> 福山市近辺のお店で総額〇〇万円お得なサービス</HighlightMarker>を受けながら、
                        効率的に幸せな婚活～結婚を目指すことができます。 <br /><br />

                        この婚活サポートを利用するにはMatch-Bondの<br />
                        結婚相談所に入会して頂きます。<br />
                        Match-Bondの結婚相談所に入会すると、<br />
                        Match-Bondの婚活イベント、<br />
                        恋愛相談窓口もお得に利用することができます。<br />


                        婚活することなく結婚できた人より、<br />
                        総額〇〇万円お得に婚活して結婚した方が<br />
                        最高じゃないですか？<br />
                        更に結婚後もお得なサポートありだなんて最高！！！<br />
                    </FadeAndSlideScrollTriggerAnimation>

                    <div className="w-full space-y-4 flex flex-col">
                        <LinkButton href="/services#service1" title="婚活中にお得なサービスが受けれるお店はコチラ" className="w-full" innerClassName="!px-0" />
                        <LinkButton href="/services#service2" title="成婚退会後にお得なサービスが受けれるお店はコチラ" className="w-full" innerClassName="!px-0" />
                    </div>

                    <p>※お得なサービスはMatch-Bondの結婚相談所に入会した場合のみご利用頂けます。</p>
                </div>

                <div className="px-8 my-auto flex flex-col gap-8 h-full">
                    <TransitionImage alt="私たちの想い" src={mariage1} className="hidden sm:block rounded-md mt-auto" />
                    <TransitionImage alt="私たちの想い" src={mariage2} className="rounded-md" />
                </div>
            </div>
        </div>
    )
}

const Section5 = () => {
    return (
        <SectionType1 className="w-full bg-color1 py-8 md:py-24" innerClassName="flex flex-col items-center">
            <TitleType ancher="consultants" title="恋愛・お悩み相談窓口" subTitle="Consultants" />

            <FadeAndSlideScrollTriggerAnimation tag="p" className="mt-8" innerClassName="w-full">
                Match-Bondの恋愛相談窓口は<br />
                「恋愛」「婚活」「結婚後」「夫婦関係」「子育て」<br />
                についてのお悩みを受け付けています。<br /><br />

                Match-Bondを利用したいけど、<br />
                何から利用したらいいのか分からない方も<br />
                恋愛相談窓口をご利用ください。<br />
            </FadeAndSlideScrollTriggerAnimation>

            <div className='max-w-6xl mx-auto mt-8'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FadeAndSlideScrollTriggerAnimation innerClassName='h-full'>
                        <PricingPlan
                            title='お悩み相談'
                            disableButton
                            image={ThreeMonthPlan}
                            description='恋愛・婚活・結婚後・夫婦関係・子育てについての相談を受け付けます。'
                        />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={60} innerClassName='h-full'>
                        <PricingPlan
                            title='恋愛コーチング'
                            disableButton
                            image={ThreeMonthPlan}
                            description='お客様の想いを明確にし、目標を設定、やるべき行動をお伝えします。'
                        />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation delay={120} innerClassName='h-full'>
                        <PricingPlan
                            title='恋愛タロット占い'
                            disableButton
                            image={ThreeMonthPlan}
                            description='恋愛タロット占いで楽しく未来を占いましょう。'
                        />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </div>

            <p className="mt-8">
                初回15分無料で恋愛相談窓口を利用できます！<br />
                ※事前予約が必要です。
            </p>
        </SectionType1>
    )
}

const Section4 = () => {
    return (
        <SectionType1 className="w-full bg-color1 py-8 md:py-24" innerClassName="flex flex-col items-center">
            <TitleType title="婚活イベント" subTitle="Events" ancher="events" />
            <div className="flex flex-col gap-8 mt-auto" >
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
                <FadeAndSlideScrollTriggerAnimation innerClassName="h-full">
                    <Image src={Events1} alt="sns" className="rounded-lg h-full" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation innerClassName="h-full">
                    <Image src={Events2} alt="sns" className="rounded-lg h-full" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation innerClassName="h-full">
                    <Image src={Events3} alt="sns" className="rounded-lg h-full" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation innerClassName="h-full">
                    <Image src={Events4} alt="sns" className="rounded-lg h-full" />
                </FadeAndSlideScrollTriggerAnimation>
            </div>

        </SectionType1>
    )
}

interface PlanProps {
    title: string;
    description: string;
    image: StaticImageData;
    disableButton?: boolean;
}

const PricingPlan = ({ title, description, image, disableButton }: PlanProps) => (
    <div className={`h-full bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4`}>
        <h2 className="text-title3 text-center text-color9">{title}</h2>
        <p className="text-gray-600 !mb-auto">{description}</p>
        {
            !disableButton && (
                <ServiceDialog  >
                    <div className='w-full p-4'>
                        <Image src={image} alt="料金表" />
                    </div>
                </ServiceDialog>
            )
        }

    </div>
);
