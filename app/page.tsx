import Image from "next/image";
import Link from "next/link";
import ProductCard from "./users/components/ProductCard";
export default function Home() {
  return (
    <main>
      <ProductCard />
      <Link href="/users"> /Users</Link>
    </main>
  );
}
