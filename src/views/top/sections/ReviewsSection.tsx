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
        <div className="w-full my-32 bg-[#f5ece7] max-w-screen-md grid md:grid-cols-2 py-24 md:px-32 mx-auto gap-3">
            <div className="flex flex-col gap-8 p-8 sm:p-16 my-auto items-center" >
                <TitleType ancher="reviews" title="お客様の声" subTitle="Reviews" />
                <LinkButton href="https://g.co/kgs/CJDKC7U" title="Google口コミはこちら" ></LinkButton>

                <FadeAndSlideScrollTriggerAnimation  >
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
    );
};
