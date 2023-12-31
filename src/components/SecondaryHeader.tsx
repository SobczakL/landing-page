export default function SecondaryHeader(){
    return(
        <div className="flex flex-col ml-auto max-w-max">
            <p className="secondaryHeader col-start-3 col-span-2 text-black align-baseline text-transparent text-headerSm md:text-headerMd font-extrabold">DEVELOPER</p>
            <div className="flex gap-4 row-start-2 col-start-3">
                <span className="text-subLabelSm md:text-subLabelMd font-bold">FULL</span>
                <span className="text-subLabelSm md:text-subLabelMd font-bold">STACK</span>
            </div>
        </div>
    )
}
