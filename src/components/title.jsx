const Title = (prop) => {
    return (
        <p className={`text-center font-bold text-2xl text-${prop.color} md:text-${prop.mdColor}`}>
            {prop.name}
        </p>
    )
}

export default Title