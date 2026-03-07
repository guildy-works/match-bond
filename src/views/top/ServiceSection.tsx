
import { SupportSection } from "./sections/SupportSection";
import { PricingPlanSection } from "./sections/PricingPlanSection";
import { MarriageConsultationSection } from "./sections/MarriageConsultationSection";
import { EventsSection } from "./sections/EventsSection";
import { ConsultantsSection } from "./sections/ConsultantsSection";
import { ReviewsSection } from "./sections/ReviewsSection";

export const ServiceSection = () => {
    return (
        <>
            <SupportSection />
            <ReviewsSection />
            <MarriageConsultationSection />
            <PricingPlanSection />
            <EventsSection />
            <ConsultantsSection />
        </>
    );
};
