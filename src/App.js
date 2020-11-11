import './App.css'
import Header from './Components/Header/Header.component.jsx'
import Post from './Components/Posts/Posts.component.jsx'
import Footer from './Components/Footer/Footer.component.jsx'
import Explore from './Components/Explore/Explore.component.jsx'

import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './Components/Profile/Profile.jsx'
import useFetch from './Hooks/useFetch.effect.js'

function App() {
    let [search, setSearch] = useState('')

    let data = useFetch('https://api.punkapi.com/v2/beers/random', false)

    let handleType = e => {
        setSearch(e.target.value)
    }
    return (
        <Router>
            <div className="App">
                <Header handleSearch={e => handleType(e)} />
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
                        <Explore keyword={search} />
                    </Route>
                </Switch>

                <Footer />
            </div>
        </Router>
    )
}

export default App
