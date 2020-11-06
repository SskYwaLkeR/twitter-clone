import React, { useState } from 'react'
import './posts.styles.scss'

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined'

function Posts({ name, description, img }) {
    let [likes, setLikes] = useState(0)
    let [retweet, setRetweet] = useState(0)

    let handleLike = () => {
        setLikes(likes + 1)
    }

    let handleRetweet = () => {
        setRetweet(retweet + 1)
    }

    return (
        <div className="posts-wrapper">
            <div className="profile"></div>
            <div className="post-container">
                <div className="post-header">
                    <h3>{name.split(' ')[0]}</h3>
                </div>
                <div className="post-body">{description}</div>
                <div className="post-img">
                    <img src={img} width="100px" alt="tweet img" />
                </div>
                <div className="post-footer">
                    <div className="footer-item ">
                        <div className="footer-svg comments">
                            <ChatBubbleOutlineIcon />
                        </div>
                    </div>
                    <div className=" footer-item " onClick={handleRetweet}>
                        <div className="footer-svg retweet">
                            <ImportExportIcon />
                        </div>
                        <span className="counts">{retweet}</span>
                    </div>
                    <div className="footer-item " onClick={handleLike}>
                        <div className="footer-svg likes">
                            <FavoriteBorderIcon />
                        </div>
                        <span className="counts">{likes}</span>
                    </div>
                    <div className="footer-item option ">
                        <div className="footer-svg options">
                            <PublishOutlinedIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
