import BreadCrumb from "@/components/common/BreadCrumb";
import EnquiryNowSection from "@/sections/EnquiryNowSection";

export default function EnquiryNowPage() {
    return (
        <main>
            <BreadCrumb
                title="Enquire About Mayna"
                subtitle="Please share your details below and a member of our team will get in touch within 24 hours."
            />
            <EnquiryNowSection />
        </main>
    );
}