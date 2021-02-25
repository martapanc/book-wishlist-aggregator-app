import React, {Component} from "react";

class Book extends Component {

    render() {
        return <tr>
            <td className="cover-col">
                <img src={this.props.cover}/>
            </td>
            <td className="title-col">{this.props.title}</td>
            <td>{this.props.author}</td>
            <td>{this.props.tags}</td>
        </tr>
    }
}

export default Book