import NotFoundSection from "@/sections/NotFoundSection";
import { site } from "@/data";

export default function NotFound() {
    return (
        <main>
            {/* Not found section */}
            <NotFoundSection data={site.notFound} />
        </main>
    );
}
