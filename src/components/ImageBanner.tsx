import BannerImage from '../assets/BannerImage.jpeg'

const ImageBanner = () =>{
    return(
        <div className='mb-10 mt-20'>
            <div>
                <img src={`${BannerImage}`} alt="" className='w-full md:h-[600px]'/>
            </div>
        </div>
    )
}

export default ImageBanner