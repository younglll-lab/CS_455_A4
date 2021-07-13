import Dialog from './Dialog'
import { connect } from "react-redux";
import { Component } from 'react'
import { deleteCard } from '../actions/actions'
import '../../index.css'

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDetail : false
        }
    }

    handleClickDelete = () => {
        this.props.clickDelete(this.props.card.id);
    }

    render () {
        return (
            <div className="card_block" onDoubleClick={() => {
                this.setState({
                  showDetail: true,
                });
              }}>
                <img className="card_display" src={this.props.card.url} alt={this.props.card.name} />
                <h3 className="card_name"> {this.props.card.name} </h3>
                <button 
                    className="custom_button" 
                    onClick={
                        (e) => {
                            e.preventDefault();
                            this.handleClickDelete(this.props.card.id);
                        }
                    }> Delete 
                </button>            
                {this.state.showDetail && 
                <Dialog card = {this.props.card} onClose = {() => {
                    this.setState({
                        showDetail: false,
                    });
                }}/>}
            </div>
        )
    }
    
}

const mapActionsToProps = (dispatch) => ({
    clickDelete: (id) => dispatch(deleteCard(id))
  });
  
export default connect(null, mapActionsToProps)(Card);

