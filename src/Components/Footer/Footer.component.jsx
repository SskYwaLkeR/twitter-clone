import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined'
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded'

import './footer.styles.scss'

function Footer() {
    return (
        <div className="footer-wrapper">
            <HomeRoundedIcon />
            <SearchIcon />
            <NotificationsOutlinedIcon />
            <MailOutlineRoundedIcon />
        </div>
    )
}

export default Footer
