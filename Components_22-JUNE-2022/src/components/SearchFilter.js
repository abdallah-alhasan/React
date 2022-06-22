function Filter(){
    const search = document.getElementById('search')
    console.log(search)
    let myArr= ["Khozama","Mohammad","Lujain","Nada","Ayman"]
    let filtered = myArr
    search.onkeyup = function(){
        filtered = myArr.filter((el) => el.includes(search.value))
        console.log(filtered)
    }

    return (
        <div>
            <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" id='search' type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            <ul className="list-group">
                {filtered.map((el) => <li>{el}</li>)}
            </ul>
        </div>
    )
}

export default Filter