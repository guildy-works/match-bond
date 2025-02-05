'use client'

import { useEffect, useLayoutEffect, useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import { createClient } from 'newt-client-js'
import { MdArrowCircleDown, MdArrowDropDownCircle } from "react-icons/md";
import Script from "next/script";
import { useRouter } from "next/navigation"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { FadeAndSlideAnimation } from "@/libs/Animations/FadeAndSlideAnimation";

const client = createClient({
    spaceUid: 'match-bond',
    token: 'iZxLywD3WKvq_dGl_VPKT5vcsZTv2IJHOv67erVRuMg',
    apiType: 'cdn', // "cdn" または "api" を指定する
})

const items = [
    "ウエディング",
    "エステ",
    "トレーニング",
    "マッサージ",
    "飲食店",
    "占い",
    "その他"
]

interface Model {
    _id: string;
    _sys: {
        createdAt: string;
        updatedAt: string;
        customOrder: number;
        raw: {
            createdAt: string;
            updatedAt: string;
            firstPublishedAt: string;
            publishedAt: string;
        };
    };
    name: string;
    category: string;
    service: string;
    description: string;
    detailsHtml?: string;
    url: {
        html: string;
        url: string;
    };
    url2: string;
}

export default function Home() {
    const [data2, setData2] = useState<Model[] | null>(null)
    const [data, setData] = useState<Model[] | null>(null)
    const router = useRouter()
    useEffect(() => {
        const f = async () => {
            const [result, result2,] = await Promise.all([
                client.getContents<Model>({ appUid: "services", modelUid: "services2" }),
                client.getContents<Model>({ appUid: "services", modelUid: "services1" }),
            ])
            setData(result.items)
            setData2(result2.items)
        }

        f()
    }, [])

    useLayoutEffect(() => {
        (window as any).iframely?.load();
        if (location.hash) {
            router.replace(location.hash)
        }

    }, [data2, data])

    return (
        <>
            <title>{"Match-Bond 福山"}</title>
            <meta name="description" content={"Match-Bond｜総額〇〇万円お得に婚活！｜初期費用０円｜福山結婚相談所"} />
            <Script src="https://cdn.iframe.ly/embed.js" />

            <div className="max-w-3xl mx-auto flex flex-col gap-4 p-8">
                <h2 className="text-title1 text-color9 relative">
                    <div id="service1" className="absolute -top-40" />
                    婚活中にお得なサービスが<br className="md:hidden" />受けれるお店
                </h2>
                <p className="text-color9_2/80">※お得なサービスはMatch-Bondの結婚相談所に入会した場合のみご利用頂けます。</p>
                <CsvTable data={data2} />

                <h2 className="mt-8 text-title1 text-color9 relative">
                    <div id="service2" className="absolute -top-40" />
                    成婚退会後にお得なサービスが<br className="md:hidden" />受けれるお店
                </h2>
                <p className="text-color9_2/80">※お得なサービスはMatch-Bondの結婚相談所に入会した場合のみご利用頂けます。</p>
                <CsvTable data={data} />
            </div>
        </>
    );
}

const CsvTable = ({ data }: { data: Model[] | null }) => {
    const obj = data?.reduce(
        (x, y) => ({
            ...x,
            [y.category]: {
                name: y.category,
                items: [...(x[y.category]?.items ?? []), y]
            }
        }),
        {} as Record<string, { name: string, items: Model[] }>
    ) ?? {}

    return (
        <div className="mx-auto w-full space-y-4">
            {
                items.map((key, i) => {
                    const item = obj[key]
                    if (!item) return null

                    return <FadeAndSlideScrollTriggerAnimation key={item.name}>
                        <Disclosure as="div" className="p-6 bg-color9_2/10 rounded-xl" defaultOpen={true} >
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <h2 className="text-title1 text-color9 font-bold group-data-[hover]:text-color9/60">
                                    {item.name}
                                </h2>
                                <MdArrowDropDownCircle className="size-5 fill-color3/60 group-data-[hover]:fill-color3/50 group-data-[open]:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2 text-sm/5 divide-y divide-color3 w-full">
                                {
                                    item.items.map((item, i) => (
                                        <div className="flex flex-col justify-between py-4 gap-3" key={item._id}>
                                            <h3 className="text-title3 text-color9 font-bold">{item.name}</h3>
                                            <p className="text-size3 text-color9_2/80">サービス内容: {item.service}</p>
                                            <p className="whitespace-pre-wrap">{item.description}</p>

                                            {
                                                item.detailsHtml && <>
                                                    <h4 className="text-title4 text-color9 font-bold">店舗情報</h4>
                                                    <div dangerouslySetInnerHTML={{ __html: item.detailsHtml ?? "" }}
                                                        className="html-editor w-full z-0"
                                                    ></div>
                                                </>
                                            }

                                            {
                                                item.url && <div dangerouslySetInnerHTML={{ __html: item.url?.html.replace(`<script async src=\"//cdn.iframe.ly/embed.js\" charset=\"utf-8\"></script>`, "") ?? "" }}
                                                    className="w-full z-0"
                                                ></div>
                                            }

                                            {item.url2 && <a href={item.url2}>{item.url2}</a>}
                                        </div>
                                    ))
                                }
                            </DisclosurePanel>
                        </Disclosure>
                    </FadeAndSlideScrollTriggerAnimation>
                })
            }
        </div>
    )
};

