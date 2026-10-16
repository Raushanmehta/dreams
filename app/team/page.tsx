import BreadCrumb from "@/components/common/BreadCrumb";
import TeamSection from "@/sections/home/TeamSection";

export default function TeamPage() {
    return (
        <main>
            <BreadCrumb title="Meet Our Expert Team" subtitle="Driven by passion, defined by excellence." />
            <TeamSection />
        </main>
    );
}