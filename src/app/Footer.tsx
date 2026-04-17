import Link from "next/link";
import { menuItems } from "./Header";
import { SnsLinkList } from "@/components/SnsLinkList";
import Logo from "@/assets/logo.png";
import Image from 'next-export-optimize-images/picture';


export const Footer = () => {
    return (
        <footer className="bg-primary-dark pt-16 pb-8 w-full">
            <div className="max-w-4xl mx-auto px-8">
                {/* Logo & tagline */}
                <div className="flex flex-col items-center mb-14">
                    <Image className="mx-auto opacity-80" src={Logo} alt="Match-Bond" width={80} height={80} />
                    <h2 className="font-slight text-[1.6rem] text-white/80 tracking-[0.2em] mt-4">Match Bond</h2>
                    <p className="text-white/40 text-size3 mt-2 tracking-wider">あなたの婚活に最善を尽くします</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* SNS */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-white/30 text-size3 tracking-[0.2em] uppercase mb-5">Follow Us</h3>
                        <SnsLinkList />
                    </div>

                    {/* サイトマップ */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-white/30 text-size3 tracking-[0.2em] uppercase mb-5">Site Map</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2">
                            {menuItems.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-white/50 hover:text-white/80 transition-colors text-size3">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* コピーライト */}
                <div className="w-full border-t border-white/10 mt-14 pt-6">
                    <p className="text-center text-white/30 text-size3">
                        © {new Date().getFullYear()} Match-Bond
                    </p>
                </div>
            </div>
        </footer>
    );
};
