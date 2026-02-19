import Hero from "@/components/organisms/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Hero
          title="Hi, I'm Eugene 👋"
          subtitle="Frontend Developer building clean, scalable and user-focused web applications."
          buttons={[
            { label: "View Projects", href: "/projects", variant: "primary" },
            { label: "Contact Me", href: "/contact", variant: "secondary" },
          ]}
        />
      </main>
    </div>
  );
}
