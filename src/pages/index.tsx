import PrimaryHeader from '@/components/PrimaryHeader'
import SecondaryHeader from '@/components/SecondaryHeader'
import Location from '@/components/Location'

export default function Home() {
    return (
        <div className="flex flex-col justify-between px-4 md:px-10 bg-g1 text-black">
            <PrimaryHeader />
            <Location />
            <SecondaryHeader />
        </div>
    )
}

