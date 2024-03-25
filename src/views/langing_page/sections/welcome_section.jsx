import Waves from '../../../assets/images/waves.svg'
import Kaos from '../../../assets/images/kaos.png'
import DocLinqkeun from '../../../assets/images/doc linqkeun.png'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const WelcomeSection = () => {
    return (
        <div id='welcomeSection' className="w-full h-fit md:h-screen relative">
            <motion.div
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img src={Waves} alt='linqkeun-wave' className='hidden md:block w-full h-[150px] md:h-[200px] object-cover object-bottom'></img>
            </motion.div>
            <img src={Waves} alt='linqkeun-wave' className='absolute bottom-0 rotate-180 w-full sm:h-[100px] lg:h-52 object-cover object-bottom'></img>
            <div className='w-full px-5 md:px-10 flex flex-col md:flex-row pt-24 md:pt-0'>
                <div className='md:w-1/2 pl-5 md:pl-10'>
                    <motion.h1
                        initial={{ x: -200, scale:0 }}
                        whileInView={{ x: 0, scale:1 }}
                        transition={{ duration: 0.8 }}
                        className='text-custom-blue font-bold text-5xl'>
                        Linqkeun
                    </motion.h1>
                    <motion.p
                        initial={{ scale:0 }}
                        whileInView={{ scale:1.0 }}
                        transition={{ delay:0.5, duration: 0.8 }}
                        className='text-black'>Connecting Your Business</motion.p>
                    <p className='mt-5 text-sm mb-5 text-black'>
                        The Mini ERP for Small Businesses <br></br>
                        Affordable, easy-to-use, and all-in-one software to manage your finances, operations, and customers.
                    </p>
                    <p className='mb-5 text-black'>
                        Sign up for a free trial of Linqkeun today!
                    </p>
                    <Link href="/" className='px-5 py-2 rounded-md text-white bg-custom-blue font-semibold'>
                        Try Now
                    </Link>
                </div>
                <div className='md:w-1/2 flex flex-col justify-end items-center md:items-end pb-[100px] md:pb-0'>
                    <img src={DocLinqkeun} alt='linqkeun - merchandise' className='h-[250px] aspect-video object-contain md:-mt-5 md:pl-32'></img>
                    <img src={Kaos} alt='linqkeun - merchandise' className='w-[200px] aspect-square object-contain self-center md:mr-24 md:-mt-16'></img>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection