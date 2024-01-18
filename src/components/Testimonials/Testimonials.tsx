import { useState, useEffect, useCallback } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton } from './CarouselBtns'

const Testimonials = () => {

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
    <div className='bg-[#060f17]'>

      <div className="embla bg-gray-900 testimonial-bg ">
        <div className="embla__viewport my-[120px]" ref={emblaRef}>

          <div className=' flex-col gap-4 flex items-center justify-center py-10'>
            <h6 className='text-white  text-6xl font-semibold'>Testimonials</h6>
            <p className='h-1 w-20 bg-[#00acc1]'></p>
          </div>

          <div className="embla__container">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 11, 11, 1, 1, 1, 1].map(() => (
              <div className="cursor-pointer p-[16px] text-white mr-[25px]   shadow flex flex-col justify-between embla__slide  w-[260px] bg-slate-100">

                <img src='./img/MODEL.jpg' className='h-[160px]' />

                <p className="text-[16px] py-4">They worked around time zone variations to accomodate my schedule</p>
                <h6 className=" font-semibold">Pranjal Deep</h6>

                <div className=' flex items-center justify-between'>
                  <span className=" font-light">Business Owner</span>
                  <div className='flex items-center gap-1'>

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
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="embla__buttons">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>


      </div>
    </div>
  )
}

export default Testimonials