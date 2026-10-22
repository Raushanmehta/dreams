import BreadCrumb from "@/components/common/BreadCrumb";
import FaqsSection from "@/sections/FaqsSection";
import { site } from "@/data";

export default function FAQsPage() {
    return (
        <main>
            
            <BreadCrumb
                title="FAQs"
                subtitle="Frequently Asked Questions & Luxury Real Estate Advisory."
            />
            
            <FaqsSection data={site.faqs} />
        </main>
    );
}