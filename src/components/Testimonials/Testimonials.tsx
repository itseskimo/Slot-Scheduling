import { useState, useEffect, useCallback } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton } from './CarouselBtns'

const Testimonials = () => {

  const reviewsData = [
    {
      location: './img/MODEL.jpg',
      name: 'Will Smith',
      occupation: 'Actor',
      experience: 'FixHealth has been a game-changer for me. The personalized care plans and expert advice have truly transformed my health journey.'
    },
    {
      location: './img/host6.jpg',
      name: 'Emma Watson',
      occupation: 'Actress',
      experience: 'I stumbled upon FixHealth, and it turned out to be a hidden gem! The platform is user-friendly, and their team of professionals is top-notch.'
    },
    {
      location: './img/host5.webp',
      name: 'Chris Hemsworth',
      occupation: 'Actor',
      experience: 'FixHealth is my go-to health partner! From nutritional guidance to fitness plans, I feel like I have a dedicated team supporting my health goals.'
    },
    {
      location: './img/host4.jpg',
      name: 'Jennifer Lopez',
      occupation: 'Singer',
      experience: 'FixHealth has exceeded my expectations! The professional and compassionate team truly cares about their clients. I highly recommend FixHealth to anyone looking for a comprehensive and reliable health solution.'
    },
    {
      location: './img/host3.jpg',
      name: 'Tom Hanks',
      occupation: 'Actor',
      experience: `As someone who values simplicity, FixHealth's easy-to-use platform and effective health solutions have been a perfect fit for my lifestyle.`
    },
    {
      location: './img/host2.jpg',
      name: 'Taylor Swift',
      occupation: 'Singer',
      experience: `FixHealth's holistic approach to well-being has made a positive impact on both my physical and mental health. A great choice for those seeking comprehensive care.`
    },
    {
      location: './img/host1.jpg',
      name: 'Leonardo DiCaprio',
      occupation: 'Actor',
      experience: `FixHealth's commitment to preventive care is commendable. The small steps suggested by their experts have led to significant improvements in my overall health.`
    },
    // Add more reviews as needed
  ];







  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )



  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <>
      <section className='bg-[#060f17]'>
        <div className='testimonial-bg relative h-[150px] w-full bg-gray-900'> </div>
      </section>


      <section className='bg-gray-900'>

        <div className=' flex-col gap-3 flex items-center justify-center pb-10'>
          <h6 className='text-white  text-6xl font-semibold'>Testimonials</h6>
          <p className='h-1 w-20 bg-[#00acc1] rounded-md'></p>
        </div>

        <div className="embla" >

          <div className="embla__viewport " ref={emblaRef}>

            <div className="embla__container ">
              {reviewsData.map((review,idx) => (
                <div key={idx}
                  className="cursor-pointer p-[16px] text-white mr-[25px] shadow flex flex-col items-center  embla__slide  w-[320px] bg-[#060f17] rounded-3xl">

                  <img src={review.location} className='h-[200px] w-full rounded-3xl object-cover object-center' />


                  <ul className='py-2 flex flex-col items-center'>
                    <li className=" font-semibold text-xl">{review.name}</li>
                    <li className=" font-light text-sm">{review.occupation}</li>
                  </ul>


                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00acc1" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  <p className="text-[16px] py-2 text-center">{`${review.experience.substring(0,80)}...`}</p>
                  <div className='flex items-center gap-1 py-4'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                      <path d="M6.97265 1.29596L7.93607 3.3293C8.09397 3.66217 8.39885 3.89287 8.75164 3.9463L10.9062 4.27241C11.7945 4.40682 12.1492 5.54363 11.5064 6.19622L9.94684 7.77873C9.69163 8.03788 9.57517 8.41127 9.63539 8.77721L10.0034 11.012C10.1553 11.9334 9.22654 12.6359 8.43226 12.201L6.50514 11.1465C6.18962 10.9737 5.81262 10.9737 5.49708 11.1465L3.56996 12.2017C2.77568 12.6366 1.84691 11.9333 1.99882 11.0127L2.36682 8.77791C2.42733 8.41176 2.31077 8.03809 2.05538 7.77874L0.496258 6.19605C-0.146613 5.54345 0.208133 4.40664 1.09642 4.27223L3.25098 3.94612C3.60376 3.89268 3.90864 3.66197 4.06655 3.32912L5.02957 1.29598C5.42729 0.457347 6.57495 0.457319 6.97265 1.29596Z" fill="#FFA500" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                      <path d="M6.97265 1.29596L7.93607 3.3293C8.09397 3.66217 8.39885 3.89287 8.75164 3.9463L10.9062 4.27241C11.7945 4.40682 12.1492 5.54363 11.5064 6.19622L9.94684 7.77873C9.69163 8.03788 9.57517 8.41127 9.63539 8.77721L10.0034 11.012C10.1553 11.9334 9.22654 12.6359 8.43226 12.201L6.50514 11.1465C6.18962 10.9737 5.81262 10.9737 5.49708 11.1465L3.56996 12.2017C2.77568 12.6366 1.84691 11.9333 1.99882 11.0127L2.36682 8.77791C2.42733 8.41176 2.31077 8.03809 2.05538 7.77874L0.496258 6.19605C-0.146613 5.54345 0.208133 4.40664 1.09642 4.27223L3.25098 3.94612C3.60376 3.89268 3.90864 3.66197 4.06655 3.32912L5.02957 1.29598C5.42729 0.457347 6.57495 0.457319 6.97265 1.29596Z" fill="#FFA500" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                      <path d="M6.97265 1.29596L7.93607 3.3293C8.09397 3.66217 8.39885 3.89287 8.75164 3.9463L10.9062 4.27241C11.7945 4.40682 12.1492 5.54363 11.5064 6.19622L9.94684 7.77873C9.69163 8.03788 9.57517 8.41127 9.63539 8.77721L10.0034 11.012C10.1553 11.9334 9.22654 12.6359 8.43226 12.201L6.50514 11.1465C6.18962 10.9737 5.81262 10.9737 5.49708 11.1465L3.56996 12.2017C2.77568 12.6366 1.84691 11.9333 1.99882 11.0127L2.36682 8.77791C2.42733 8.41176 2.31077 8.03809 2.05538 7.77874L0.496258 6.19605C-0.146613 5.54345 0.208133 4.40664 1.09642 4.27223L3.25098 3.94612C3.60376 3.89268 3.90864 3.66197 4.06655 3.32912L5.02957 1.29598C5.42729 0.457347 6.57495 0.457319 6.97265 1.29596Z" fill="#FFA500" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                      <path d="M6.97265 1.29596L7.93607 3.3293C8.09397 3.66217 8.39885 3.89287 8.75164 3.9463L10.9062 4.27241C11.7945 4.40682 12.1492 5.54363 11.5064 6.19622L9.94684 7.77873C9.69163 8.03788 9.57517 8.41127 9.63539 8.77721L10.0034 11.012C10.1553 11.9334 9.22654 12.6359 8.43226 12.201L6.50514 11.1465C6.18962 10.9737 5.81262 10.9737 5.49708 11.1465L3.56996 12.2017C2.77568 12.6366 1.84691 11.9333 1.99882 11.0127L2.36682 8.77791C2.42733 8.41176 2.31077 8.03809 2.05538 7.77874L0.496258 6.19605C-0.146613 5.54345 0.208133 4.40664 1.09642 4.27223L3.25098 3.94612C3.60376 3.89268 3.90864 3.66197 4.06655 3.32912L5.02957 1.29598C5.42729 0.457347 6.57495 0.457319 6.97265 1.29596Z" fill="#FFA500" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                      <path d="M6.97265 1.29596L7.93607 3.3293C8.09397 3.66217 8.39885 3.89287 8.75164 3.9463L10.9062 4.27241C11.7945 4.40682 12.1492 5.54363 11.5064 6.19622L9.94684 7.77873C9.69163 8.03788 9.57517 8.41127 9.63539 8.77721L10.0034 11.012C10.1553 11.9334 9.22654 12.6359 8.43226 12.201L6.50514 11.1465C6.18962 10.9737 5.81262 10.9737 5.49708 11.1465L3.56996 12.2017C2.77568 12.6366 1.84691 11.9333 1.99882 11.0127L2.36682 8.77791C2.42733 8.41176 2.31077 8.03809 2.05538 7.77874L0.496258 6.19605C-0.146613 5.54345 0.208133 4.40664 1.09642 4.27223L3.25098 3.94612C3.60376 3.89268 3.90864 3.66197 4.06655 3.32912L5.02957 1.29598C5.42729 0.457347 6.57495 0.457319 6.97265 1.29596Z" fill="#5C5F5F" />
                    </svg>

                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00acc1" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" /></svg>



                </div>
              ))}
            </div>
          </div>

          <div className="embla__buttons">
            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
          </div>


        </div>
      </section>
    </>
  )
}

export default Testimonials