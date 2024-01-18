
const HeroSection = () => {
    return (
        <>
            <picture>
                {/* WebP format for modern browsers */}
                <source srcSet="./img/heropro.webp" type="image/webp" className='h-[100vh]' />
                {/* Fallback image in standard format */}
                <img src="./img/hero.png" alt="Description of the image" className='h-[100vh]' />
            </picture>
        </>
    )
}

export default HeroSection