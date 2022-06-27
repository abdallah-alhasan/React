import { Component } from "react"

export default class Filter extends Component {

    constructor(){
        super()
        this.state = {
            data : [],
            dataSearch : ''
        }
    }

    componentDidMount() {
fetch(
    "http://127.0.0.1:8000/api/users")
    .then((res) => res.json())
    .then((json) => {
    this.setState({
    data: json.data.map(arr => arr.Attributes.name),
    });
})
}

    handleChange = (event) => {
        this.setState({
            dataSearch : event.target.value
        })
        console.log(this.state.data)
    }

    dynamicSearch = () => {
        return this.state.data.filter(names => names.toLowerCase().includes(this.state.dataSearch.toLowerCase()))
    }
    render(){
    return (
        <div>
            <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" value={this.state.dataSearch} id='search' onChange={this.handleChange} type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            <table class="table table-striped table-inverse table-responsive">
                <thead class="thead-inverse">
                    <tr>
                        <th>name</th>
                    </tr>
                    </thead>
                    <tbody>
                            {this.dynamicSearch().map(name => <tr><td>{name}</td></tr>)}
                    </tbody>
            </table>
            
        </div>
    )
    }
}

