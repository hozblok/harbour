import { Component, ReactNode } from 'react'

import { MobileContext, MobileContextProps } from './MobileContext'

export interface IMobileProvider {
  mobile: boolean
  children: ReactNode
}

interface IMobileProviderState extends MobileContextProps {}

export default class MobileProvider extends Component<
  IMobileProvider,
  IMobileProviderState
> {
  static defaultProps = {
    mobile: false,
  }

  state: IMobileProviderState = {
    mobile: this.props.mobile,
    setMobile: (mobile: boolean) => this.setState({ mobile }),
  }

  render() {
    return (
      <MobileContext.Provider value={this.state}>
        {this.props.children}
      </MobileContext.Provider>
    )
  }
}
