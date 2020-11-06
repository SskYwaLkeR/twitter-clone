import './header.styles.scss'
import { useLocation } from 'react-router-dom'
function Header({ handleSearch }) {
    let path = useLocation().pathname.split('/')[1]
    return (
        <div className="header-wrapper">
            <h1>{path === '' ? 'Home' : path}</h1>

            {path === 'explore' ? (
                <input
                    type="text"
                    name="Search"
                    id=""
                    onChange={e => handleSearch(e)}
                />
            ) : null}
        </div>
    )
}

export default Header
