import './App.css'
import Header from './Components/Header/Header.component.jsx'
import Post from './Components/Posts/Posts.component.jsx'
import Footer from './Components/Footer/Footer.component.jsx'
import Explore from './Components/Explore/Explore.component.jsx'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './Components/Profile/Profile.jsx'

function App() {
    let [data, setData] = useState([])
    let [isBottom, setBottom] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', function () {
            const scrollY = window.scrollY
            const visible = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            const bottomOfPage = visible + scrollY >= pageHeight - 2

            setBottom(bottomOfPage)
        })

        let apiFunc = async () => {
            let response = await fetch(
                'https://api.punkapi.com/v2/beers/random'
            )
            let resJson = await response.json()
            setData(preState => {
                return [...preState, resJson[0]]
            })
        }

        apiFunc()
    }, [isBottom])

    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <div className="post">
                            {data.map((el, idx) => (
                                <Post
                                    key={idx}
                                    description={el.description}
                                    img={el.image_url}
                                    name={el.contributed_by}
                                />
                            ))}
                        </div>
                    </Route>

                    <Route path="/profile" exact>
                        <Profile />
                    </Route>
                    <Route path="/explore" exact>
                        <Explore />
                    </Route>
                </Switch>

                <Footer />
            </div>
        </Router>
    )
}

export default App
