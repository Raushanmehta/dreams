import BreadCrumb from "@/components/common/BreadCrumb";
import GallerySection from "@/sections/GallerySection";
import { site } from "@/data";

export default function GalleryPage() {
    return (
        <main>
            <BreadCrumb title="Our Gallery" subtitle="A visual journey through the world's most exclusive addresses." />
            <GallerySection data={site.gallery} />
        </main>
    );
}
