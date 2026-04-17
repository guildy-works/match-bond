import { LinkButton } from "@/components/LinkButton";
import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Image from 'next-export-optimize-images/picture';
import Review1 from '@/assets/reviews/1.png';
import Review2 from '@/assets/reviews/2.png';
import Review3 from '@/assets/reviews/3.png';
import Review4 from '@/assets/reviews/4.png';
import Review5 from '@/assets/reviews/5.png';
import Review6 from '@/assets/reviews/6.png';

export const ReviewsSection = () => {
    return (
        <div className="w-full my-20 bg-blush/40 max-w-screen-md grid md:grid-cols-2 py-16 md:px-20 mx-auto gap-6 rounded-[2rem]">
            <div className="flex flex-col gap-6 p-8 sm:p-10 my-auto items-center" >
                <TitleType ancher="reviews" title="お客様の声" subTitle="Reviews" />
                <div className="heading-line" />
                <p className="text-body-muted text-size2 text-center leading-[1.9]">
                    実際にご利用いただいた<br />お客様からの声をご紹介します。
                </p>
                <LinkButton href="https://g.co/kgs/CJDKC7U" title="Google口コミはこちら" />

                <FadeAndSlideScrollTriggerAnimation className="text-size3 text-center text-body-muted">
                    Instagram／LINEに届いたお客様の声
                </FadeAndSlideScrollTriggerAnimation>
            </div>

            <div className="px-8 max-w-screen-sm my-auto grid grid-cols-2 gap-3 mx-auto">
                <div>
                    <Image src={Review4} alt="お客様の声" className="rounded-xl shadow-sm" />
                </div>
                <div className="flex flex-col gap-3">
                    <Image src={Review1} alt="お客様の声" className="rounded-xl shadow-sm" />
                    <Image src={Review2} alt="お客様の声" className="rounded-xl shadow-sm" />
                    <Image src={Review3} alt="お客様の声" className="rounded-xl shadow-sm" />
                    <Image src={Review5} alt="お客様の声" className="rounded-xl shadow-sm" />
                    <Image src={Review6} alt="お客様の声" className="rounded-xl shadow-sm" />
                </div>
            </div>
        </div>
    );
};
