import SocialLinks from "@/components/SocialLinks";

const skills = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "MySQL",
    "C",
    "Node.JS",
    "TailwindCSS",
    "Git",
    "Figma",
    "VIM"
]

export default function About() {
    return (
        <section className="overflow-hidden bg-g2 h-full flex flex-col justify-between pb-32 pt-12 px-4 md:px-10 lg:px-16 pl-14 md:pl-16 relative box-border">
            <aside className="absolute flex gap-48 md:gap-32 transform -rotate-90 origin-top-right -translate-x-[101%] top-0 left-0">
                <div
                    style={{
                        animation: "scrollText 30s linear infinite"
                    }}
                    className="transform flex gap-48 md:gap-32 justify-between text-black text-sideheaderSm md:text-sideheaderMd">
                    <p>LUCAS</p>
                    <p>SOBCZAK</p>
                    <p>ABOUT</p>
                </div>
                <div
                    style={{
                        animation: "scrollText 30s linear infinite"
                    }}
                    className="transform flex gap-48 md:gap-32 justify-between text-black text-sideheaderSm md:text-sideheaderMd">
                    <p>LUCAS</p>
                    <p>SOBCZAK</p>
                    <p>ABOUT</p>
                </div>
            </aside>
            <div className="grid grid-cols-4 grid-rows-1">
                <div className="hidden md:flex justify-self-start self-end items-end justify-end h-48 lg:h-56">
                    <img className="h-full" src="/images/technology.png" alt="microchip photo"></img>
                </div>
                <div className="flex flex-col gap-6 col-span-full md:col-start-3 md:col-span-2">
                    <p className="text-right font-sans font-semibold text-black text-sectionLabelSm md:text-sectionLabelMd lg:text-sectionLabelLg">
                        ABOUT
                    </p>
                    <p className="opacity-50 ml-auto text-bodySm md:text-bodyMd lg:text-bodyLg text-black font-serif">
                        I&apos;m a full-stack developer dedicated to crafting tech-driven solutions for our interconnected world. With a diverse background spanning industries such as kitchen management, luxury retail sales, and retail buying at Canada&apos;s largest bookstores, I bring a unique perspective to problem-solving. As a lifelong learner, I embrace new technologies and industry trends to continuously enhance my expertise. I&apos;m excited to collaborate with fellow enthusiasts and aim to create innovative solutions that address real-world challenges.
                    </p>
                </div>
            </div>
            <div className="text-black grid grid-rows-[2fr, 1fr] grid-cols-4">
                <div className="col-span-full md:col-span-2">
                    <p className="font-sans font-semibold mb-6 text-sectionLabelSm md:text-sectionLabelMd lg:text-sectionLabelLg">
                        {'{SKILLS}'}
                    </p>
                    <div className="grid grid-cols-3 grid-rows-4 gap-y-2 mb-8">
                        {skills.map((skill, key) => (
                            <p
                                key={key}
                                className="font-serif text-bodySm md:text-bodyMd lg:text-bodyLg"
                            >
                                {skill}
                            </p>
                        ))
                        }
                    </div>
                </div>
                <div className="row-start-2 col-span-full md:col-span-2">
                    <SocialLinks />
                </div>
            </div>
        </section >
    );
}

