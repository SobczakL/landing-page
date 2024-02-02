export default function Projects() {
    return (
        <section className="relative bg-g3 h-full">
            <p
                style={{ wordWrap: 'break-word' }}
                className="absolute -z-0 text-black opacity-5 text-center font-extrabold align-top leading-tight lg:leading-none tracking-tighter max-h-full max-w-full text-projectBgSm md:text-projectBgMd lg:text-projectBgLg">
                PROJECTS
            </p>
            <div className="max-w-[90%] border border-t-black mx-auto mt-24 px-4 md:px-10 lg:px-16">
                <div className="flex bg-none text-labelSm md:text-labelMd lg:text-labelLg text-black">
                    <div className="w-1/2 py-2">
                        <p>Project</p>
                    </div>
                    <div className="w-1/2 py-2 border border-l-black pl-2">
                        <p>Description</p>
                    </div>
                </div>
                <ul>
                    <li></li>
                </ul>
            </div>

        </section>

    )
}
