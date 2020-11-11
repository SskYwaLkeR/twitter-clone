import { useState, useEffect } from 'react'

function useFetch(url, largeData) {
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
        let fetchData = async () => {
            let result = await fetch(url)
            let resJson = await result.json()

            if (largeData) {
                setData(prevState => resJson.slice(0, prevState.length + 10))
            } else {
                setData(prevState => [...prevState, resJson[0]])
            }
        }

        fetchData()
    }, [isBottom, largeData, url])

    console.log(data)

    return data
}

export default useFetch
