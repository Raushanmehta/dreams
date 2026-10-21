import BreadCrumb from "@/components/common/BreadCrumb";
import ThankYouSection from "@/sections/ThankYouSection";
import siteData from "@/data/site.json";

export default function ThankYouPage() {
    return (
        <main>
            
            <BreadCrumb
                title="Thank You"
                subtitle="Thank you for contacting us. We will get back to you as soon as possible."
            />
            {/* Thank you section */}
            <ThankYouSection data={siteData.thankYou} />
        </main>
    );
}

7274025882