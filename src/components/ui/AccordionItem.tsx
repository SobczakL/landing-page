import Image from "next/image";

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
    // header,
    description,
    // link
    onClick
}: AccordionProps) {
    return (
        <div onClick={onClick} className="flex flex-col cursor-pointer text-labelSm md:text-labelMd lg:text-labelLg text-black">
            <div
                style={{
                    backgroundColor: isActive ? "#B4B4B4" : "",
                    color: isActive ? "#FFFFFF" : ""
                }}
                className="flex hover:bg-g6 hover:text-white">
                <div className="w-1/2 py-2 pl-2">
                    <p>{title}</p>
                </div>
                <div className="w-1/2 py-2 border border-l-black pl-2">
                    <p>{projectType}</p>
                </div>
            </div>
            <div className="bg-g1">
                {isActive ?

                    <div className="flex flex-col float-right">
                        <Image
                            width={100}
                            height={100}
                            src={image} alt={title}
                            className="w-14"
                        />


                    </div>
                    :
                    <></>
                }
            </div>
        </div >
    )
}
