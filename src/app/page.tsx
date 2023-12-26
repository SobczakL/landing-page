import PrimaryHeader from '@/components/PrimaryHeader'
import SecondaryHeader from '@/components/SecondaryHeader'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="px-4 bg-g1">
            <PrimaryHeader/>
            <SecondaryHeader/>
    </div>
  )
}
