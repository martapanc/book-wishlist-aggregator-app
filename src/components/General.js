import React from "react";
import {Component} from "react/cjs/react.production.min";
import Book from "./Book";

import WishList from "../assets/list";
import Table from "react-bootstrap/Table";

class General extends Component {

    render() {
        return <div className="general">
            <Table striped bordered>
                <thead>
                <tr>
                    <th className="cover-col">Cover</th>
                    <th className="title-col" width="800">Title</th>
                    <th>Author</th>
                    <th>Tags</th>
                </tr>
                </thead>
                <tbody>
                {
                    WishList.map((data, key) => {
                        return <Book cover={data.coverUrl} title={data.title} author={data.author} tags={data.tags}
                                     key={key}/>
                    })
                }
                </tbody>
            </Table>
        </div>
    }
}

export default General;