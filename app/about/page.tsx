import BreadCrumb from "@/components/common/BreadCrumb";
import AboutSection from "@/sections/home/AboutSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import { site } from "@/data";

export default function AboutPage() {
    return (
        <main>
            <BreadCrumb title="About Us" subtitle="Pioneering extraordinary architecture and bespoke sanctuaries across global capitals." />
            <AboutSection data={site.about} showButton={false} />
            <WhyChooseUsSection data={site.whyChooseUs} />
        </main>
    );
}