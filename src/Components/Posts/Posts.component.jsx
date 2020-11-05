import React from 'react'
import './posts.styles.scss'

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined'

class Posts extends React.Component {
    render() {
        return (
            <div className="posts-wrapper">
                <div className="profile"></div>
                <div className="post-container">
                    <div className="post-header">
                        <h3>Mr X</h3>
                    </div>
                    <div className="post-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Tempora et obcaecati qui blanditiis nobis quos
                        nostrum itaque ipsum, esse dolores!
                    </div>
                    <div className="post-footer">
                        <div className="footer-item">
                            <div className="footer-svg">
                                <ChatBubbleOutlineIcon />
                            </div>
                        </div>
                        <div className=" footer-item ">
                            <div className="footer-svg">
                                <ImportExportIcon />
                            </div>
                            <span className="counts">2</span>
                        </div>
                        <div className="footer-item likes">
                            <div className="footer-svg">
                                <FavoriteBorderIcon />
                            </div>
                            <span className="counts">2</span>
                        </div>
                        <div className="footer-item option">
                            <div className="footer-svg">
                                <PublishOutlinedIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts
