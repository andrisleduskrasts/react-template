import React from 'react';
import {Link} from 'react-router-dom';

class BeerList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            beerList: [],
            filtered: false
        }
    }

    componentDidMount = () => {
        this.setState({beerList: this.props.beerList})
    }

    render() {
        return this.state.beerList.map((item) => { if (this.props.filtered) {
            if (item.first_brewed.replace(/.*\/(.*)/, '$1') <= "2010") {
                return (<Link to={'/' + item.id}>
                <div className="single">
                    <div className="imgSlot">
                        <img className="image" src={item.image_url}></img>
                    </div>
                    <div className="textSlot">
                        <h3 className="itemName">{item.name}</h3>
                        <p className="itemDesc">{item.tagline}</p>
                    </div>
                </div>
            </Link>)
            }
        } else {
            return (<Link to={'/' + item.id}>
                        <div className="single">
                            <div className="imgSlot">
                                <img className="image" src={item.image_url}></img>
                            </div>
                            <div className="textSlot">
                                <h3 className="itemName">{item.name}</h3>
                                <p className="itemDesc">{item.tagline}</p>
                            </div>
                        </div>
                    </Link>)
        }
        });
    };
}

export default BeerList;