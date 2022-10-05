import './ToggleButton.scss'

import { useState } from 'react'

import { cn } from '@bem-react/classname'

const block = cn('ToggleButton')

export interface IToggleButton {
  onToggle: (mode: 'closed' | 'opened') => void
  startMode: 'closed' | 'opened'
}

export default function ToggleButton(props: IToggleButton) {
  const [mode, setMode] = useState(props.startMode)
  return (
    <>
      <div
        className={block({ mode })}
        onClick={() => {
          const newMode = mode === 'closed' ? 'opened' : 'closed'
          setMode(newMode)
          props.onToggle(newMode)
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
