import BreadCrumb from "@/components/common/BreadCrumb";
import AboutSection from "@/sections/home/AboutSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";

export default function AboutPage() {
    return (
        <main>
            <BreadCrumb title="About Us" subtitle="Pioneering extraordinary architecture and bespoke sanctuaries across global capitals." />
            <AboutSection showButton={false} />
            <WhyChooseUsSection />
        </main>
    );
}