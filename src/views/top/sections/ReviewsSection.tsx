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
        <div className="w-full my-20 px-4">
            <div className="bg-blush/40 max-w-screen-md rounded-[2rem] mx-auto overflow-hidden">
                <div className="grid md:grid-cols-2">
                    {/* Left: title + CTA */}
                    <div className="flex flex-col gap-6 p-10 md:p-14 my-auto items-center">
                        <TitleType ancher="reviews" title="お客様の声" subTitle="Reviews" />
                        <div className="heading-line" />

                        <p className="text-body-muted text-size2 text-center leading-[1.9]">
                            実際にご利用いただいた<br />お客様からの声をご紹介します。
                        </p>

                        <div className="flex flex-col items-center gap-2 w-full max-w-xs">
                            <LinkButton href="https://g.co/kgs/CJDKC7U" title="Google口コミを見る" />
                            <span className="text-size3 text-body-muted text-center">
                                福山市No.1のGoogle口コミ
                            </span>
                        </div>

                        <FadeAndSlideScrollTriggerAnimation className="text-size3 text-center text-body-muted">
                            Instagram／LINEに届いたお客様の声
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>

                    {/* Right: review images */}
                    <div className="p-6 md:p-8 my-auto grid grid-cols-2 gap-3 mx-auto max-w-sm w-full">
                        <div>
                            <Image src={Review4} alt="お客様の声" className="rounded-xl shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-3">
                            {[Review1, Review2, Review3, Review5, Review6].map((review, i) => (
                                <Image key={i} src={review} alt="お客様の声" className="rounded-xl shadow-sm" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
