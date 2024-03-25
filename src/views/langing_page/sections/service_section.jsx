import Service from '../../../assets/images/service.jpg'
import Title from '../../../components/title'

const ServiceSection = () => {
    return (
        <div id="serviceSection" className="w-full h-fit md:h-screen bg-white pt-16">
            <Title name="Our Service" color="black"></Title>
            <img src={Service} alt="Linqkeun Service" className="h-[85%] aspect-video object-contain my-10 mx-auto"></img>
        </div>
    )
}

export default ServiceSection