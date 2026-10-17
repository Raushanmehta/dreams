import BreadCrumb from "@/components/common/BreadCrumb";
import GallerySection from "@/sections/GallerySection";

export default function GalleryPage() {
    return (
        <main>
            <BreadCrumb title="Our Gallery" subtitle="A visual journey through the world's most exclusive addresses." />
            <GallerySection />
        </main>
    );
}
