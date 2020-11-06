import { useState, useEffect } from 'react'

function Explore({ keyword }) {
    let [data, setData] = useState([])

    const filteredNews = data.filter(item => {
        return item.author.toLowerCase().includes(keyword.toLowerCase())
    })

    useEffect(() => {
        let apiData = async () => {
            let response = await fetch('https://type.fit/api/quotes')

            let resJson = await response.json()
            setData(resJson.slice(0, 10))
        }

        apiData()
    }, [])

    return (
        <div className="explore-wrapper">
            {filteredNews.map((el, i) => (
                <div className="quotes">
                    <span key={i}>
                        {el.author} <br />
                    </span>
                    <p>{el.text}</p> <br />
                </div>
            ))}
        </div>
    )
}

export default Explore
