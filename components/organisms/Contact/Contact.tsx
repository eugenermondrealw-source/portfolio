import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
import SocialLink, { SocialLinkProps } from "../../atoms/SocialLink/SocialLink";
import { Send } from "lucide-react";

interface ContactProps {
  title?: string;
  subtitle?: string;
  socials?: SocialLinkProps[];
}

export default function Contact({ 
  title = "Let's Connect", 
  subtitle = "Have a project in mind? Reach out and let's build something amazing together.",
  socials = [],
}: ContactProps) {
  return (
    <section className="mx-auto max-w-6xl py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT: INFO & SOCIALS */}
        <div className="flex flex-col gap-8">
          <div>
            <Heading level="h2" className="text-4xl font-bold mb-4">{title}</Heading>
            <p className="text-text text-lg max-w-md">{subtitle}</p>
          </div>

          <div className="flex flex-col gap-4">
            {socials.map((social, idx) => (
              <SocialLink key={idx} {...social} />
            ))}
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <form className="p-8 rounded-3xl bg-surface border border-brand/10 shadow-sm flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-brand ml-1">Name</label>
              {/* Added focus:border-brand for better UI */}
              <input type="text" placeholder="John Doe" className="p-3 rounded-xl bg-background border border-brand/10 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-brand ml-1">Email</label>
              <input type="email" placeholder="john@example.com" className="p-3 rounded-xl bg-background border border-brand/10 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-text" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-brand ml-1">Message</label>
            <textarea rows={4} placeholder="How can I help you?" className="p-3 rounded-xl bg-background border border-brand/10 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none text-text" />
          </div>
          <Button variant="primary" className="w-full py-4 gap-2">
            Send Message <Send size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
}
