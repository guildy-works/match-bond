'use client'

import clsx from "clsx";
import { useWindowsSize } from "../libs/useWindowSize";
import styles from "./ScrollIndicator.module.scss";
import { MdMail } from "react-icons/md";

export const ScrollIndicator = () => {
    const size = useWindowsSize(500);

    return <div
        style={{
            bottom: `calc(100svh - ${size.innerHeight}px + 8px)`,
        }}
        className={clsx(styles.container, "sm:mr-6 md:8")}
    >
        <a className="bg-color9_2/80 backdrop-blur-md text-white p-2 sm:p-4 rounded-xl flex justify-center items-center" href="#contacts">
            お問い合わせ
            <MdMail className="text-[24px] sm:mt-2" />
        </a>
        
    </div>;
};
