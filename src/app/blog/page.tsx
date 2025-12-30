'use client';

import { getBlogs, getBlogById, Blog } from '@/libs/microcms';
import Link from 'next/link';
import Image from 'next/image';
import { SectionBar } from '@/components/SectionBar';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/Loading';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { BlogCard, formatDate } from '@/components/BlogCard';

// ブログ詳細コンポーネント
const BlogDetail = ({ blog }: { blog: Blog }) => {
    return (
        <div className="min-h-screen bg-color4">
            {/* ヒーローイメージ */}
            {blog.eyecatch && (
                <div className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden">
                    <img
                        src={blog.eyecatch.url}
                        alt={blog.title}
                        className="object-contain w-full h-full"
                    />
                    <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(180deg, rgba(42, 123, 155, 0) 0%, rgba(249, 243, 243, 0.1) 80%, rgba(249, 243, 243, 1) 100%)' }}
                    />
                </div>
            )}

            {/* 記事コンテンツ */}
            <article className="container mx-auto px-4 max-w-3xl">
                <div className={`${blog.eyecatch ? '-mt-20' : 'mt-16'} relative z-10`}>

                    {/* 本文 */}
                    <div className="bg-white rounded-lg mb-8 p-6 sm:p-8 md:p-10">
                        {blog.category && (
                            <span className="inline-block px-3 py-1 text-size3 text-color10 rounded mb-4">
                                {blog.category.name}
                            </span>
                        )}
                        <h1 className="text-title2 sm:text-title3 leading-tight mb-4">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 text-size3 text-gray-500">
                            <time>
                                公開: {formatDate(blog.publishedAt)}
                            </time>
                            {blog.updatedAt !== blog.publishedAt && (
                                <time>
                                    更新: {formatDate(blog.updatedAt)}
                                </time>
                            )}
                        </div>

                        <div
                            className="html-editor prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>

                    {/* ナビゲーション */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center py-8">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-size2 text-color10 hover:text-color9 transition-colors"
                        >
                            <span>←</span>
                            <span>ブログ一覧へ戻る</span>
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-size2 text-color10 hover:text-color9 transition-colors"
                        >
                            <span>トップページへ</span>
                            <span>→</span>
                        </Link>
                    </div>
                </div>
            </article>

            {/* 下部余白 */}
            <div className="h-16" />
        </div>
    );
};

// ブログ一覧コンポーネント
const BlogList = ({ blogs, totalCount }: { blogs: Blog[]; totalCount: number }) => {
    return (
        <div className="min-h-screen bg-color4">
            {/* ヒーローセクション */}
            <section className="py-16 sm:py-24 bg-gradient-to-b from-color1 to-color4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center">
                        <SectionBar text="Blog" />
                        <p className="mt-6 text-size-p text-center">
                            Match-Bondからのお知らせや婚活に役立つ情報をお届けします
                        </p>
                    </div>
                </div>
            </section>

            {/* ブログ一覧 */}
            <section className="py-12 sm:py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    {blogs.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-size-p text-gray-500">
                                まだ記事がありません
                            </p>
                        </div>
                    ) : (
                        <>
                            <p className="text-size3 text-gray-500 mb-6">
                                全 {totalCount} 件の記事
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {blogs.map((blog) => (
                                    <BlogCard key={blog.id} blog={blog} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* トップに戻るリンク */}
            <section className="pb-16">
                <div className="container mx-auto px-4 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-size2 text-color10 hover:text-color9 transition-colors"
                    >
                        <span>←</span>
                        <span>トップページへ戻る</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

// メインコンテンツ（useSearchParamsを使用）
function BlogContent() {
    const searchParams = useSearchParams();
    const id = searchParams?.get('id');

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [blog, setBlog] = useState<Blog | null>(null);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                if (id) {
                    // 詳細ページ
                    const data = await getBlogById(id);
                    setBlog(data);
                    document.title = `${data.title} | Match-Bond Blog`;
                } else {
                    // 一覧ページ
                    const data = await getBlogs(12);
                    setBlogs(data.contents);
                    setTotalCount(data.totalCount);
                    document.title = 'ブログ | Match-Bond';
                }
            } catch (err) {
                console.error('Failed to fetch:', err);
                setError(id ? '記事が見つかりませんでした' : 'ブログの取得に失敗しました');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-color4 flex items-center justify-center">
                <Loading />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-color4 flex flex-col items-center justify-center gap-4">
                <p className="text-size-p text-red-500">{error}</p>
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-size2 text-color10 hover:text-color9 transition-colors"
                >
                    <span>←</span>
                    <span>ブログ一覧へ戻る</span>
                </Link>
            </div>
        );
    }

    // 詳細表示
    if (id && blog) {
        return <BlogDetail blog={blog} />;
    }

    // 一覧表示
    return <BlogList blogs={blogs} totalCount={totalCount} />;
}

// メインページコンポーネント（Suspenseでラップ）
export default function BlogPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-color4 flex items-center justify-center">
                <Loading />
            </div>
        }>
            <BlogContent />
        </Suspense>
    );
}
