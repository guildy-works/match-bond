import Link from "next/link"
import BookingBunnerImage from "@/assets/booking.jpg"
import Image from 'next-export-optimize-images/picture';

export const BookingBunner = () => {
    return (
        <div className="w-full flex">
            <Link
                className="w-full max-w-[580px] mx-auto"
                href="https://www.tl-assist.com/user/reservation/Y6z3gbrp/menu?staff_id=2518" target="_blank"  >
                <Image src={BookingBunnerImage} alt="Booking Banner" className="w-full max-w-[680px]" />
            </Link>
        </div>
    )
}
