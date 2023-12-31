import PrimaryHeader from '@/components/PrimaryHeader'
import SecondaryHeader from '@/components/SecondaryHeader'
import Location from '@/components/Location'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col px-4 bg-g1 text-black">
        <PrimaryHeader/>
        <Location />
        <SecondaryHeader/>
    </div>
  )
}
