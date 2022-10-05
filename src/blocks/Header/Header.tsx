import './Header.scss'

import { cn } from '@bem-react/classname'

import menuIcon from '../../assets/svgs/hamburger-menu-icon.svg'

const block = cn('Header')

export default function Header() {
  return (
    <div className={block()}>
      <div className={block('Logo')}>
        <p>
          HARBOUR.SPACE{' '}
          <span className={block('Subtitle')}>/ interaction design</span>
        </p>
      </div>
      <div className={block('Right')}>
        <div className={block('BurgerButtonContainer')}>
          <img src={menuIcon} alt="menuIcon" />
        </div>
      </div>
    </div>
  )
}
