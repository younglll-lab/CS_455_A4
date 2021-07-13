import '../../index.css'
import React, { Component } from "react";
import { addCard } from '../../FE/actions/actions';
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

class AddCard extends Component{

    constructor() {
        super();
        this.state = {
            name:"",
            url:"",
            id:"",
        }
    }

    render() {
        return (
            <div className="adding_cards">
                <div id="adding_cards_box" >
                    <h2 className="adding_card_title" style={{"textAlign": "center"}}> Adding More Cards </h2>
                    <div>
                        <input 
                            className="input_canvas" 
                            type='text' 
                            placeholder='Card Name' 
                            value={this.state.name} 
                            onChange={(n) => {
                                this.setState({
                                  name: n.target.value,
                                });
                              }}/>
                        <br/>
                        <input 
                            className="input_canvas" 
                            type='text' 
                            placeholder='Card URL' 
                            value={this.state.url} 
                            onChange={(u) => {
                                this.setState({
                                  url: u.target.value,
                                });
                              }}/>
                        <br/>
                    </div>
                    <div id="adding_cards_box_button_block">
                        <input className="custom_button" type='button' value='Submit' onClick={() => this.props.addCard({
                            id: uuidv4(),
                            name: this.state.name,
                            url: this.state.url,
                            description: "this is some description"
                        })}/>
                        <input className="custom_button" type='button' value='Clear' onClick={() => {
                            this.setState({
                                name: "",
                                url:"",
                                id:"",
                            })
                        }}/>
                    <br/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addCard: (element) => dispatch(addCard(element)),
    };
  };

export default connect(null, mapDispatchToProps)(AddCard);