import Line from '@/assets/sns/LINE.svg'
import Instagram from '@/assets/sns/Instagram.svg'
import X from '@/assets/sns/X.svg'
import Image from 'next-export-optimize-images/picture';

export const SnsLinkList = () => {
    return (
        <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
            <a href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fmatch-bond.net%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5EMatchBond&region=follow_link&screen_name=MatchBond"
                target="_blank"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Instagram"
            >
                <Image src={X} alt="X" className="w-12" />
            </a>
            <a href="https://www.instagram.com/match_bond.marriage/"
                target="_blank"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="X (Twitter)">
                <Image src={Instagram} alt="Instagram" className="w-12" />
            </a>
            <a href="https://page.line.me/070frujq?oat_content=url&openQrModal=true"
                target="_blank"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LINE">
                <Image src={Line} alt="Line" className="w-12" />
            </a>

            <div className='w-full text-center'>
                <h3 className='text-color10 text-title3'>DMでお気軽にお問い合わせください</h3>
            </div>
        </div>
    )
}