import BreadCrumb from "@/components/common/BreadCrumb";
import EnquiryNowSection from "@/sections/EnquiryNowSection";
import { site } from "@/data";

export default function EnquiryNowPage() {
    return (
        <main>
            <BreadCrumb
                title="Enquiry Now"
                subtitle="Please share your details below and a member of our team will get in touch within 24 hours."
            />
            <EnquiryNowSection data={site.enquiryNow} />
        </main>
    );
}