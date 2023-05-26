import SearchBar from "./SearchBar"
import { NavStyle } from "./stylesNav"
import { Link } from "react-router-dom"
const Nav = ({onSearch})=>{
    return(
        <NavStyle>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
            <Link to='/favorites'>favorites</Link>
            <SearchBar onSearch={onSearch}/>
        </NavStyle>
    )
} 

export default Nav