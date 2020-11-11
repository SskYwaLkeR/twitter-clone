import useFetch from '../../Hooks/useFetch.effect.js'

function Explore({ keyword }) {
    let data = useFetch('https://type.fit/api/quotes', true)

    const filteredNews = data.filter((item, idx) => {
        return item.author?.toLowerCase().includes(keyword.toLowerCase())
    })

    return (
        <div className="explore-wrapper">
            {filteredNews.map((el, i) => (
                <div className="quotes" key={i}>
                    <span>
                        {el.author} <br />
                    </span>
                    <p>{el.text}</p> <br />
                </div>
            ))}
        </div>
    )
}

export default Explore
