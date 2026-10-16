import HeroSection from "@/sections/home/HeroSecion";
import PropertiesSection from "@/sections/home/PropertiesSection";
import ServiceSection from "@/sections/home/ServiceSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import TeamSection from "@/sections/home/TeamSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import BlogSection from "@/sections/home/BlogSection";
import AboutSection from "@/sections/home/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white font-sans">
      <HeroSection />
      <AboutSection />
      <PropertiesSection />
      <WhyChooseUsSection />
      <TeamSection />
      <ServiceSection />
      <TestimonialSection />
      <BlogSection />
    </main>
  );
}
