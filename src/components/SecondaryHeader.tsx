export default function SecondaryHeader() {
    return (
        <div className="flex flex-col max-w-max">
            <p
                className="text-black leading-none align-top text-headerSm md:text-headerMd"
            >
                DEVELOPER
            </p>
            <div className="flex gap-4 row-start-2 col-start-3">
                <span className="text-subLabelSm md:text-subLabelMd font-bold">FULL</span>
                <span className="text-subLabelSm md:text-subLabelMd font-bold">STACK</span>
            </div>
        </div>
    )
}
