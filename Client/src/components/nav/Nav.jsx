import SearchBar from "./SearchBar"
import { NavStyle , NavLink} from "./stylesNav"
import logo from '../../assets/rick-and-morty-31015.png'
import { useState, useEffect } from "react"


const Nav = ({onSearch})=>{
        const[scrollBackground, setScrollBackground] = useState(false);
    
        useEffect(()=>{
            const handleScroll = () =>{
            const scrollPosition = window.scrollY;
            const shouldChangeBackground = scrollPosition > 0;
            setScrollBackground(shouldChangeBackground);
            }
    
            window.addEventListener('scroll', handleScroll);
    
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }, [])
    
    return(
        <NavStyle  style={{ backgroundColor: scrollBackground ? '#2e2e32d9' : ''}}>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/favorites'>favorites</NavLink>
            <img style={{width:'10%'}} src={logo} alt="logo" />
            <SearchBar onSearch={onSearch}/>
            <NavLink to='/'>login</NavLink>
        </NavStyle>
    )
} 

export default Nav