import './header.styles.scss'
import { useLocation } from 'react-router-dom'
function Header() {
    let path = useLocation().pathname.split('/')[1]
    return (
        <div className="header-wrapper">
            <h1>{path === '' ? 'Home' : path}</h1>
        </div>
    )
}

export default Header
