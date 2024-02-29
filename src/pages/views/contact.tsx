import SocialLinks from "@/components/SocialLinks";
import useCurrentTime from "../../utils/useCurrentTime"

export default function Contact() {
    const currentTime = useCurrentTime();
    return (
        <section className="bg-g5 h-full pt-12 px-4 md:px-10 lg:px-16">
            <div className="text-black text-headerSm md:text-headerMd text-right font-displayM font-extrabold">
                <p>CONTACT</p>
                <p>INFO</p>
            </div>
            <div className="text-black">
                <p>{currentTime}</p>
                <p>TORONTO, ON, CANADA</p>
            </div>
            <div className="text-black text-labelSm md:text-labelMd lg:text-labelLg">
                <p>For any collaborative projects or inquiries feel free to reach out to me.</p>
                <p>lucassobczak3@gmail.com</p>
            </div>
            <SocialLinks />
        </section >
    )
}
