'use client'

import { useEffect, useLayoutEffect, useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import { MdArrowDropDownCircle } from "react-icons/md";
import Script from "next/script";
import { useRouter } from "next/navigation"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";

// Google Spreadsheet公開CSV URL (gidパラメータで各シートを指定)
const SPREADSHEET_BASE_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4Wqccl7aW6RE4u9KYfWI_IhbHCKbbuwGoXqHtkFF-AMhYnYXw74xio9wOr_NRrg/pub?output=csv';
// 各シートのGID (スプレッドシートURLの gid= から確認できます)
const GID_KONKATSU = '1166918849';  // 婚活中シート
const GID_SEIKON = '2004352983';              // 成婚退会後シート (実際のGIDに変更してください)

interface Model {
    _id: string;
    name: string;
    category: string;
    service: string;
    description: string;
    detailsHtml?: string;
    url?: {
        html: string;
        url: string;
    };
    url2?: string;
}

// CSVをパースする関数（改行を含むセルに対応）
function parseCSV(csv: string): string[][] {
    const result: string[][] = [];
    let currentRow: string[] = [];
    let currentCell = '';
    let inQuotes = false;
    
    for (let i = 0; i < csv.length; i++) {
        const char = csv[i];
        
        if (char === '"') {
            if (inQuotes && csv[i + 1] === '"') {
                // エスケープされたダブルクォート
                currentCell += '"';
                i++;
            } else {
                // クォートの開始/終了
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            // セルの区切り
            currentRow.push(currentCell);
            currentCell = '';
        } else if ((char === '\n' || char === '\r') && !inQuotes) {
            // 行の区切り（クォート外）
            if (char === '\r' && csv[i + 1] === '\n') {
                i++; // CRLFをスキップ
            }
            currentRow.push(currentCell);
            if (currentRow.length > 0) {
                result.push(currentRow);
            }
            currentRow = [];
            currentCell = '';
        } else {
            currentCell += char;
        }
    }
    
    // 最後のセルと行を追加
    currentRow.push(currentCell);
    if (currentRow.length > 0 && currentRow.some(cell => cell.trim())) {
        result.push(currentRow);
    }
    
    return result;
}

// CSVデータをModelに変換する関数
function csvToModels(csvData: string[][]): { models: Model[], categories: string[] } {
    // 最初の3行をスキップ (タイトル行、列ヘッダー行、実際のヘッダー行)
    const dataRows = csvData.slice(3).filter(row => row.length > 1 && row[1]?.trim());
    
    let lastCategory = '';
    const categories: string[] = [];
    
    const models = dataRows.map((row, index) => {
        // ジャンルが空の場合は前の行のジャンルを引き継ぐ
        let category = row[0]?.trim() || lastCategory;
        if (row[0]?.trim()) {
            lastCategory = row[0].trim();
            // カテゴリを順序を保持しながら追加
            if (!categories.includes(category)) {
                categories.push(category);
            }
        }
        
        return {
            _id: `item-${index}`,
            category: category,                 // A列: ジャンル
            name: row[1]?.trim() || '',         // B列: お店の名前
            service: row[2]?.trim() || '',      // C列: お店のサービス
            description: row[3]?.trim() || '',  // D列: お得なサービス
            url2: row[4]?.trim() || '',         // E列: ホームページ
        };
    });
    
    return { models, categories };
}

// Google Spreadsheetからデータを取得
async function fetchSheetData(gid?: string): Promise<{ models: Model[], categories: string[] }> {
    // gidがある場合は追加、ない場合はデフォルトシート
    const url = gid 
        ? `${SPREADSHEET_BASE_URL}&gid=${gid}`
        : SPREADSHEET_BASE_URL;
    console.log('Fetching:', url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch spreadsheet: ${response.status}`);
        }
        const csvText = await response.text();
        console.log('CSV:', csvText.substring(0, 500));
        const csvData = parseCSV(csvText);
        return csvToModels(csvData);
    } catch (error) {
        console.error('Error fetching spreadsheet:', error);
        return { models: [], categories: [] };
    }
}

export default function Home() {
    const [data2, setData2] = useState<Model[] | null>(null)
    const [categories2, setCategories2] = useState<string[]>([])
    const [data, setData] = useState<Model[] | null>(null)
    const [categories, setCategories] = useState<string[]>([])
    const router = useRouter()
    useEffect(() => {
        const f = async () => {
            // 婚活中シート（シート1 = デフォルト）と成婚退会後シート（シート2 = gid=0）を取得
            const [konkatsuResult, seikonResult] = await Promise.all([
                fetchSheetData(),           // シート1: 婚活中
                fetchSheetData(GID_SEIKON), // シート2: 成婚退会後
            ]);
            
            console.log('婚活中:', konkatsuResult);
            console.log('成婚退会後:', seikonResult);
            
            setData2(konkatsuResult.models)
            setCategories2(konkatsuResult.categories)
            setData(seikonResult.models)
            setCategories(seikonResult.categories)
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
                <CsvTable data={data2} categories={categories2} />

                <h2 className="mt-8 text-title1 text-color9 relative">
                    <div id="service2" className="absolute -top-40" />
                    成婚退会後にお得なサービスが<br className="md:hidden" />受けれるお店
                </h2>
                <p className="text-color9_2/80">※お得なサービスはMatch-Bondの結婚相談所に入会した場合のみご利用頂けます。</p>
                <CsvTable data={data} categories={categories} />
            </div>
        </>
    );
}

const CsvTable = ({ data, categories }: { data: Model[] | null, categories: string[] }) => {
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
                categories.map((key, i) => {
                    const item = obj[key]
                    if (!item) return null

                    return <FadeAndSlideScrollTriggerAnimation key={item.name}>
                        <Disclosure as="div" className="p-6 bg-color9_2/10 rounded-xl" defaultOpen={true} >
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <h2 className="text-title2 text-color9 font-bold group-data-[hover]:text-color9/60">
                                    {item.name}
                                </h2>
                                <MdArrowDropDownCircle className="size-5 fill-color3/60 group-data-[hover]:fill-color3/50 group-data-[open]:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2 text-sm/5 divide-y divide-color3 w-full">
                                {
                                    item.items.map((item, i) => (
                                        <div className="flex flex-col justify-between py-4 gap-1" key={item._id}>
                                            <h3 className="text-title4 text-color9 font-bold">{item.name}</h3>
                                            <p className="text-size3 text-color9_2/80">サービス内容: {item.service}</p>
                                            <p className="whitespace-pre-wrap text-size3 font-bold">{item.description}</p>

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

                                            {item.url2 && <a href={item.url2} target="_blank">{item.url2}</a>}
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

