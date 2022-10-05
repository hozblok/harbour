import './InteractionDesignTitle.scss'

import { cn } from '@bem-react/classname'

import idIcon from '../../../assets/svgs/interaction-design.svg'

const block = cn('InteractionDesignTitle')

export function InteractionDesignTitle() {
  return (
    <div className={block()}>
      <div className={block('ImgContainer')}>
        <img
          className={block('Img')}
          src={idIcon}
          alt="Interaction Design Icon"
        />
      </div>
      <div className={block('Text')}>
        <h3>Interaction Design Apprenticeship</h3>
      </div>
    </div>
  )
}
