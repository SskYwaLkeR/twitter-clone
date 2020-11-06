import './header.styles.scss'
import { useLocation } from 'react-router-dom'
function Header() {
    let path = useLocation().pathname.split('/')[1]
    return (
        <div className="header-wrapper">
            <h1>{path === '' ? 'Home' : path}</h1>

            {path === 'explore' ? (
                <input type="text" name="Search" id="" />
            ) : null}
        </div>
    )
}

export default Header
