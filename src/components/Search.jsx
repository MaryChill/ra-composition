// отображает поле поиска и ссылкм на разделы
const Search = (props) => {
    return (
        <div className="search">
            <div className="search__list">
                {props.children}
            </div>
            <input className="search__input" type='search'></input>
            <button className="search__btn btn">Найти</button>
        </div>
    )
}

export default Search;