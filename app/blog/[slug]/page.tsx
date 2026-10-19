import { Suspense } from "react";
import BreadCrumb from "@/components/common/BreadCrumb";
import siteData from "@/data/site.json";
import BlogDetailSection, { type BlogDetailArticleData } from "@/sections/BlogDetailSection";

interface BlogDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const allPosts = (siteData.blog.blogPosts || []) as BlogDetailArticleData[];
    const paramsList: { slug: string }[] = [];
    allPosts.forEach((post) => {
        if (post.id) paramsList.push({ slug: post.id });
        if (post.slug && post.slug !== post.id) paramsList.push({ slug: post.slug });
    });
    return paramsList;
}

async function BlogDetailContent({ params }: BlogDetailPageProps) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;

    return (
        <>
            <BreadCrumb
                title="Blog Details"
                subtitle={siteData.blog.description}
            />
            <BlogDetailSection postSlug={slug} />
        </>
    );
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
    return (
        <div className="min-h-screen bg-[#f4f4f2]">
            <Suspense
                fallback={
                    <div className="min-h-screen bg-[#f4f4f2] flex items-center justify-center">
                        <div className="w-10 h-10 border-3 border-[#2563EB] border-t-transparent rounded-full animate-spin" />
                    </div>
                }
            >
                <BlogDetailContent params={params} />
            </Suspense>
        </div>
    );
}