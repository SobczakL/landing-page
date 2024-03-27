import SocialLinks from "@/components/SocialLinks";
import useCurrentTime from "../../utils/useCurrentTime"

export default function Contact() {
    const currentTime = useCurrentTime();
    return (
        <section className="bg-g5 h-full pt-12 px-4 md:px-10 lg:px-16 pb-16">
            <div className="h-full grid grid-cols-3 grid-rows-4 md:grid-rows-3 gap-y-4 md:gap-y-4 lg:gap-y-8">
                <div className="text-black text-headerSm md:text-headerMd text-right font-displayM font-extrabold col-span-full leading-none">
                    <p className="align-top mb-4">CONTACT</p>
                    <p className="align-top">INFO</p>
                </div>
                <div className="text-black col-span-1 row-start-3 self-center md:col-span-1 md:row-start-2 md:max-w-fit text-timeSm md:text-timeMd lg:text-timeLg">
                    <p>TORONTO, CANADA</p>
                    <p>{currentTime}</p>
                </div>
                <div className="text-black text-labelSm self-center md:text-labelMd lg:text-labelLg flex flex-col col-span-full md:row-start-2 md:col-start-2 gap-2">
                    <p>For any collaborative projects or inquiries feel free to reach out to me.</p>
                    <p>lucassobczak3@gmail.com</p>
                </div>
                <div className="row-start-4 col-span-full self-center text-black md:row-start-3 md:col-span-2">
                    <SocialLinks />
                </div>
                <div className="col-span-1 col-start-3 self-center row-start-3 justify-self-end">

                    <img src="/images/usb.png" alt="alt" className="w-full max-w-[325px]" />
                </div>
            </div>
        </section >
    )
}
