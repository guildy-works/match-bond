'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Blog, getBlogs } from '@/libs/microcms';
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { BlogCard } from '@/components/BlogCard';

export const LatestBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await getBlogs(6, 0);
                setBlogs(response.contents);
            } catch (err) {
                setError('ブログの取得に失敗しました');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (isLoading) {
        return (
            <div className="w-full flex justify-center py-8">
                <div className="animate-spin h-8 w-8 border-4 border-color9 rounded-full border-t-transparent"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full text-center py-8 text-gray-500">
                {error}
            </div>
        );
    }

    if (blogs.length === 0) {
        return (
            <div className="w-full text-center py-8 text-gray-500">
                ブログ記事がありません
            </div>
        );
    }

    return (
        <div className="w-full">
            <FadeAndSlideScrollTriggerAnimation>
                <Splide
                    options={{
                        perPage: 3,
                        perMove: 1,
                        gap: '1.5rem',
                        pagination: true,
                        arrows: true,
                        autoplay: true,
                        interval: 4000,
                        pauseOnHover: true,
                        breakpoints: {
                            1024: {
                                perPage: 2,
                            },
                            640: {
                                perPage: 1,
                            },
                        },
                    }}
                    aria-label="新着ブログ"
                >
                    {blogs.map((blog) => (
                        <SplideSlide key={blog.id}>
                            <BlogCard blog={blog} />
                        </SplideSlide>
                    ))}
                </Splide>
            </FadeAndSlideScrollTriggerAnimation>
            <div className="mt-6 text-center">
                <Link
                    href="/blog"
                    className="inline-block px-6 py-3 bg-color9 text-white rounded-full hover:bg-color9/80 transition-colors duration-300"
                >
                    ブログ一覧
                </Link>
            </div>
        </div>
    );
};
