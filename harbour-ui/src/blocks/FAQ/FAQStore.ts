import axios from 'axios'
import { action, computed, makeObservable, observable, runInAction } from 'mobx'

export interface FAQItems {
  type: string
  question: string
  answer: { type: string; data: string }[]
}

export class FAQStore {
  static URL =
    'https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab'

  filter: string | null = null
  initialized: null | boolean = false
  items: {
    type: string
    question: string
    answer: string
    opened: boolean
  }[] = []

  get types() {
    return Array.from(
      new Set(
        this.items.map((el) => {
          return el.type
        }),
      ),
    )
  }

  constructor() {
    makeObservable(this, {
      items: observable,
      initialized: observable,
      filter: observable,
      init: action,
      types: computed,
      setFilter: action,
      setOpened: action,
    })
  }

  setFilter(filter: string | null) {
    console.log(this)
    this.filter = filter
  }

  setOpened(index: number, value: boolean) {
    console.log(this)
    this.items[index].opened = value
  }

  async init(force = false) {
    if (this.initialized === false || force) {
      this.initialized = null
      try {
        const resp = await axios.get(FAQStore.URL)
        const items = resp.data.scholarship.faqs.items.map(
          ({ type, question, answer }: FAQItems) => {
            const ans = answer.map((a) => a.data).join(' ')
            return {
              type,
              question,
              answer: ans,
              opened: false,
            }
          },
        )
        runInAction(() => {
          this.items = items
          this.initialized = true
        })
      } catch (error) {
        const msg = `Cannot get FAQ data from ${FAQStore.URL}`
        console.error(msg)
        alert(msg)
      }
    }
  }
}
