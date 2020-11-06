import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined'
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded'
import { Link } from 'react-router-dom'

import './footer.styles.scss'

function Footer() {
    return (
        <div className="footer-wrapper">
            <Link to="/">
                <HomeRoundedIcon />
            </Link>
            <SearchIcon />
            <NotificationsOutlinedIcon />

            <Link to="/profile">
                <MailOutlineRoundedIcon />
            </Link>
        </div>
    )
}

export default Footer
