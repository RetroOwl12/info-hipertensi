import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nama Website */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          InfoHipertensi
        </Link>

        {/* Menu */}
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Beranda
          </Link>

          <Link
            href="/artikel"
            className="text-gray-700 hover:text-blue-600"
          >
            Artikel
          </Link>

          <Link
            href="/tim-kami"
            className="text-gray-700 hover:text-blue-600"
          >
            Tim Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}
