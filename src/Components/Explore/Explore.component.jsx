import { useState, useEffect } from 'react'

function Explore() {
    let [data, setData] = useState([])

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
            {data.map((el, i) => (
                <span key={i}>
                    {el.author} <br />
                </span>
            ))}
        </div>
    )
}

export default Explore
