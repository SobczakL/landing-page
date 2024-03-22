import SecondaryHeader from '@/components/SecondaryHeader'
import useCurrentTime from '@/utils/useCurrentTime';

export default function Home() {
    const currentTime = useCurrentTime();
    return (
        <div className="self-center box-border gap-8 grid grid-rows-[1fr, 2fr, 1fr] grid-cols-3 lg:grid-cols-2 lg:gap-x-24 px-4 md:px-10 lg:px-16 pt-10 pb-16 bg-g1 font-sans text-black h-full">
            <div className='w-fit col-span-2 lg:max-w-[370px] lg:col-span-1 lg:ml-auto'>
                <SecondaryHeader />
            </div>
            <div className='col-span-3 grid grid-cols-subgrid grid-rows-subgrid text-bodySm md:text-bodyMd lg:text-bodyLg'>
                <div className='col-span-2'>
                    <p>Developer / Solution-Driven / Entreprenurial Spirit / Life-long Learner Diving Deeper Into Base-Level Programming. </p>
                </div>
                <div className="flex flex-col">
                    <p className='w-fit'>TORONTO,<br /> CANADA</p>
                    <p className='w-fit'>{currentTime}</p>
                </div>
            </div>
            <div className='col-span-3 self-center justify-self-center md:col-start-2 md:col-span-2 md:row-span-2 md:justify-self-end md:self-center lg:justify-self-start lg:col-start-2 lg:col-span-1 lg:row-start-2'>
                <img className="md:max-h-96 lg:max-h-[425px]" src='/images/headshot.png' alt='headshot' />
            </div>
        </div >
    )
}

