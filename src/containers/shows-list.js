import React, { Component } from 'react';
import {connect} from 'react-redux';

export default class ShowList extends Component {

    constructor(props) {
        super();


    }
    renderList() {
        return this.props.shows.map((show) => {
            return (
                <li key={show.title} className="list-group-item">{show.title}</li>
            );
        });
    }
    render() {
        return (
        <ul className="list-group col-sm-4">
            {this.props.shows && this.renderList()}
        </ul>

        )

    }

}

// function mapStateToProps(state) {
//    return {shows: state.shows};
// }
//
// export default connect(mapStateToProps)(ShowList)