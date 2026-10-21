import BreadCrumb from "@/components/common/BreadCrumb";
import FaqsSection from "@/sections/FaqsSection";
import siteData from "@/data/site.json";

export default function FAQsPage() {
    return (
        <main>
            
            <BreadCrumb
                title="FAQs"
                subtitle="Frequently Asked Questions & Luxury Real Estate Advisory."
            />
            
            <FaqsSection data={siteData.faqs} />
        </main>
    );
}