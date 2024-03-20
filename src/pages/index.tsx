import PrimaryHeader from '@/components/PrimaryHeader'
import SecondaryHeader from '@/components/SecondaryHeader'
import Location from '@/components/Location'
import useCurrentTime from '@/utils/useCurrentTime';



export default function Home() {
    const currentTime = useCurrentTime();
    return (
        <div className="self-center box-border gap-8 grid grid-rows-[1fr, 2fr, 1fr] grid-cols-3 lg:grid-cols-2 lg:gap-x-24 px-4 md:px-10 lg:px-16 pt-10 pb-16 bg-g1 font-sans text-black h-full">
            <div className='col-span-2 lg:col-span-1 lg:ml-[50%]'>
                <SecondaryHeader />
            </div>
            <div className='text-bodySm md:text-bodyMd lg:text-bodyLg col-span-2 self-center md:col-span-1 md:row-start-2 md:self-end lg:ml-[50%]'>
                <p>Developer / Solution-Driven / Entreprenurial Spirit / Life-long Learner Diving Deeper Into Base-Level Programming. </p>
            </div>
            <div className="flex flex-col justify-between text-black col-span-1 justify-self-end text-right md:row-start-3 md:justify-self-start md:justify-center md:self-start md:text-left lg:justify-self-end lg:mr-[39%]">
                <p className='w-fit text-bodySm md:text-bodyMd lg:text-bodyLg'>TORONTO,<br /> CANADA</p>
                <p className='w-fit ml-auto text-bodySm md:ml-0'>{currentTime}</p>
            </div>
            <div className='col-span-3 self-center justify-self-center md:col-start-2 md:col-span-2 md:row-span-2 md:justify-self-end md:self-end md:self-center lg:col-start-2 lg:col-span-1 lg:row-start-2'>
                <img className="md:max-h-96 lg:max-h-[450px]" src='/images/headshot.png' alt='headshot' />
            </div>
            <div className='self-center col-span-3 md:col-span-1'>
            </div>
        </div >
    )
}

