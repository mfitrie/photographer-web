'use client'

import type { EmblaOptionsType } from 'embla-carousel'
import { MotionCarousel } from '@/components/ui/motion-carousel'



const Images: { image: string; alt: string }[] = Array(9)
  .fill(0)
  .map((_, index) => ({
    image: `/carousel/${index + 1}.jpg`,
    alt: `image ${index + 1}`,
  }));

const CarouselScale = () => {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDES = Array.from(Array(Images.length).keys())

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <MotionCarousel slides={SLIDES} options={OPTIONS} images={Images.map(img => img.image)} />
    </div>
  )
}

export default CarouselScale
