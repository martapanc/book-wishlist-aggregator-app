import React from "react";
import {Component} from "react/cjs/react.production.min";
import Book from "./Book";

import WishList from "../assets/list";

class General extends Component {

    render() {
        return <div>
            <table>
                <thead>
                <tr>
                    <th>Cover</th>
                    <th width="800">Title</th>
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
            </table>
        </div>
    }
}

export default General;