import { ServiceDialog } from "@/components/ServiceDialog";
import Image from 'next-export-optimize-images/picture';
import { StaticImageData } from 'next/image';
import { ReactNode } from "react";

interface PlanProps {
    title: string;
    description: ReactNode;
    image: StaticImageData;
    disableButton?: boolean;
}

export const PricingPlan = ({ title, description, image, disableButton }: PlanProps) => (
    <div className={`h-full bg-white p-7 rounded-2xl flex flex-col border border-sand/30 shadow-sm duration-300`}>
        <h2 className="text-title4 text-center text-primary font-medium">{title}</h2>
        <div className="heading-line mt-3 mb-4" />
        <p className="text-body-light !mb-auto text-center leading-[1.9] text-size2">{description}</p>
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
