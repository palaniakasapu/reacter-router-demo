import {NavLink} from 'react-router-dom'
export const Navbar = () =>{
    const navLinkStyle = ({isActive}) => {
        return{
            textDecoration: isActive ? 'none' : 'underline',
            color: isActive ? 'brown' : '#61dafb'
        }
    }
    return(
        <nav className='primary-nav'>
            <NavLink style={navLinkStyle} to='/'>Home</NavLink>
            <NavLink style={navLinkStyle} to='/about'>About</NavLink> 
             <NavLink style={navLinkStyle} to='/products'>Products</NavLink> 
             <NavLink style={navLinkStyle} to='/profile'>Profile</NavLink>
        </nav>
    )
}