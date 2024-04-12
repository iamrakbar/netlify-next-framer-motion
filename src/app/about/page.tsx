import Link from "next/link";

// `app/about/page.tsx` is the UI for the `/about` URL
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center p-24 space-y-8">
            <h1>Hello, This is About Page!</h1>
            <Link href="/">Go to Index</Link>
        </div>
    )
}