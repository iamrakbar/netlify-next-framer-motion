import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex items-center justify-center p-24 space-y-8">
            <h1>Hello, This is Index Page!</h1>
            <Link href="/about">Go to About</Link>
        </main>
    );
}
