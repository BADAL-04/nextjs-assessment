'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex gap-6 justify-center fixed w-full top-0 z-10">
      <Link href="/" className="text-blue-600 font-semibold hover:underline">Home</Link>
      <Link href="/artists" className="text-blue-600 font-semibold hover:underline">Artists</Link>
      <Link href="/onboard" className="text-blue-600 font-semibold hover:underline">Onboard</Link>
      <Link href="/dashboard" className="text-blue-600 font-semibold hover:underline">Dashboard</Link>
    </nav>
  );
}
