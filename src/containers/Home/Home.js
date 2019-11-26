import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import SplashContainer from '../SplashScreen/Splash'
import {HomeContainer} from './HomeStyle'
<<<<<<< develop
import Header from '../../components/Header/Header'

=======
import Button from '../../components/Button/Button'
>>>>>>> fix button components
export default class Home extends Component {

  state={
    splash: true
  }

  componentDidMount(){
    setTimeout(()=>{this.setState({splash: false})},2000)
  }
  render() {
    const {splash} = this.state
    return(
      splash ? <SplashContainer/> 
      :
      <HomeContainer flexDirection={'column'}>
        <Header/>
        <MapContainer/>
        <Button value={"Quero Adotar"}/>

      </HomeContainer>
    )
      
  }
}