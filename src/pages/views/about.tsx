export default function About() {
    return (
        <section className="bg-g2 h-full px-4 md:px-10 overflow-hidden relative">
            <p
                style={{
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'bottom left',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    bottom: '50%',
                    right: '50%',
                }}
                className="text-black text-sideheaderSm md:text-sideheaderMd lg:text-sideheaderLg">
                LUCAS SOBCZAK ABOUT
            </p>
            <div className="py-6 pl-12">
                <p className="text-right font-semibold text-black text-sectionLabelSm md:text-sectionLabelMd lg:text-sectionLabelLg">
                    ABOUT
                </p>
                <p className="opacity-50 text-bodySm md:text-bodyMd lg:text-bodyLg text-black font-serif">
                    I'm a full-stack developer dedicated to crafting tech-driven solutions for our interconnected world. With a diverse background spanning industries such as kitchen management, luxury retail sales, and retail buying at Canada's largest bookstores, I bring a unique perspective to problem-solving. As a lifelong learner, I embrace new technologies and industry trends to continuously enhance my expertise. I'm excited to collaborate with fellow enthusiasts and aim to create innovative solutions that address real-world challenges.
                </p>
            </div>
        </section>
    );
}

