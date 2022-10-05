import './App.scss'

import { Component, ContextType } from 'react'

import CarouselContainer from './blocks/CarouselContainer/CarouselContainer'
import Footer from './blocks/Footer/Footer'
import Header from './blocks/Header/Header'
import InteractionDesign from './blocks/InteractionDesign/InteractionDesign'
import ToggleButton from './blocks/ToggleButton/ToggleButton'
import { MobileContext } from './providers/mobile/MobileContext'
import MobileProvider from './providers/mobile/MobileProvider'

const MIN_DESKTOP_RESOLUTION = 769

class App extends Component {
  static contextType = MobileContext
  // declare context: ContextType<typeof MobileContext>

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
          <ToggleButton
            onToggle={() => {
              console.log('click')
            }}
            mode="closed"
          />
          <InteractionDesign />
          <CarouselContainer initialIndex={1} />
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
