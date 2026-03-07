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
    <div className={`h-full bg-white p-6 rounded-lg flex flex-col border`}>
        <h2 className="text-title3 text-center text-color9">{title}</h2>
        <p className="text-font1 !mb-auto mt-3 text-center">{description}</p>
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
