import './DetailedInfo.scss'

import { useContext } from 'react'

import { cn } from '@bem-react/classname'

import zeptolab from '../../../assets/images/zeptolab.png'
import { MobileContext } from '../../../providers/mobile/MobileContext'
import Card from '../../Card/Card'

const block = cn('DetailedInfo')

export function DetailedInfo() {
  const { mobile } = useContext(MobileContext)
  return (
    <div className={block({ mobile })}>
      <div className={block('PoweredBy')}>
        <div>
          <img className={block('ZeptolabImg')} src={zeptolab} alt="zeptolab" />
        </div>
        <div className={block('PoweredByDescription')}>
          <div>
            <p className={block('PoweredByText')}>Powered by:</p>
          </div>
          <div>
            <p className={block('PoweredByName')}>
              <strong>Zeptolab</strong>
            </p>
          </div>
        </div>
      </div>

      <div>
        <Card className={block('FirstCard')}>
          <div className={block('CardSubTitle')}>Application closes in</div>
          <div className={block('CardText', {large: true})}>
            6 Day : 22 Hrs : 56 Min : 13 Seg
          </div>
        </Card>
        <Card className={block('SecondCard')}>
          <div>
            <div className={block('CardSubTitle')}>Location</div>
            <div className={block('CardText')}>Bangkok</div>
          </div>
          <div>
            <div className={block('CardSubTitle')}>Duration</div>
            <div className={block('CardText')}>1 Year</div>
            <div className={block('CardText')}>Full-Time</div>
          </div>
          <div>
            <div className={block('CardSubTitle')}>Start date</div>
            <div className={block('CardText')}>30 June 2020</div>
          </div>

          <div>
            <div className={block('CardSubTitle')}>End date</div>
            <div className={block('CardText')}>3 Aug 2020</div>
          </div>
        </Card>
      </div>
    </div>
  )
}
