import { SectionType1 } from "@/components/SectionType1"
import { SnsLinkList } from "@/components/SnsLinkList"
import Image from 'next-export-optimize-images/picture';

import LineQR from "@/assets/LineQR.png"

export const ContactSection = () => {

    return (
        <SectionType1 disableLine className="bg-color1" innerClassName="items-center relative">
            <div id="contacts" className="absolute -top-32" />

            <div className="bg-white p-8 md:p-16 md:px-48 w-full my-8 md:my-32">
                <h2 className="text-title2 font-jost text-center mb-2">CONTACT</h2>
                <p className="text-center text-gray-600 mb-8">お問い合わせ・ご相談はお気軽にどうぞ。</p>

                <SnsLinkList />

                <Image src={LineQR} alt="sns" className="hidden md:block rounded-lg w-[180px] mx-auto" />
            </div>

        </SectionType1>
    )
}
