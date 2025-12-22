import { createClient } from 'microcms-js-sdk';

// MicroCMS クライアントの作成
export const client = createClient({
    serviceDomain: 'matchbond',
    apiKey: 'y4QXFFWvZgVWMHbqyRmoRCmNwxvqkshmYXmL',
});

// ブログの型定義
export type Category = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
};

export type Eyecatch = {
    url: string;
    height: number;
    width: number;
};

export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    eyecatch?: Eyecatch;
    category?: Category;
};

export type BlogListResponse = {
    contents: Blog[];
    totalCount: number;
    offset: number;
    limit: number;
};

// ブログ一覧を取得
export const getBlogs = async (limit?: number, offset?: number): Promise<BlogListResponse> => {
    const response = await client.get<BlogListResponse>({
        endpoint: 'blogs',
        queries: {
            limit: limit ?? 10,
            offset: offset ?? 0,
        },
    });
    return response;
};

// ブログ詳細を取得
export const getBlogById = async (id: string): Promise<Blog> => {
    const response = await client.get<Blog>({
        endpoint: 'blogs',
        contentId: id,
    });
    return response;
};

// カテゴリでブログを絞り込み
export const getBlogsByCategory = async (categoryId: string): Promise<BlogListResponse> => {
    const response = await client.get<BlogListResponse>({
        endpoint: 'blogs',
        queries: {
            filters: `category[equals]${categoryId}`,
        },
    });
    return response;
};
