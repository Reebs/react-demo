/**
 * Created by dbgreenfield on 10/16/17.
 */
import React, {Component} from 'react';
import Banner from './Banner'
import ShowsList from '../containers/shows-list'
import {connect} from 'react-redux';
import bindActionCreators from "redux/src/bindActionCreators";
import {selectBand} from "../actions/selectBand"

class MyNewComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {banner: "We Love Rock and Roll"}
        this.fieldchange = this.fieldChange.bind(this)
        this.onclick = this.onClick.bind(this)
        this.handlekeypress = this.handleKeyPress.bind(this)
        this.renderDetails = this.renderDetails.bind(this);
    }

    fieldChange(event) {
        this.fieldValue = event.target.value;
    }

    onClick(event) {
        event.preventDefault();
        let bandName = this.fieldValue;
        this.props.selectBand(bandName);

        // getBandInfo(bandName).then(
        //     function (response) {
        //         self.setState({bandImage: response.data.image_url, bandName: bandName, banner: bandName})
        //     }
        // )
    }

    handleKeyPress(event) {
        if(event.charCode === 13){
            this.onclick(event);
        }
    }

    renderDetails() {
        if (!this.props.bandName) {
            return <div>Select a book to get started.</div>;
        }
        else {
            return <img src={this.props.bandImage} alt={this.props.bandName}></img>

        }
    }

    render() {
        console.log("mynewcomponent.render()");
        return <div>
            <section>
                <Banner banner={this.props.banner}/>
            </section>
            <section>
                <input id="myInput" onChange={this.fieldchange} onKeyPress={this.handlekeypress}/>
                {' '}
                <button type="submit" onClick={this.onclick}>click to change band</button>
            </section>
            {this.renderDetails()}
            <ShowsList/>

        </div>
    }
}

function mapStateToProps(state) {
    return {
        banner: state.bandSelected.banner,
        bandName: state.bandSelected.bandName,
        bandImage: state.bandSelected.bandImage

    };
}

function mapDispatchToProps(dispatch) {
    return {
        selectBand: (band) => dispatch(selectBand(band, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNewComponent);
