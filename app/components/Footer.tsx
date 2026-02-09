import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#9c3b22] text-white">
      {/* Top subscribe bar */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-white/20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="uppercase tracking-widest text-sm">Subscribe</span>

          <div className="flex w-full sm:max-w-md">
            <input
              type="email"
              placeholder="Sign Me Up"
              className="flex-1 px-4 py-3 text-black outline-none"
            />
            <button className="bg-white text-[#9c3b22] px-6 font-medium">
              →
            </button>
          </div>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="font-medium mb-1">Get on the Guest List</p>
          <p className="text-white/80">
            Perks include $100 off your first order* <br />
            Plus new product launches, store openings, and more!
          </p>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="text-5xl font-serif mb-6">V</div>
        </div>

        {/* About */}
        <div>
          <h4 className="uppercase tracking-widest mb-4">About Us</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/sustainability">Sustainability Report</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uppercase tracking-widest mb-4">Contact</h4>
          <ul className="space-y-2 text-white/80">
            <li>877-476-9627</li>
            <li><Link href="/contact">Email Us</Link></li>
            <li><Link href="/contact">Live Chat</Link></li>
            <li><Link href="/contact">Book Appointment</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="uppercase tracking-widest mb-4">Support</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link href="#">Free Shipping</Link></li>
            <li><Link href="#">Free Returns</Link></li>
            <li><Link href="#">Warranty</Link></li>
            <li><Link href="#">Financing</Link></li>
            <li><Link href="#">Track Your Order</Link></li>
            <li><Link href="#">Support Center</Link></li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h4 className="uppercase tracking-widest mb-4">Education</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link href="#">Learn About the 4Cs</Link></li>
            <li><Link href="#">Diamond Shapes</Link></li>
            <li><Link href="#">Lab Grown Diamonds</Link></li>
            <li><Link href="#">Moissanite vs Diamonds</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/70">
          <p>© {new Date().getFullYear()} VANDIAMS. All rights reserved.</p>

          {/* Socials */}
          <div className="flex gap-6 text-lg">
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Pinterest</Link>
            <Link href="#">TikTok</Link>
            <Link href="#">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
