import { projectsData } from "@/utils/content";
import AccordionItem from "@/components/ui/AccordionItem";
import { useState } from "react";

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleActiveIndex = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
        console.log(index)
    }

    return (
        <section className="relative bg-g3 h-full pt-24 md:pt-28 lg:pt-32">
            <div className="z-10 max-w-[90%] border divide-none border-t-black mx-auto px-4 md:px-10 lg:px-16">
                <div className="flex text-labelSm md:text-labelMd lg:text-labelLg text-black">
                    <div className="w-1/2 py-2 pl-2 font-sans">
                        <p>Project</p>
                    </div>
                    <div className="w-1/2 py-2 border border-l-black divide-transparent pl-2 font-sans">
                        <p>Description</p>
                    </div>
                </div>
                {projectsData.map((project, index: number) => (
                    <AccordionItem
                        key={index}
                        isActive={index === activeIndex}
                        onClick={() => handleActiveIndex(index)}
                        title={project.title}
                        projectType={project.type}
                        image={project.image}
                        header={project.header}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
            <span
                style={{
                    wordWrap: 'break-word',
                    zIndex: 0,
                    pointerEvents: "none"
                }}
                className="absolute text-black opacity-[3%] text-center top-0 font-extrabold align-top leading-tight lg:leading-none tracking-tighter max-h-full max-w-full text-projectBgSm md:text-projectBgMd lg:text-projectBgLg">
                PROJECTS
            </span>
        </section >

    )
}
