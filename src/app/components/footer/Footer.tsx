import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="font-raleway text-muted-foreground py-12 bg-[#0000] text-[white]">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12">
        <div className="space-y-4">
          <img src="/img/LOGO.svg" alt="logo" className="w-[142px] h-[142px]" />
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Главная</h4>
          <nav className="grid gap-1">
            <Link href="#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Products
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Аутсорсинг</h4>
          <nav className="grid gap-1">
            <Link href="#" className="hover:underline" prefetch={false}>
              Our Services
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Why Choose Us
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Testimonials
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Case Studies
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              FAQs
            </Link>
          </nav>
        </div>
          <div className="grid gap-2">
          <nav className="grid gap-1 mb-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              +996 555 55 55 55
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              info@example.com
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Bishkek, Kyrgyzstan
            </Link>
          </nav>
          <div className="flex gap-2">
            <Link
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <img src="/img/Instagraminatagram.svg" alt="Instagram" />
            </Link>
            <Link
              href="#"
              aria-label="TikTok"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <img src="/img/TikToktiitok.svg" alt="TikTok" />
            </Link>
            <Link
              href="#"
              aria-label="WhatsApp"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <img src="/img/Groupwhatsapp.svg" alt="WhatsApp" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
