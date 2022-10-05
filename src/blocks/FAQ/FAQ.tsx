import './FAQ.scss'

import { observer } from 'mobx-react'
import { Component } from 'react'
import Select from 'react-select'

import { cn } from '@bem-react/classname'

import ToggleButton from '../ToggleButton/ToggleButton'
import { FAQStore } from './FAQStore'

const block = cn('FAQ')

class FAQ extends Component<{
  store: FAQStore
}> {
  componentDidMount(): void {
    this.props.store.init()
  }

  render() {
    const store = this.props.store
    return (
      <div className={block()}>
        <div className={block('Header')}>
          <div className={block('Title')}>Frequently asked questions</div>
          <div className={block('Filter')}>
            <span>
              <p>Filter by: </p>
            </span>
            <Select
              options={store.types.map((value) => {
                return {
                  value,
                  label: value,
                }
              })}
              isLoading={!store.initialized}
              isClearable
              onChange={(el) => store.setFilter(el?.value ?? null)}
            />
          </div>
        </div>
        <div className={block('Elements')}>
          {store.initialized &&
            store.items.map((el, index) => {
              return (
                <div key={index}>
                  {(store.filter === null || store.filter === el.type) && (
                    <>
                      <div className={block('ElementHeader')}>
                        <div className={block('ElementType')}>{el.type}</div>
                        <div className={block('ElementQuestion')}>
                          {el.question}
                        </div>
                        <ToggleButton
                          startMode={el.opened ? 'opened' : 'closed'}
                          onToggle={(mode) =>
                            store.setOpened(index, mode === 'opened')
                          }
                        />
                      </div>
                      {el.opened && (
                        <div className={block('ElementAnswerHeader')}>
                          <div></div>
                          <div className={block('ElementAnswer')}>
                            {el.answer}
                          </div>
                        </div>
                      )}
                      {index !== store.items.length - 1 && <hr />}
                    </>
                  )}
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

export default observer(FAQ)
