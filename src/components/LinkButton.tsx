'use client'

import Link from "next/link";
import styles from "./LinkButton.module.scss";
import clsx from "clsx";

export const LinkButton = (
    {
        href,
        title,
        subTitle,
        className,
        innerClassName
    }: {
        href: string,
        title?: string
        subTitle?: string;
        className?: string;
        innerClassName?: string;
    }
) => {

    return (
        <Link href={href} className={className}>
            <div className={clsx(styles.viewMore, innerClassName)} >
                {
                    title && <h2
                        style={{
                            fontSize: "0.7rem",
                            userSelect: "none"
                        }}
                    >
                        {title}
                    </h2>
                }
            </div>
        </Link>
    );
};
