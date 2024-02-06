import { useState } from "react"
import AccordionItem from "./AccordionItem"

export default function Accordion({ projectsData }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleActiveIndex = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    return (
        <section>
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
        </section>

    )
}
