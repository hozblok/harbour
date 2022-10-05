import './CarouselContainer.scss'

import { useContext } from 'react'
import Flickity from 'react-flickity-component'

import { cn } from '@bem-react/classname'

import { MobileContext } from '../../providers/mobile/MobileContext'
import CarouselCard from '../CarouselCard/CarouselCard'

const block = cn('CarouselContainer')

export interface ICarouselContainer {
  initialIndex?: number
}

export default function CarouselContainer(props: ICarouselContainer) {
  const { mobile } = useContext(MobileContext)

  return (
    <Flickity
      options={{
        initialIndex: props.initialIndex,
        pageDots: false,
      }}
      className={block()}
    >
      <div className={block('SideCar', { mobile })}>
        <CarouselCard />
      </div>
      <div className={block('SideCar', { mobile })}>
        <CarouselCard />
      </div>
      <div className={block('SideCar', { mobile })}>
        <CarouselCard />
      </div>
      <div className={block('SideCar', { mobile })}>
        <CarouselCard />
      </div>
    </Flickity>
  )
}
