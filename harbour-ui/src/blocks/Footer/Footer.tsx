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
        <p>Zeptolab</p>
        <p>Marketing Performance</p>
      </div>
      <div>
        <p>Location</p>
        <p>Bangkok</p>
      </div>
      <div>
        <p>Duration</p>
        <p>1 Year Full-Time</p>
      </div>
      <div>
        <p>Start Date</p>
        <p>3 Aug 2020</p>
      </div>
      <div>
        <p>Application Deadline</p>
        <p>30 June 2020</p>
      </div>
      <div>
        <p>Application closes in</p>
        <p>6 Day : 22 hours : 56 Min</p>
      </div>
    </div>
  )
}
