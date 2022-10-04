import './ToggleButton.scss'

import { useState } from 'react'

import { cn } from '@bem-react/classname'

const block = cn('ToggleButton')

export interface IToggleButton {
  onToggle: () => void
  mode: 'closed' | 'opened'
}

export default function ToggleButton(props: IToggleButton) {
  const [mode, setMode] = useState(props.mode)
  return (
    <>
      <div
        className={block({ mode })}
        onClick={() => {
          setMode(mode === 'closed' ? 'opened' : 'closed')
          props.onToggle()
        }}
      >
        <div className="ToggleButton-circle">
          <div className="ToggleButton-horizontal"></div>
          <div className="ToggleButton-vertical"></div>
        </div>
      </div>
    </>
  )
}
