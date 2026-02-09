import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
<footer className="relative text-[#3a2f2a] overflow-hidden">
  {/* Background image (blurred, visible) */}
  <div
    className="absolute inset-0 scale-110 blur-lg"
    style={{
      // backgroundImage: "url('/images/vandiams-footer-bg.jpg')",
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      background:'#efdaafc4'
    }}
  />

  {/* Soft gradient overlay (lighter) */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#f6f2ee]/70 via-[#f6f2ee]/80 to-[#f6f2ee]/90" />

  {/* Content */}
  <div className="relative">
        {/* Subscribe */}
        <div className="max-w-7xl mx-auto px-6 py-16 border-b border-black/10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="uppercase tracking-[0.25em] text-xs text-[#7a6a5f]">
              Subscribe
            </span>

            <div className="flex w-full sm:max-w-md">
              <input
                type="email"
                placeholder="Sign Me Up"
                className="flex-1 px-4 py-3 border border-[#d6cfc7] bg-white text-sm outline-none"
              />
              <button className="px-6 bg-[#3a2f2a] text-white text-sm">
                →
              </button>
            </div>
          </div>

          <div className="text-sm leading-relaxed text-[#6d5f55]">
            <p className="font-medium text-[#3a2f2a] mb-1">
              Get on the Guest List
            </p>
            <p>
              Perks include $100 off your first order* <br />
              Plus new launches, store openings, and more.
            </p>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-5 gap-12 text-sm">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo.png"
              alt="VANDIAMS"
              width={160}
              height={50}
              className="mb-6"
            />
            <p className="text-[#6d5f55] leading-relaxed">
              Modern diamond luxury,
              <br />
              responsibly created.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="uppercase tracking-widest text-xs mb-5 text-[#7a6a5f]">
              About
            </h4>
            <ul className="space-y-3 text-[#6d5f55]">
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase tracking-widest text-xs mb-5 text-[#7a6a5f]">
              Contact
            </h4>
            <ul className="space-y-3 text-[#6d5f55]">
              <li>877-476-9627</li>
              <li><Link href="#">Email Us</Link></li>
              <li><Link href="#">Live Chat</Link></li>
              <li><Link href="#">Book Consultation</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="uppercase tracking-widest text-xs mb-5 text-[#7a6a5f]">
              Support
            </h4>
            <ul className="space-y-3 text-[#6d5f55]">
              <li><Link href="#">Free Shipping</Link></li>
              <li><Link href="#">Free Returns</Link></li>
              <li><Link href="#">Warranty</Link></li>
              <li><Link href="#">Financing</Link></li>
              <li><Link href="#">Track Order</Link></li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h4 className="uppercase tracking-widest text-xs mb-5 text-[#7a6a5f]">
              Education
            </h4>
            <ul className="space-y-3 text-[#6d5f55]">
              <li><Link href="#">The 4Cs</Link></li>
              <li><Link href="#">Diamond Shapes</Link></li>
              <li><Link href="#">Lab-Grown Diamonds</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#7a6a5f]">
            <p>
              © {new Date().getFullYear()} VANDIAMS. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="#">Instagram</Link>
              <Link href="#">Pinterest</Link>
              <Link href="#">TikTok</Link>
              <Link href="#">LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
