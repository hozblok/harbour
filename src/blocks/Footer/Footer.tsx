import './Footer.scss'

import { useContext } from 'react'

import { cn } from '@bem-react/classname'

import { MobileContext } from '../../providers/mobile/MobileContext'

const block = cn('Footer')

export default function Footer() {
  const { mobile } = useContext(MobileContext)

  return (
    <div className={block({ mobile })}>
      <div>
        <div className={block('Title')}>Zeptolab</div>
        <div className={block('Content')}>Marketing Performance</div>
      </div>
      <div>
        <div className={block('Title')}>Location</div>
        <div className={block('Content')}>Bangkok</div>
      </div>
      <div>
        <div className={block('Title')}>Duration</div>
        <div className={block('Content')}>1 Year Full-Time</div>
      </div>
      <div>
        <div className={block('Title')}>Start Date</div>
        <div className={block('Content')}>3 Aug 2020</div>
      </div>
      <div>
        <div className={block('Title')}>Application Deadline</div>
        <div className={block('Content')}>30 June 2020</div>
      </div>
      <div>
        <div className={block('Title')}>Application closes in</div>
        <div className={block('Content')}>6 Day : 22 hours : 56 Min</div>
      </div>
    </div>
  )
}
