'use client';

import { getBlogs, getBlogById, Blog } from '@/libs/microcms';
import Link from 'next/link';
import Image from 'next/image';
import { SectionBar } from '@/components/SectionBar';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/Loading';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// 日付をフォーマットする関数
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

// ブログカードコンポーネント
const BlogCard = ({ blog }: { blog: Blog }) => {
    return (
        <Link href={`/blog?id=${blog.id}`} className="block group">
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                    {blog.eyecatch ? (
                        <img
                            src={blog.eyecatch.url}
                            alt={blog.title}

                            className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                        />
                    ) : (
                        <div className="w-full h-full bg-color1 flex items-center justify-center">
                            <span className="text-color3 text-size2">No Image</span>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    {blog.category && (
                        <span className="inline-block px-2 py-1 text-size3 bg-color5 text-color10 rounded mb-2">
                            {blog.category.name}
                        </span>
                    )}
                    <h2 className="text-title4 line-clamp-2 group-hover:text-color9 transition-colors duration-200">
                        {blog.title}
                    </h2>
                    <time className="block mt-2 text-size3 text-gray-500">
                        {formatDate(blog.publishedAt)}
                    </time>
                </div>
            </article>
        </Link>
    );
};

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
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-color4 to-transparent" />
                </div>
            )}

            {/* 記事コンテンツ */}
            <article className="container mx-auto px-4 max-w-3xl">
                <div className={`${blog.eyecatch ? '-mt-20' : 'mt-16'} relative z-10`}>
                    {/* ヘッダー情報 */}
                    <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8">
                        {blog.category && (
                            <span className="inline-block px-3 py-1 text-size3 bg-color5 text-color10 rounded mb-4">
                                {blog.category.name}
                            </span>
                        )}
                        <h1 className="text-title2 sm:text-title1 leading-tight mb-4">
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
                    </div>

                    {/* 本文 */}
                    <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8">
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
