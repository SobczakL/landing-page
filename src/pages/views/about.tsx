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

const skillsText = '{SKILLS}'

export default function About() {
    return (
        <section className="bg-g2 h-full flex flex-col justify-around pb-32 pt-12 px-4 md:px-10 lg:px-16 pl-14 md:pl-16 relative box-border">
            <aside className="absolute transform -rotate-90 origin-top-right -translate-x-[104%] top-0 left-0">
                <div className="flex w-full gap-48 md:gap-16 justify-between text-black text-sideheaderSm md:text-sideheaderMd lg:text-sideheaderLg">
                    <p>LUCAS</p>
                    <p>SOBCZAK</p>
                    <p>ABOUT</p>
                </div>
            </aside>
            <div className="md:ml-auto md:max-w-[60%]">
                <div className="hidden md:flex md:float-right items-end justify-end h-48 lg:h-56 ml-4">
                    <img className="h-full" src="/images/technology.png" alt="microchip photo"></img>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-right font-semibold text-black text-sectionLabelSm md:text-sectionLabelMd lg:text-sectionLabelLg">
                        ABOUT
                    </p>
                    <p className="opacity-50 ml-auto text-bodySm md:text-bodyMd lg:text-bodyLg text-black font-serif">
                        I'm a full-stack developer dedicated to crafting tech-driven solutions for our interconnected world. With a diverse background spanning industries such as kitchen management, luxury retail sales, and retail buying at Canada's largest bookstores, I bring a unique perspective to problem-solving. As a lifelong learner, I embrace new technologies and industry trends to continuously enhance my expertise. I'm excited to collaborate with fellow enthusiasts and aim to create innovative solutions that address real-world challenges.
                    </p>
                </div>
            </div>
            <div className="text-black flex flex-col gap-4 mr-auto w-[80%] md:max-w-[40%]">
                <p className="font-semibold text-sectionLabelSm md:text-sectionLabelMd lg:text-sectionLabelLg">
                    {skillsText}
                </p>
                <div className="grid grid-cols-3 grid-rows-3 gap-y-2">
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
                <ul className="grid grid-cols-3 font-serif text-bodySm md:text-bodyMd lg:text-bodyLg mt-16">
                    <a href="https://www.linkedin.com/in/lucassobczak/" className="no-underline cursor-pointer hover:underline"><li>LinkedIn</li></a>
                    <a href="https://github.com/SobczakL" className="no-underline cursor-pointer hover:underline"><li>GitHub</li></a>
                    <a href="https://twitter.com/lucass_matthews" className="no-underline cursor-pointer hover:underline"><li>Twitter</li></a>
                </ul>
            </div>
        </section >
    );
}

