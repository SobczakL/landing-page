import SecondaryHeader from '@/components/SecondaryHeader'
import useCurrentTime from '@/utils/useCurrentTime';

export default function Home() {
    const currentTime = useCurrentTime();
    return (
        <div className="self-center text-black box-border gap-8 grid grid-rows-[1fr, 2fr, 1fr] grid-cols-3 md:grid-cols-4 px-4 md:px-10 lg:px-16 pt-10 pb-16 bg-g1 h-full">
            <div className='w-fit col-span-2 lg:max-w-[370px] lg:col-span-1 lg:ml-auto'>
                <SecondaryHeader />
            </div>
            <div className='col-span-3 grid grid-cols-subgrid grid-rows-subgrid md:flex md:flex-col md:justify-self-center md:self-center md:gap-8 md:col-span-2 md:row-start-2 md:max-w-96 lg:max-w-[425px] lg:pl-[10%] text-bodySm md:text-bodyMd lg:text-bodyLg'>
                <div className='col-span-2'>
                    <p className='md:text-center'>Developer / Solution-Driven / Entreprenurial Spirit / Life-long Learner Diving Deeper Into Base-Level Programming. </p>
                </div>
                <div className="flex flex-col justify-self-end md:justify-self-auto md:self-center md:text-center">
                    <p className='w-fit text-timeSm md:text-timeMd lg:text-timeLg'>TORONTO,<br /> CANADA</p>
                    <p className='w-fit md:w-full text-timeSm md:text-timeMd lg:text-timeLg'>{currentTime}</p>
                </div>
            </div>
            <div className='col-span-3 self-center justify-self-center md:row-start-2 md:col-start-3 md:col-span-2 lg:pr-[10%]'>
                <img className="md:max-h-96 lg:max-h-[425px]" src='/images/headshot.png' alt='headshot' />
            </div>
        </div >
    )
}

