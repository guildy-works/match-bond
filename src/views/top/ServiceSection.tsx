import { MarriageConsultationSection } from "./sections/MarriageConsultationSection";
import { PricingPlanSection } from "./sections/PricingPlanSection";
import { SupportSection } from "./sections/SupportSection";
import { EventsSection } from "./sections/EventsSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { ConsultantsSection } from "./sections/ConsultantsSection";

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
