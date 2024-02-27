export default function Contact() {
    return (
        <section className="bg-g5 h-full">
            <div>
                <p className="text-black text-sectionLabelSm md:text-sectionLabelMd lg:text-sectionLabelLg">CONTACT</p>
                <form className="flex flex-col text-black text-bodySm md:text-bodyMd lg:text-bodyLg">
                    <div className="flex gap-4 border border-b-black">
                        <label for="name" className="">Name *</label>
                        <input id="name" type="text" className="bg-transparent cursor-text w-full py-0"></input><br />
                    </div>
                    <div className="flex gap-4 border border-b-black">
                        <label for="email">Email *</label>
                        <input id="email" type="email" className="bg-transparent cursor-text w-full py-0"></input><br />
                    </div>
                    <div className="flex gap-4 border border-b-black">
                        <label for="msg">Message *</label><br />
                        <textarea id="msg" type="text" className="bg-transparent cursor-text w-full py-0"></textarea><br />
                    </div>
                    <button className="bg-g4 rounded-lg py-1 px-4 max-w-fit">Send Message</button>
                </form>

            </div>

        </section >
    )
}
