import BreadCrumb from "@/components/common/BreadCrumb";
import NotFoundSection from "@/sections/NotFoundSection";
import siteData from "@/data/site.json";

export default function NotFound() {
    return (
        <main>
            {/* Not found section */}
            <NotFoundSection data={siteData.notFound} />
        </main>
    );
}
