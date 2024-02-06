type AccordionProps = {
    isActive: boolean;
    title: string;
    projectType: string;
    image: string;
    header: string;
    description: string;
    link: string;
}

export default function AccordionItem({
    // isActive,
    // key,
    title,
    projectType,
    // image,
    // header,
    // description,
    // link
}: AccordionProps) {
    return (
        <div className="flex text-labelSm md:text-labelMd lg:text-labelLg text-black">
            <div className="w-1/2 py-2">
                <p>{title}</p>
            </div>
            <div className="w-1/2 py-2 border border-l-black pl-2">
                <p>{projectType}</p>
            </div>
        </div>
    )
}
