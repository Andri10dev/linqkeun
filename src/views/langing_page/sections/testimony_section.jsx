'use client';
import { Carousel, IconButton } from "@material-tailwind/react";
import Img1 from '../../../assets/testimony/kang dimi.png'
import Img2 from '../../../assets/testimony/kang indra.png'
import Title from "../../../components/title";

const TestimonySection = () => {

    return (
        <div id="testimonySection" className="w-full h-screen bg-white pt-16 relative">
            {/* <div className="text-white md:text-black"> */}
            <Title name="Testimony" color="black" mdColor="black"></Title>
            {/* </div> */}


            <Carousel className="w-full h-[80%] z-10 mx-auto md:-mt-10 mt-10"

                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 left-4 -translate-y-2/4 !bg-black/30 hover:!bg-black/50 rounded-full "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" className="-ml-1 h-7 w-7"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg>
                    </IconButton>
                )
                }

                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 !right-4 -translate-y-2/4 !bg-black/30 hover:!bg-black/50 rounded-full "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" className="ml-1 h-7 w-7 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </IconButton>
                )}>
                <div className="w-full h-full aspect-video flex flex-col md:flex-row px-[20%] items-center space-x-5">
                    {/* <div className="h-[350px] aspect-potrait bg-blue-500 rounded-xl bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}> */}
                    {/* <Image src={Img} alt="Sample Folo" className="w-full aspect-potrait object-cover"></Image> */}
                    {/* </div> */}
                    <img src={Img1} alt="Sample Folo" className="w-[350px] aspect-square object-cover"></img>
                    <div className="w-full text-black font-semibold mt-5 md:mt-0">
                        <q>
                            Linqkeun has saved us a lot of time and money. It's easy to use and has all the features we need to run our business.
                        </q>
                        <p className="mt-5 font-semibold text-xl">Dimmy, CEO of Hanaang</p>
                    </div>
                </div>

                <div className="w-full h-full aspect-video flex flex-col md:flex-row px-[20%] items-center space-x-5">
                    {/* <div className="h-[350px] aspect-potrait bg-blue-500 rounded-xl bg-cover" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1670884522567-8a9114f4203e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}> */}
                    {/* <Image src={Img} alt="Sample Folo" className="w-full aspect-potrait object-cover"></Image> */}
                    {/* </div> */}
                    <img src={Img2} alt="Sample Folo" className="w-[350px] aspect-square object-cover"></img>
                    <div className="w-full text-black font-semibold mt-5 md:mt-0">
                        <q>We already 5 years be a partner our success company with Linqkeun</q>
                        <p className="mt-5 font-semibold text-xl">Indra, CEO of PT AMG</p>
                    </div>
                </div>
            </Carousel >

            <div className="w-[33%] h-[80%] hidden md:block bg-[#111827] absolute bottom-0 rounded-tr-3xl z-0">

            </div>
        </div >
    )
}

export default TestimonySection