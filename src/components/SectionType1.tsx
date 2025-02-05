import { ReactNode } from "react";
import clsx from "clsx";

export const SectionType1 = ({ children, disableLine, className, innerClassName }: { children: ReactNode, innerClassName?: string, className?: string, disableLine?: boolean }) => (
    <section className={clsx("w-full py-20 px-8 sm:px-12 md:px-24 relative", className)}>
        <div className={clsx("max-w-screen-md xl:max-w-screen-lg mx-auto flex flex-wrap relative", innerClassName) }>
            {/* Line */ }
            {
                !disableLine && <div className="h-px w-full mt-12 bg-color1 absolute" style={{ right: "calc(100% + 32px)" }}> </div>
            }

            {children}
        </div>
    </section >
)