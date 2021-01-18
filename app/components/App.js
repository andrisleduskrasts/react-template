import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import BeerList from './BeerList';
import SingleCard from './SingleCard';

class App extends React.Component {

    state = {
        beerList: [],
        loaded: false,
        activeItem : {},
        filtered: false,
    };

    componentDidMount = () => {
        axios.get('https://api.punkapi.com/v2/beers').then((res) => {
            console.log(res.data);
            this.setState({beerList: res.data});
            this.setState({loaded: true});
        })
    }

    render() {
        return <div className="wrapper">
                    <button onClick={this.setFilter}>Filter</button>
                    <div className="title-block">
                        <h1 className="title">List of available beers</h1>
                    </div>
                    <div className="beerList">
                        {this.content()}
                    </div>
               </div>
    };

    content() {
        return this.state.loaded ? <Router>
                                        <Switch>
                                            <Route exact path="/" children={<BeerList beerList={this.state.beerList} filtered={this.state.filtered}/>} />
                                            <Route path="/:itemId" children={<SingleCard setActiveItem={this.setActiveItem} itemData={this.state.activeItem}/>} />
                                        </Switch>
                                    </Router> : this.loader()
    }
    loader(){
        return <div className="loader">
            <h1>Loading</h1>
        </div>
    } 

    setFilter = () => {
        this.setState({filtered: !this.state.filtered})
    }

    title() {
        return <div className="title-block">
            <h1 className="title">List of available beers</h1>
        </div>
    }

    setActiveItem = (itemId) => {
        let item = this.state.beerList.find((beer) => {
            return beer.id === parseInt(itemId)})
        this.setState({activeItem: item});
    }
}

export default App;