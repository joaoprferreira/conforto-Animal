import React, {useState} from 'react'
import { HeaderContainer, MenuContainer, ProfileImg, ListMenu, MenuDesktop} from './HeaderStyle'
import logo from '../../assets/images/logo.png'
import Search from '../../assets/images/search.png'
import Menu from '../../assets/images/menu 1.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import { LogOutFacebook, GetStorageUser, LogOutGoogle } from '../../firebase'

const Header = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    const [user] = useState(GetStorageUser())
    const [optionsMenu] = useState([
        {
            text: 'adote',
            route: '/adoption'
        },
        {
            text: 'doe',
            route: '/donate'
        },
        {
            text:'fazer login',
            route: '/login'
        },
        {
            text:'sair',
            route: '/home'
        },
    ])


    return (
        <>
       <HeaderContainer>
           <img className="menuHeader" src={Menu} alt="" onClick={()=> setShowMenu(!showMenu)}/>
            <img className="logoImg" alt="" src={logo}/>
            <img className="chatHeader" alt="" onClick={props.onClick} src={Search}/>
            
        <MenuContainer show={showMenu} onClick={()=>setShowMenu(!showMenu)}>
            <p id="close" onClick={()=> setShowMenu(!showMenu)}>X</p>
            {user && <ProfileImg src={user.photoURL}/>}

          <ListMenu flexDirection= {'column'} justifyContent={'space-around'}>
            {optionsMenu.map((res, index)=>{                
                return( 
                <Link to={res.route} key={index}>
                    <Button 
                        value={res.text} 
                        className={'btn-menu'} 
                        onClick={()=>{ 
                            setShowMenu(!showMenu) 
                            res.text === 'sair' &&  (LogOutFacebook() && LogOutGoogle()) 
                        }}/>
                </Link>
            )})}
          </ListMenu>
        </MenuContainer>
        <MenuDesktop>
            <ul>
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <Link to="/adoption">
                    <li>ADOTE</li>
                </Link>
                <Link to="/donate">
                    <li>DOE</li>
                </Link>
                <Link to="/">
                    <li>QUEM <br></br>SOMOS</li>
                </Link>
                <Link to="/">
                    <li className="last-border">MEU <br></br> PERFIL</li>
                </Link>

            </ul>
        </MenuDesktop>
       </HeaderContainer>
       
       </>
    )
}

export default Header
