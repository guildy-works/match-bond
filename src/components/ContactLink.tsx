import Link from "next/link";
import { MdMail } from "react-icons/md";

export const ContactLink = () => (
    <Link href="/#contacts"
     className="w-fit bg-black text-white px-4 py-4 rounded-xl font-semibold hover:bg-black/60 transition duration-300 flex">
        <MdMail className="mr-2" size={20} />
        お問い合わせはこちら
    </Link>
)