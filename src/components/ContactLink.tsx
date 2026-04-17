import Link from "next/link";
import { MdMail } from "react-icons/md";

export const ContactLink = () => (
    <Link href="/#contacts"
     className="w-fit bg-primary text-white px-6 py-3.5 rounded-full font-medium hover:bg-primary-dark transition-all duration-300 flex items-center tracking-wider">
        <MdMail className="mr-2" size={20} />
        お問い合わせはこちら
    </Link>
)