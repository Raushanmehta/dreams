import siteData from "@/data/site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type DreamsSchema = typeof siteData.Dreams;
export type DreamsSections = DreamsSchema["sections"];
export type DreamsTemplateComponents = DreamsSchema["templateComponents"];

// Aliases matching reference schema conventions
export type ServicesSchema = DreamsSchema;
export type ServicesSections = DreamsSections;
export type ServicesTemplateComponents = DreamsTemplateComponents;

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type DreamsNavbarData = DreamsSections["navbar"]["variants"]["DreamsNavbar1"];
export type DreamsHeroData = DreamsSections["hero"]["variants"]["DreamsHero1"];
export type DreamsAboutData = DreamsSections["about"]["variants"]["DreamsAbout1"];
export type DreamsPropertiesData = DreamsSections["properties"]["variants"]["DreamsProperties1"];
export type DreamsWhyChooseUsData = DreamsSections["whyChooseUs"]["variants"]["DreamsWhyChooseUs1"];
export type DreamsTeamData = DreamsSections["team"]["variants"]["DreamsTeam1"];
export type DreamsServicesData = DreamsSections["services"]["variants"]["DreamsServices1"];
export type DreamsTestimonialsData = DreamsSections["testimonials"]["variants"]["DreamsTestimonials1"];
export type DreamsBlogData = DreamsSections["blog"]["variants"]["DreamsBlog1"];
export type DreamsContactData = DreamsSections["contact"]["variants"]["DreamsContact1"];
export type DreamsEnquiryNowData = DreamsSections["enquiryNow"]["variants"]["DreamsEnquiryNow1"];
export type DreamsGalleryData = DreamsSections["gallery"]["variants"]["DreamsGallery1"];
export type DreamsClientsData = DreamsSections["clients"]["variants"]["DreamsClients1"];
export type DreamsFaqsData = DreamsSections["faqs"]["variants"]["DreamsFaqs1"];
export type DreamsThankYouData = DreamsSections["thankYou"]["variants"]["DreamsThankYou1"];
export type DreamsNotFoundData = DreamsSections["notFound"]["variants"]["DreamsNotFound1"];
export type DreamsFooterData = DreamsSections["footer"]["variants"]["DreamsFooter1"];

// ── Inferred Sub-item Data Models ──
export type PropertyItem = DreamsPropertiesData["propertiesList"][0];
export type PropertyDestination = PropertyItem;
export type TeamMember = DreamsTeamData["members"][0];
export type BlogPost = DreamsBlogData["blogPosts"][0];
export type TestimonialItem = DreamsTestimonialsData["testimonialsList"][0];
export type ServiceItem = DreamsServicesData["servicesList"][0];
export type WhyChooseUsFeature = DreamsWhyChooseUsData["features"][0];
export type FaqItem = DreamsFaqsData["items"][0];
export type ClientItem = DreamsClientsData["clientsList"][0];
export type GalleryItem = DreamsGalleryData["items"][0];
export type NavItem = DreamsNavbarData["navItems"][0];
export type NavItemConfig = NavItem;

// ── Convenience & Standard Compatibility Aliases ──
export type ServicesNavbarData = DreamsNavbarData;
export type ServicesHeroData = DreamsHeroData;
export type ServicesAboutData = DreamsAboutData;
export type ServicesPropertiesData = DreamsPropertiesData;
export type ServicesWhyChooseUsData = DreamsWhyChooseUsData;
export type ServicesTeamData = DreamsTeamData;
export type ServicesPageData = DreamsServicesData;
export type ServicesTestimonialsData = DreamsTestimonialsData;
export type ServicesBlogData = DreamsBlogData;
export type ServicesContactData = DreamsContactData;
export type ServicesEnquiryNowData = DreamsEnquiryNowData;
export type ServicesGalleryData = DreamsGalleryData;
export type ServicesClientsData = DreamsClientsData;
export type ServicesFaqsData = DreamsFaqsData;
export type ServicesFooterData = DreamsFooterData;

// Short Aliases
export type HeroData = DreamsHeroData;
export type AboutData = DreamsAboutData;
export type PropertiesData = DreamsPropertiesData;
export type WhyChooseUsData = DreamsWhyChooseUsData;
export type TeamData = DreamsTeamData;
export type ServicesData = DreamsServicesData;
export type TestimonialsData = DreamsTestimonialsData;
export type BlogData = DreamsBlogData;
export type ContactData = DreamsContactData;
export type EnquiryNowData = DreamsEnquiryNowData;
export type GalleryData = DreamsGalleryData;
export type ClientsData = DreamsClientsData;
export type FaqsData = DreamsFaqsData;
export type FooterData = DreamsFooterData;
export type NavbarData = DreamsNavbarData;
export type ThankYouData = DreamsThankYouData;
export type NotFoundData = DreamsNotFoundData;

// ── Default Site Data (Unified Schema Node Map) ──
const sec = siteData.Dreams.sections;

export const site = {
  navbar: sec.navbar.variants.DreamsNavbar1,
  hero: sec.hero.variants.DreamsHero1,
  about: sec.about.variants.DreamsAbout1,
  properties: sec.properties.variants.DreamsProperties1,
  whyChooseUs: sec.whyChooseUs.variants.DreamsWhyChooseUs1,
  team: sec.team.variants.DreamsTeam1,
  services: sec.services.variants.DreamsServices1,
  testimonials: sec.testimonials.variants.DreamsTestimonials1,
  blog: sec.blog.variants.DreamsBlog1,
  contact: sec.contact.variants.DreamsContact1,
  enquiryNow: sec.enquiryNow.variants.DreamsEnquiryNow1,
  gallery: sec.gallery.variants.DreamsGallery1,
  clients: sec.clients.variants.DreamsClients1,
  faqs: sec.faqs.variants.DreamsFaqs1,
  thankYou: sec.thankYou.variants.DreamsThankYou1,
  notFound: sec.notFound.variants.DreamsNotFound1,
  footer: sec.footer.variants.DreamsFooter1,

  // Root references
  Dreams: siteData.Dreams,
  Services: siteData.Dreams,
};

export type SiteData = typeof site;
export default siteData;
