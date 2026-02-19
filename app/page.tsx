import Hero from "@/components/organisms/Hero/Hero";

export default function Home() {
  return (
    <Hero
      title="Hi, I'm Eugene 👋"
      subtitle="Frontend Developer building clean, scalable and user-focused web applications."
      buttons={[
        { label: "View Projects", href: "/projects", variant: "primary" },
        { label: "Contact Me", href: "/contact", variant: "secondary" },
      ]}
    />
  );
}
