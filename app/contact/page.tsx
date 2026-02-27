import { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import Contact from "@/components/organisms/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me to discuss your next web development project.",
  alternates: {
    canonical: "/contact"
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact
        title="Let's Connect"
        subtitle="Have a project in mind? Reach out and let's build something amazing together."
        socials={[
          { 
            icon: <Mail size={20} />, 
            platform: "Email", 
            username: "eugenermondrealw@email.com", 
            href: "mailto:eugenermondrealw@email.com" 
          },
          { 
            icon: <Github size={20} />, 
            platform: "GitHub", 
            username: "eugenermondrealw-source", 
            href: "https://github.com" 
          },
          { 
            icon: <Linkedin size={20} />, 
            platform: "LinkedIn", 
            username: "Eugene Mondreal", 
            href: "https://linkedin.com" 
          },
        ]}
      />
    </>
  );
}
