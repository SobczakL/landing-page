import Accordion from "@/components/ui/Accordion/Accordion";
import { projectsData } from "@/utils/content";

export default function Projects() {
    return (
        <section className="relative bg-g3 h-full pt-24 md:pt-28 lg:pt-32">
            <div className="max-w-[90%] border border-t-black mx-auto px-4 md:px-10 lg:px-16">
                <div className="flex text-labelSm md:text-labelMd lg:text-labelLg text-black">
                    <div className="w-1/2 py-2">
                        <p>Project</p>
                    </div>
                    <div className="w-1/2 py-2 border border-l-black pl-2">
                        <p>Description</p>
                    </div>
                </div>
                <Accordion
                    projectsData={projectsData}
                />
            </div>
            <span
                style={{ wordWrap: 'break-word' }}
                className="absolute text-black opacity-[3%] text-center top-0 font-extrabold align-top leading-tight lg:leading-none tracking-tighter max-h-full max-w-full text-projectBgSm md:text-projectBgMd lg:text-projectBgLg">
                PROJECTS
            </span>
        </section >

    )
}
