import { Suspense } from "react";
import BreadCrumb from "@/components/common/BreadCrumb";
import PropertiesDetailSection from "@/sections/PropertiesDetailSection";
import { site } from "@/data";

interface PropertiesDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return site.properties.propertiesList.map((property) => ({
        slug: property.id,
    }));
}

async function PropertyDetailContent({ params }: PropertiesDetailPageProps) {
    const { slug } = await params;
    const matched =
        site.properties.propertiesList.find((p) => p.id === slug) ||
        site.properties.propertiesList[0];

    return (
        <>
            <BreadCrumb
                title="Property Details"
                subtitle={matched?.title ? `${matched.title} Luxury Residence` : "Luxury Residence"}
            />
            <PropertiesDetailSection data={site.properties} propertySlug={slug} />
        </>
    );
}

export default function PropertiesDetailPage({ params }: PropertiesDetailPageProps) {
    return (
        <div className="min-h-screen bg-slate-50/50">
            <Suspense
                fallback={
                    <div className="min-h-screen bg-[#f4f4f2] flex items-center justify-center">
                        <div className="w-10 h-10 border-3 border-[#2563EB] border-t-transparent rounded-full animate-spin" />
                    </div>
                }
            >
                <PropertyDetailContent params={params} />
            </Suspense>
        </div>
    );
}