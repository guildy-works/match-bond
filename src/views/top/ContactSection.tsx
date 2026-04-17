import { SectionType1 } from "@/components/SectionType1"
import { SnsLinkList } from "@/components/SnsLinkList"
import Image from 'next-export-optimize-images/picture';

import LineQR from "@/assets/LineQR.png"

export const ContactSection = () => {

    return (
        <SectionType1 disableLine className="bg-blush/30 pt-0" innerClassName="items-center relative">
            <div id="contacts" className="absolute -top-32" />

            <div className="bg-white p-8 md:p-16 md:px-32 w-full my-10 md:my-20 rounded-2xl shadow-sm border border-sand/30">
                <div className="text-center space-y-2 mb-8">
                    <p className="text-gold/50 font-asterdam text-[1.8rem] tracking-wider">Contact</p>
                    <h2 className="text-title2 font-mincho text-body">お問い合わせ</h2>
                    <div className="heading-line" />
                </div>
                <p className="text-center text-body-muted mb-8 leading-[1.9] text-size2">お問い合わせ・ご相談はお気軽にどうぞ。</p>

                <SnsLinkList />

                <div className="text-center my-8 space-y-5">
                    <div>
                        <h3 className="font-medium text-size2 mb-1 text-body-muted">お電話</h3>
                        <p className="text-title4">
                            <a href="tel:080-2930-5154" className="text-primary hover:text-primary-dark transition-colors">080-2930-5154</a>
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium text-size2 mb-1 text-body-muted">メールアドレス</h3>
                        <p className="text-size1">
                            <a href="mailto:yumeme19971017@icloud.com" className="text-primary hover:text-primary-dark transition-colors">yumeme19971017@icloud.com</a>
                        </p>
                    </div>
                </div>

                <Image src={LineQR} alt="LINE QR" className="hidden md:block rounded-xl w-[140px] mx-auto shadow-sm" />
            </div>

        </SectionType1>
    )
}
