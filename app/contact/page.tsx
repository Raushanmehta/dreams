import BreadCrumb from "@/components/common/BreadCrumb";
import ContactSection from "@/sections/ContactSection";
import { site } from "@/data";

export default function ContactPage() {
    return (
        <main>
            <BreadCrumb
                title="Contact Us"
                subtitle="Send us a suggestion or get in touch with our private concierge team."
            />
            <ContactSection data={site.contact} />
        </main>
    );
}