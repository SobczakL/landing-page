import PrimaryHeader from '@/components/PrimaryHeader'
import SecondaryHeader from '@/components/SecondaryHeader'
import Location from '@/components/Location'
import useCurrentTime from '@/utils/useCurrentTime';



export default function Home() {
    const currentTime = useCurrentTime();
    return (
        <div className="box-border grid grid-rows-[1fr, 2fr, 1fr] grid-cols-3 px-4 md:px-10 lg:px-16 pt-8 pb-24 bg-g1 font-sans text-black h-full">
            <div className='col-span-3 md:col-span-1'>
                <PrimaryHeader />
            </div>
            <div className='col-span-3 md:col-start-2 md:col-span-2 self-center justify-self-center'>
                <img className="" src='/images/headshot.png' alt='headshot' />
            </div>
            <div className='col-span-2'>
                <SecondaryHeader />
            </div>
            <div className="text-black justify-self-end">
                <p className='w-fit'>{currentTime}</p>
                <p className='w-fit'>TORONTO, ON,<br /> CANADA</p>
            </div>
        </div >
    )
}

