import './App.scss'

import { Component, ContextType } from 'react'

import CarouselContainer from './blocks/CarouselContainer/CarouselContainer'
import FAQ from './blocks/FAQ/FAQ'
import { FAQStore } from './blocks/FAQ/FAQStore'
import Footer from './blocks/Footer/Footer'
import Header from './blocks/Header/Header'
import InteractionDesign from './blocks/InteractionDesign/InteractionDesign'
import { MobileContext } from './providers/mobile/MobileContext'
import MobileProvider from './providers/mobile/MobileProvider'

const MIN_DESKTOP_RESOLUTION = 769

class App extends Component {
  static contextType = MobileContext
  static faqStore = new FAQStore()

  get mobileContext() {
    return this.context as ContextType<typeof MobileContext>
  }

  handleWindowSizeChange = () => {
    this.mobileContext.setMobile(window.innerWidth <= MIN_DESKTOP_RESOLUTION)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <div>
          <div className="App-Block"><InteractionDesign /></div>
          <div className="App-Block"><CarouselContainer initialIndex={1} /></div>
          <div className="App-Block"><FAQ store={App.faqStore} /></div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default function AppWrapper() {
  return (
    <MobileProvider mobile={window.innerWidth <= MIN_DESKTOP_RESOLUTION}>
      <App />
    </MobileProvider>
  )
}
