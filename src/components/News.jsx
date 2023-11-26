// отображает новости
const News = (props) => {
    return (
        <div className="news">
            <ul>
                <li>
                    <a href={props.link}>
                        <img src={props.img}/>
                        <p>{props.title}</p>
                    </a>
                    
                </li>
            </ul>
        </div>
    )
}

export default News;