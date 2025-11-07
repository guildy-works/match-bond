'use client'

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { TopSection } from "@/views/top/TopSection";
import AboutSection from "@/views/top/AboutSection";
import { ContactSection } from "@/views/top/ContactSection";
import { ServiceSection } from "@/views/top/ServiceSection";
import { useEffect, useState } from "react";
import { FeaturesSection } from "@/views/top/FeaturesSection";
import { SnsSection } from "@/views/top/SnsSection";
import { BookingBunner } from "@/components/BookingBunner";

export default function Home() {
    return (
        <>
            <div className="bg_noise"></div>

            <TopSection />

            <FeaturesSection />

            <AboutSection />

            <SnsSection />

            <ServiceSection />

            <ContactSection />

            <ScrollIndicator />

        </>
    );
}
