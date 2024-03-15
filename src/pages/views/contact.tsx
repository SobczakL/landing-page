import SocialLinks from "@/components/SocialLinks";
import useCurrentTime from "../../utils/useCurrentTime"

export default function Contact() {
    const currentTime = useCurrentTime();
    return (
        <section className="bg-g5 h-full pt-12 px-4 md:px-10 lg:px-16">
            <div className="grid grid-cols-3 grid-rows-3 gap-y-4 md:gap-y-4 lg:gap-y-8">
                <div className="text-black text-headerSm md:text-headerMd text-right font-displayM font-extrabold col-span-full">
                    <p>CONTACT</p>
                    <p>INFO</p>
                </div>
                <div className="text-black col-span-2 md:col-span-1 md:row-start-2 md:max-w-fit">
                    <p>{currentTime}</p>
                    <p>TORONTO, ON, CANADA</p>
                </div>
                <div className="text-black text-labelSm md:text-labelMd lg:text-labelLg flex flex-col col-span-2 md:row-start-2 md:col-start-2 gap-2">
                    <p>For any collaborative projects or inquiries feel free to reach out to me.</p>
                    <p>lucassobczak3@gmail.com</p>
                </div>
                <div className="col-span-1 text-black">
                    <SocialLinks />
                </div>
                <div className="col-span-1 col-start-3 row-start-3 ml-auto lg:ml-0">

                    <img src="/images/usb.png" alt="alt" className="w-full max-w-[350px]" />
                </div>
            </div>
        </section >
    )
}
