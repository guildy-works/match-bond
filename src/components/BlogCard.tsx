import Link from 'next/link';
import { Blog } from '@/libs/microcms';

// 日付をフォーマットする関数
export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

type BlogCardProps = {
    blog: Blog;
    className?: string;
};

// ブログカードコンポーネント
export const BlogCard = ({ blog, className = '' }: BlogCardProps) => {
    return (
        <Link href={`/blog?id=${blog.id}`} className={`block group ${className}`}>
            <article className="bg-white rounded-lg overflow-hidden border transition-shadow duration-300">
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
                    <div className="flex items-center justify-between mb-2">
                        <time className="text-size3 text-gray-500">
                            {formatDate(blog.publishedAt)}
                        </time>
                        <span className={`inline-block px-2 py-1 text-size3 rounded ${blog.category ? 'bg-color5 text-color10' : 'invisible'}`}>
                            {blog.category?.name || 'カテゴリなし'}
                        </span>
                    </div>
                    <h2 className="text-title4 line-clamp-2 group-hover:text-color9 transition-colors duration-200">
                        {blog.title}
                    </h2>
                </div>
            </article>
        </Link>
    );
};
