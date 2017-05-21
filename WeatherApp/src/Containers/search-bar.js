import React, {Component} from 'react';
import {ControlLabel,Checkbox, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchTerm: '',
            isCanada: false

        };

        //Whenever we have a callback that we a pass to a DOM element, and it makes reference to this, we need to bind the context ! (l.35,37)
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onCheckedChange = this.onCheckedChange.bind(this);

    }

    //all controller event (onChange, onCick) comes with the event params objet
    onInputChange(event){
        this.setState({searchTerm: event.target.value});
    }

    onCheckedChange(event){
        this.setState({isCanada: !this.state.isCanada});
    }

    onFormSubmit(event){
        //tell the browser; don't submit the form
        event.preventDefault();
        if(this.state.searchTerm == ''){
            alert('You have to enter a city');
            return;
        }
        this.props.fetchWeather(this.state.searchTerm, this.state.isCanada);

        this.setState({searchTerm:''});

    }

    render(){
        return(
            <form
                onSubmit={this.onFormSubmit}
                className="input-group search-bar">
                <input  onChange={this.onInputChange}
                        className="form-control"
                        placeholder="Get a five-day forecast in your fav cities"
                        value={this.state.searchTerm} />
                <span>
                    <Checkbox inline onChange={this.onCheckedChange}>
                        City in Canada
                    </Checkbox>
                </span>
                <span className="input-group-btn" id="bootstrap-overrides-btnSearch">
                    <Button type="submit" className="btn btn-secondary" >Submit</Button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    //bind the actions, so now we have fetchWeather as a props
    return bindActionCreators({fetchWeather},dispatch);
}

//passing null because we need to pass a Reduxstate as a first args, but this container doesn't care about ReduxState so we pass null
export default connect(null, mapDispatchToProps)(SearchBar);