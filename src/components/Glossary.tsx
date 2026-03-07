import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { ReactNode } from "react";

interface GlossaryItemProps {
    term: string;
    description: ReactNode;
    delay: number;
}

const GlossaryItem = ({ term, description, delay }: GlossaryItemProps) => {
    return (
        <FadeAndSlideScrollTriggerAnimation delay={delay} className="text-center h-full p-3 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-size2 font-semibold text-color9">{term}</h2>
            <p className="text-gray-600 mt-1 text-size3">{description}</p>
        </FadeAndSlideScrollTriggerAnimation>
    );
};

export const Glossary = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-title3 font-bold text-gray-800 mb-2 mt-4 text-center">用語説明</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-3">
                    <GlossaryItem
                        delay={0}
                        term="入会費"
                        description="入会するためにかかる費用"
                    />
                    <GlossaryItem
                        term="登録費"
                        delay={0.01}
                        description="登録するためにかかる費用"
                    />
                    <GlossaryItem
                        term="月会費"
                        delay={0.02}
                        description="結婚相談所の使用料（毎月）"
                    />
                    <GlossaryItem
                        term="お見合い費"
                        delay={0.03}
                        description={<>お見合いが成立した際に<br className="sm:hidden" />かかる費用</>}
                    />
                    <GlossaryItem
                        delay={0.04}
                        term="本交際"
                        description="交際する人を1名に決めること"
                    />
                    <GlossaryItem
                        term="成婚退会"
                        delay={0.05}
                        description={<>本交際で決めた人と<br className="sm:hidden" />いっしょに退会すること</>}
                    />
                </div>
            </div>
        </div>
    );
};
