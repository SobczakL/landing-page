import PrimaryHeader from '@/components/PrimaryHeader'
import SecondaryHeader from '@/components/SecondaryHeader'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-full px-4 bg-g1 mt-20 text-black">
            <PrimaryHeader/>
            <SecondaryHeader/>
    </div>
  )
}
