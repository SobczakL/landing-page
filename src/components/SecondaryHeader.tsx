export default function SecondaryHeader() {
    return (
        <div className="flex flex-col max-w-max gap-2">
            <p
                className="text-black w-fit leading-none text-headerSm md:text-headerMd"
            >
                DEVELOPER
            </p>
            <div
                className="flex gap-4 row-start-2 col-start-3 pl-[3px]"
            >
                <span className="text-subLabelSm md:text-subLabelMd font-bold">FULL</span>
                <span className="text-subLabelSm md:text-subLabelMd font-bold">STACK</span>
            </div>
        </div>
    )
}
