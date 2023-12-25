import { BadgeType } from "@/types/types"

export default function Badge({ text }: {text: BadgeType }){    
    return(
        <div className="px-4 py-0.25 rounded-full border-black border">
            <p>{text}</p>
        </div>
    )
}
