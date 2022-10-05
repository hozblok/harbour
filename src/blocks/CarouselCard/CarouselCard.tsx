import './CarouselCard.scss'

import { cn } from '@bem-react/classname'

import irene from '../../assets/images/irene.png'
import linkedin from '../../assets/svgs/linkedin.svg'

const block = cn('CarouselCard')

export default function CarouselCard() {
  return (
    <div className={block()}>
      <span className={block('Header')}>
        <span className={block('Person')}>
          <img src={irene} alt="Person" />
          <div>
            <div>Irene Pereyra</div>
            <div>Interaction Design Fellow ‘19</div>
          </div>
        </span>

        <img src={linkedin} alt="Linkedin" />
      </span>

      <div className={block('ContentContainer')}>
        <div className={block('Content')}>
          This Fellowship was a turning point in my career. I wouldn’t be where
          I am today without the financial support and experienced offered
          through the program.{' '}
        </div>
        <div className={block('ContentFooter')}>
          Education · B.A. Visual Design
        </div>
      </div>
    </div>
  )
}
