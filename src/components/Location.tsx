import Link from "next/link";

export default function Location() {
  return (
    <div className="relative max-w-max mx-auto flex items-center justify-center">
      <Link href={'https://www.google.com/maps?q=Toronto'}>
        <div className="w-20 h-20 rounded-full border border-black flex flex-col items-center justify-center">
          <p className="text-locationSm font-bold">43°42'0.4"N,</p>
          <p className="text-locationSm font-bold">79°24'58.68"W</p>
        </div>
      </Link>
    </div>
  );
}
