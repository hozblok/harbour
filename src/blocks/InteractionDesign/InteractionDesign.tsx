import './InteractionDesign.scss'

import { useContext } from 'react'

import { cn } from '@bem-react/classname'

import { MobileContext } from '../../providers/mobile/MobileContext'
import { ApplyBlock } from './ApplyBlock/ApplyBlock'
import { DetailedInfo } from './DetailedInfo/DetailedInfo'
import { InteractionDesignTitle } from './InteractionDesignTitle/InteractionDesignTitle'

const block = cn('InteractionDesign')

export default function InteractionDesign() {
  const { mobile } = useContext(MobileContext)

  return (
    <>
      {!mobile ? (
        <div className={block()}>
          <div>
            <InteractionDesignTitle />
            <ApplyBlock showAdditionText={false} />
          </div>
          <div>
            <DetailedInfo />
          </div>
        </div>
      ) : (
        <div className={block('OneColumn')}>
          <InteractionDesignTitle />
          <DetailedInfo />
          <ApplyBlock showAdditionText />
        </div>
      )}
    </>
  )
}
