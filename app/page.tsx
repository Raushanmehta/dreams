import HeroSection from "@/sections/home/HeroSection";
import PropertiesSection from "@/sections/home/PropertiesSection";
import ServiceSection from "@/sections/home/ServiceSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import TeamSection from "@/sections/home/TeamSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import BlogSection from "@/sections/home/BlogSection";
import AboutSection from "@/sections/home/AboutSection";
import { site } from "@/data";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white font-sans">
      <HeroSection data={site.hero} />
      <AboutSection data={site.about} />
      <PropertiesSection data={site.properties} />
      <WhyChooseUsSection data={site.whyChooseUs} />
      <TeamSection data={site.team} />
      <ServiceSection data={site.services} />
      <TestimonialSection data={site.testimonials} />
      <BlogSection data={site.blog} />
    </main>
  );
}
