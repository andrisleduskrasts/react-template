import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SingleCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            item: {}
        }
    }
    componentDidMount = () => {
        let itemId = this.props.match.params.itemId;
        this.props.setActiveItem(itemId); 
    }
    componentDidUpdate(prevProps) {
        if (prevProps.itemData !== this.state.item) {
            this.setState({item: this.props.itemData})
        }
    }
    render() {
        return (<div>
        <h1>{this.state.item ? this.state.item.name : ''}</h1>
        <p>Ph: {this.state.item.ph}</p>
        <p>Food pairing: {this.state.item.food_pairing ? this.state.item.food_pairing.map((pairing) => pairing + ' ') : ''}</p>
        <p>Brewers tips: {this.state.item.brewers_tips}</p>
        <p>Method: Fermentation: {this.state.item.method && this.state.item.method.fermentation ? this.state.item.method.fermentation.temp.value + ' ' + this.state.item.method.fermentation.temp.unit : ''} <br/>
        Mash Temperature: {this.state.item.method && this.state.item.method.mash_temp ? this.state.item.method.mash_temp.map((value) => value.temp.value + ' ' + value.temp.unit + ' for ' + value.duration) : ''}</p>
           <Link to="/"> <button type="button" onClick={this.handleClick}>Back</button></Link>
        </div>)
    };
 }

export default withRouter(SingleCard);