'use client'

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { TopSection } from "@/views/top/TopSection";
import { NewsSection } from "@/views/top/NewsSection";
import { EventsSection } from "@/views/top/EventsSection";
import AboutSection from "@/views/top/AboutSection";
import { ContactSection } from "@/views/top/ContactSection";
import { ServiceSection } from "@/views/top/ServiceSection";
import { fetchAllNewses, News } from "@/models/client";

export default async function Home() {
    const newses = await fetchAllNewses();

    return (
        <>
            <title>{"Match-Bond 福山"}</title>
            <meta name="description" content={"広島県福山市を中心に活動する結婚相談所。初期費用無料の完全成功報酬型。一期一会、ご縁を大切に、あなたの幸せを応援します。"} />

            <TopSection />
            <AboutSection />

            <div className="mt-4 sm:mt-12 lg:mt-24 w-full flex justify-center">
                <NewsSection news={newses} />
            </div>

            <ServiceSection />

            <div className="w-full flex justify-center bg-color4 p-3 sm:p-6 md:p-8">
                <EventsSection />
            </div>

            <ContactSection />

            <ScrollIndicator />

        </>
    );
}
