import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import Link from "next/link";
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { MdClose, MdMenu } from 'react-icons/md';
import { SnsLinkList } from '@/components/SnsLinkList';
import Logo from "@/assets/logo.png";
import Image from 'next-export-optimize-images/picture';
import { useScroll } from 'motion/react';
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';


type MenuItem = {
    href: string;
    label: string;
    childlen?: MenuItem[]; // 子要素がある場合
};

export const menuItems = [
    { href: "/", label: "TOP" },
    { href: "/#sns", label: "SNS" },
    {
        href: "/#support", label: "婚活サポート", childlen: [
            { title: "婚活中にお得なサービスが受けれるお店", href: "/services#service1" },
            { title: "成婚退会後にお得なサービスが受けれるお店", href: "/services#service2" },
        ]
    },
    { href: "/#mariage", label: "結婚相談所", },
    { href: "/#plan", label: "料金プラン", },
    { href: "/#events", label: "婚活イベント", },
    { href: "/blog", label: "ブログ" },
    { href: "/#contacts", label: "お問い合わせ" },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="flex items-center sticky top-0 bg-linen/80 backdrop-blur-xl z-20 border-b border-sand/50">
                <Link href="/" className="ml-7 py-4">
                    <h1 className='font-slight text-primary text-[26px] font-normal whitespace-nowrap tracking-[0.15em]'>Match Bond</h1>
                </Link>

                {/* Desktop */}
                <nav className="hidden w-full md:flex gap-10 justify-end py-6 px-20">
                    <div className='ml-auto' />
                    {menuItems.map((item, index) => (
                        <div className="relative group" key={index}>
                            <Link
                                href={item.href}
                                className="text-navigation py-2 text-body/70 hover:text-primary transition-colors duration-300"
                            >
                                {item.label}
                            </Link>

                            {item.childlen?.length && (
                                <div className="absolute z-10 hidden top-8 group-hover:block w-max transition duration-300">
                                    <div className="p-4 bg-white/95 backdrop-blur-md rounded-lg border border-sand flex flex-col gap-2">
                                        {item.childlen?.map((child, idx) => (
                                            <Link
                                                key={idx}
                                                href={child.href}
                                                className="text-navigation hover:text-primary transition duration-300 py-1"
                                            >
                                                {child.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile */}
                <nav className="flex md:hidden w-full gap-6 justify-end py-2">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="flex items-center justify-center p-2 w-12 h-12 rounded-full text-body/60 hover:text-primary transition-colors">
                        <MdMenu size={28} />
                    </button>

                    <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav>
            </header>
        </>
    );
};

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer = ({ isOpen, setIsOpen, children }: React.PropsWithChildren<Props>) => {
    const close = () => setIsOpen(false);

    return (
        <Dialog transition open={isOpen} as="div"
            className="relative z-50 focus:outline-none transition duration-300 ease-out data-[closed]:opacity-0"
            onClose={close}>
            <div className="fixed inset-0 z-50">
                <DialogPanel className="relative bg-linen/95 backdrop-blur-2xl w-full h-screen p-4 flex flex-col items-center justify-center">

                    <h1 className='py-6 text-[2rem] font-slight text-primary tracking-[0.2em]'>Match Bond</h1>
                    <div className='heading-line mb-8' />

                    <nav className="flex flex-col gap-5 items-center">
                        {menuItems.map((item, index) => (
                            <FadeAndSlideScrollTriggerAnimation key={item.href} delay={index * 0.01} className="flex flex-col gap-3 items-center">
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    href={item.href}
                                    className="text-navigation text-body/80 hover:text-primary transition duration-300"
                                >
                                    {item.label}
                                </Link>
                                {item.childlen?.length && (
                                    item.childlen?.map((child) => (
                                        <Link
                                            onClick={() => setIsOpen(false)}
                                            key={child.href}
                                            href={child.href}
                                            className="text-navigation text-body-muted hover:text-primary transition duration-300"
                                        >
                                            {child.title}
                                        </Link>
                                    ))
                                )}
                            </FadeAndSlideScrollTriggerAnimation>
                        ))}
                    </nav>

                    <div className="mt-10">
                        <Image className="opacity-80" src={Logo} alt="Match-Bond" width={80} height={80} loading="lazy" />
                    </div>

                    <div className="mt-6">
                        <SnsLinkList />
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="absolute top-5 right-5 inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-full text-body/50 hover:text-primary transition-colors"
                    >
                        <MdClose size={22} />
                    </button>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
