import PrimaryHeader from '@/components/PrimaryHeader'
import SecondaryHeader from '@/components/SecondaryHeader'
import Location from '@/components/Location'
import useCurrentTime from '@/utils/useCurrentTime';



export default function Home() {
    const currentTime = useCurrentTime();
    return (
        <div className="self-center box-border gap-8 grid grid-rows-[1fr, 2fr, 1fr] grid-cols-3 px-4 md:px-10 lg:px-16 pt-10 pb-24 bg-g1 font-sans text-black h-full">
            <div className='col-span-2'>
                <SecondaryHeader />
            </div>
            <div className='text-bodySm col-span-2'>
                <p>As a dedicated full stack developer, I specialize in crafting innovative tech solutions tailored to our interconnected world.</p>
            </div>
            <div className="flex flex-col justify-between text-black col-span-1 justify-self-end text-right">
                <p className='w-fit text-bodySm'>TORONTO,<br /> CANADA</p>
                <p className='w-fit ml-auto text-bodySm'>{currentTime}</p>
            </div>
            <div className='col-span-3 md:col-start-2 md:col-span-2 self-center justify-self-center md:justify-self-end md:self-end'>
                <img className="md:max-h-96 lg:max-h-[]" src='/images/headshot.png' alt='headshot' />
            </div>
            <div className='self-center col-span-3 md:col-span-1'>
                <PrimaryHeader />
            </div>
        </div >
    )
}

