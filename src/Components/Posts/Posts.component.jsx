import React from 'react'
import './posts.styles.scss'

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
                    <div className="post-footer"></div>
                </div>
            </div>
        )
    }
}

export default Posts
