import './Card.scss'

import { ReactNode } from 'react'

import { cn } from '@bem-react/classname'

const block = cn('Card')

export default function Card(props: {
  children: ReactNode
  className?: string
}) {
  return <div className={block(null, [props.className])}>{props.children}</div>
}
