// отображает блок информации
const Information = (props) => {
    return (
        <div className="information">
            <a href={props.link}>{props.title}</a>
            <img src={props.img} />
            <p>{props.info}</p>
        </div>
    )
}

export default Information;