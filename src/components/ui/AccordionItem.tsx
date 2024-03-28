import Image from "next/image";
import Link from "next/link";

type AccordionProps = {
    isActive: boolean;
    title: string;
    projectType: string;
    image: string;
    header: string;
    description: string;
    link: string;
    onClick: () => void;
}

export default function AccordionItem({
    isActive,
    // key,
    title,
    projectType,
    image,
    header,
    description,
    link,
    onClick
}: AccordionProps) {
    return (
        <div onClick={onClick} className="flex flex-col cursor-pointer text-labelSm md:text-labelMd lg:text-labelLg text-black">
            <div
                style={{
                    backgroundColor: isActive ? "#B4B4B4" : "",
                    color: isActive ? "#FFFFFF" : ""
                }}
                className="flex hover:bg-g6 hover:text-white hover:uppercase">
                <div className="w-1/2 py-2 pl-2">
                    <p>{title}</p>
                </div>
                <div className="w-1/2 py-2 border-l border-l-black pl-2">
                    <p>{projectType}</p>
                </div>
            </div>
            <div className="bg-g1">
                {isActive &&
                    <div
                        style={{
                            animation: 'projects 0.5s ease-in -out forwards'
                        }}
                        className="px-4 md:px-8 lg:px-16 py-2 md:py-4">
                        <div className="relative w-[100px] md:w-[200px] lg:w-[260px] h-[100px] md:h-[180px] lg:h-[260px] float-left mr-2 md:mb-4">
                            <a href={link}>
                                <Image
                                    fill={true}
                                    src={image}
                                    alt={title}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black opacity-20 hover:opacity-0" />
                            </a>
                        </div>
                        <p className="text-center font-sans font-bold text-subheaderSm md:text-subheaderMd lg:text-subheaderLg">{header}</p>
                        <p className="text-center font-serif text-bodySm md:text-bodyMd lg:text-bodyLg">{description}</p>
                        <a href={link}><p className="text-center underline font-serif text-bodySm md:text-bodyMd lg:text-bodyLg mt-2">Experience {title} here.</p></a>
                    </div>
                }
            </div>
        </div >
    )
}
