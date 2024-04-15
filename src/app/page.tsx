import Maps from "@/components/maps";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center p-24 space-y-8">
            <Maps />
        </main>
    );
}
