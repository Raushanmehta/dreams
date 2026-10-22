import BreadCrumb from "@/components/common/BreadCrumb";
import ThankYouSection from "@/sections/ThankYouSection";
import { site } from "@/data";

export default function ThankYouPage() {
    return (
        <main>
            
            <BreadCrumb
                title="Thank You"
                subtitle="Thank you for contacting us. We will get back to you as soon as possible."
            />
            {/* Thank you section */}
            <ThankYouSection data={site.thankYou} />
        </main>
    );
}