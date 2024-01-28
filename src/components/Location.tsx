import Link from "next/link";

export default function Location() {
    return (
        <div className="relative max-w-max mx-auto flex items-center justify-center">
            <Link href="https://www.google.com/maps?q=Toronto">
                <div className="w-16 md:w-32 lg:w-36 h-16 md:h-32 lg:h-36 font-bold rounded-full border border-black flex flex-col items-center justify-center">
                    <p className="text-locationSm md:text-locationMd lg:text-locationLg">43°42'0.4"N,</p>
                    <p className="text-locationSm md:text-locationMd lg:text-locationLg">79°24'58.68"W</p>
                </div>
            </Link>
        </div>
    );
}
