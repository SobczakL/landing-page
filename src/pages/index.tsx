import PrimaryHeader from '@/components/PrimaryHeader'
import SecondaryHeader from '@/components/SecondaryHeader'
import Location from '@/components/Location'

export default function Home() {
    return (
        <div className="flex flex-col justify-around px-4 md:px-10 lg:px-16 py-16 bg-g1 text-black h-full">
            <PrimaryHeader />
            <Location />
            <SecondaryHeader />
        </div>
    )
}

