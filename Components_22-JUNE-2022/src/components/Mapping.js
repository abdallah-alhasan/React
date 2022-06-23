function Mapping(){
    // const names =['Ahmed','Rakan','Eyad','Jaser']
    const Fruits = [
        {id: 1 , name:"Apple",  color:"Yellow"},
        {id: 2 , name:"Strawberry", color:"Red"},
        {id: 3 , name:"Kiwi", color:"Green"}
        ];
    const mapped = Fruits.map((el) => {
        return (
            <tr>
                <td >{el.id}</td>
                <td >{el.name}</td>
                <td >{el.color}</td>
            </tr>
        )
    })
    return (
        <table class="table table-striped table-inverse table-responsive">
        <thead class="thead-inverse">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Color</th>
            </tr>
            </thead>
            <tbody>
                {mapped}
            </tbody>
            </table>
    )
}

export default Mapping