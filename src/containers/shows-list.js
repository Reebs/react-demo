import React, { Component } from 'react';
import {connect} from 'react-redux';

class ShowList extends Component {
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
            {this.renderList()}
        </ul>

        )

    }

}

function mapStateToProps(state) {
   return {shows: state.shows};
}

export default connect(mapStateToProps)(ShowList)