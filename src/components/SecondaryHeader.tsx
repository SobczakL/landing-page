export default function SecondaryHeader(){
    return(
        <div className="grid grid-cols-3 grid-rows-2">
            <p className="secondaryHeader col-start-2 col-span-2 text-black align-baseline text-transparent text-end text-headerSm md:text-headerMd font-extrabold">DEVELOPER</p>
            <div className="flex gap-4 row-start-2 col-start-2">
                <span className="text-subLabelSm md:text-subLabelMd font-bold">FULL</span>
                <span className="text-subLabelSm md:text-subLabelMd font-bold">STACK</span>
            </div>
        </div>
    )
}
