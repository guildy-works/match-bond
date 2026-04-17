"use client";

import "./globals.scss";
import { Header, menuItems } from "./Header";

import '@splidejs/react-splide/css';
import { Footer } from "./Footer";
import { Head } from "next/document";
import { Metadata } from "next";
import { useState } from "react";
import Script from "next/script";

const gaId = 'G-LWY1EF8E1D'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" >
            <head>
                <title>{"Match-Bond｜福山の結婚相談所"}</title>
                <meta name="description" content={"Match-Bond｜初期費用０円・40社以上の婚活協力企業と提携｜福山の結婚相談所"} />

                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                    strategy='afterInteractive'
                    async
                />
                <Script id='google-analytics' strategy='afterInteractive'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gaId}');
                    `}
                </Script>
            </head>

            <body className="flex min-h-screen flex-col">
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
