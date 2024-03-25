import AboutImage from '../../../assets/images/about-img.jpg'
import Title from '../../../components/title'

const AboutUs = () => {
    return (
        <div id="aboutUs" className="w-full bg-custom-blue py-16 -mt-2">
            <Title name="About Us" color="white"></Title>
            <div className="flex flex-col md:flex-row items-center mt-10 px-5 md:px-0">
                <div className="md:w-1/2 md:pl-10">
                    <image src={AboutImage} alt="linqkeun - about image" className="w-[90%] md:w-[70%] aspect-video rounded-2xl mx-auto" />
                </div>
                <div className=" md:w-1/2 md:pr-10 mt-5 md:mt-0">
                    <p className="text-justify text-white text-sm">
                    Linqkeun is a mini ERP that is designed specifically for small businesses. It is everything you need to run your business more efficiently and effectively, all in one place
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs