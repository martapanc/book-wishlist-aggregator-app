import React, {Component} from "react";

class Book extends Component {

    render() {
        return <tr>
            <td><img src={this.props.cover}/></td>
            <td>{this.props.title}</td>
            <td>{this.props.author}</td>
            <td>{this.props.tags}</td>
        </tr>
    }
}

export default Book