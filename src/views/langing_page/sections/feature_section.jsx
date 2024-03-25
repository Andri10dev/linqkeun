import Feature from '../../../assets/images/feeature.png'
import Title from '../../../components/title'

const FeatureSection = () => {
    return (
        <div id="featureSection" className="h-screen w-full bg-custom-blue pt-16 relative">
            <Title name="Feature" color="white"></Title>
            <div className="flex items-center justify-center absolute bottom-0 w-full h-[85%] md:h-[80%] text-white text-xs md:text-base">
                <button
                    className="h-32 aspect-square rounded-full bg-red-500 absolute top-0 md:top-16 lg:top-0 text-center hover:scale-105 transition-all duration-300">
                    Sales & Marketing

                </button>
                <button
                    className="h-32 aspect-square rounded-full bg-red-500 absolute top-[20%] right-2 md:top-[15%] md:right-[15%] lg:right-[25%] text-center">
                    Inventory management
                </button>
                <button className='h-32 aspect-square rounded-full bg-red-500 absolute p-3 bottom-[35%] right-8 md:bottom-[45%] lg:bottom-[25%] md:right-[20%] text-center transition-all duration-300'>
                    Financial management
                </button>
                <button className="h-32 aspect-square rounded-full bg-red-500 absolute bottom-[35%] left-8 md:bottom-[45%] lg:bottom-[25%] md:left-[20%] text-center">
                    Human resources management
                </button>
                <button className="h-32 aspect-square rounded-full bg-red-500 absolute top-[20%] left-2 md:top-[15%] md:left-[15%] lg:left-[25%] text-center p-2">
                    Customer relationship management
                </button>
                {/* <button className="h-32 aspect-square rounded-full bg-red-500 absolute top-[20%] left-3 md:top-[15%] md:left-[25%] text-center ">
                    Customer relationship management
                </button> */}
                <img src={Feature} alt="Linqkeun Feature" className="absolute bottom-10 md:bottom-24 lg:bottom-0 w-4/5 md:w-[80%] lg:w-1/3 aspect-video object-contain"></img>
            </div>
        </div>
    )
}

export default FeatureSection

// ales and marketing:
//     Track your sales
//     Manage leads
//     Track marketing campaigns
// Customer relationship management:
//     Organize customer data
//     Track customer interactions
// Inventory management:
//     Track inventory levels
//     Manage orders
// Financial management:
//     Track expenses
//     Track income
//     Track taxes
// Human resources management:
//     Manage employee timesheets
//     Manage payroll