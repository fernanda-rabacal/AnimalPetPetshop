import './style.css';
import { useNavigate } from "react-router-dom"
import OpenMenu from "../../assets/OpenMenu.svg"
import CloseMenu from "../../assets/closeMenu-btn.svg"
import Instagram from '../../assets/instagram-logo.svg'
import Facebook from '../../assets/facebook-logo.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import Carrinho from '../../assets/carrinho.svg'
import {Button} from '../Button/index'


export function Header(){
  const openMenu = () => {
    document.body.classList.add('menu-expanded')
  }

  const closeMenu = () =>{
    document.body.classList.remove('menu-expanded')
  }

  const navigate = useNavigate()

  const changeRouteLogin = () => navigate(`/login`)
  const changeRouteHome = () => navigate(`/home`)
  const changeRouteRegister = () => navigate(`/register`)
  const changeRouteAbout = () => navigate(`/about`)

  
  return(
    <nav className='nav-container'>
        <div className='nav-bar'> 
          <a className='nav-logo' href="#home">
          AnimalPet 
          </a>
        <Button className='open-menu' onClick={() => openMenu()}
          btnValue={<img src={OpenMenu} alt="button to open menu"/>}/>
        <Button className='close-menu' onClick={() => closeMenu()} btnValue={<img src={CloseMenu} alt="button to close menu"/>}/>
        </div>
      <div className='visible-menu'>
        <div className="nav-menu">
          <Button btnValue='Home' className="menu-btn"
          onClick={()=>{
            closeMenu()
            changeRouteHome()
          }}/>
          <Button btnValue='Sobre'
          className="menu-btn"
            onClick={() =>{
            closeMenu()
            changeRouteAbout()
          } }/>
          <Button btnValue='Login' 
          className="menu-btn"
          onClick={() => {
            closeMenu()
            changeRouteLogin()
            }}/>
          <Button btnValue='Cadastro'
          className="menu-btn" 
          onClick={() =>{
            closeMenu()
            changeRouteRegister()
          }}
            />
        </div>
        <div className='social-links'>
            <a rel='noreferrer' target="_blank" 
              href="https://www.instagram.com/animalpetsalvador">
                <img src={Instagram} alt='link to Instagram' />
              </a>
            <a rel='noreferrer' target="_blank" 
              href="https://www.facebook.com/animalpetsalvador">
                <img src={Facebook} alt='link to Facebook' />
              </a>
            <a rel='noreferrer' target="_blank" 
              href="https://wa.me/5571993172074" >
                <img src={Whatsapp} alt='link to Whatsapp' />
              </a>
              </div>
              <Button btnValue={<div className='carrinho'>
              <img src={Carrinho} alt='link to Carrinho' />
              <p id='carrinho-p'>Carrinho</p>
              </div>} />
          </div>
    </nav>
  )
}