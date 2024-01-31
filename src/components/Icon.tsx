export default function Icon() {
    return (
        <div className="absolute right-0 px-4 py-4">
            <div
                style={{
                    animation: "fadeIcon 10s linear infinite"
                }}
                className="relative rounded-full border border-r1 w-16 h-16 flex justify-center items-center">
                <div className="rounded-full border border-black w-1 h-1"></div>
                <div
                    className="absolute rounded-full border border-black w-10 h-10 transform translate-y-6 -translate-x-6"
                ></div>
            </div>
        </div>

    )
}
