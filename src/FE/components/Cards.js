import { Component } from 'react'
import Card from './Card'
import { connect } from "react-redux";
import { getCards } from '../../FE/actions/actions';
import '../../index.css'

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount = async () => {
        await this.props.getCardsInDB();
    };
    

    handleDisplay = () => {
        let cardList = this.props.cardList;

        if (cardList) {
          let cards = cardList.map((eachCard) => (
            <Card key={eachCard.id} card={eachCard}/>
          ));
          return cards;
        }
      };

    render() {
        return (
            <div id="card_canvas">
                {this.handleDisplay()}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        cardList: state.reducers,
    };
  };

const mapActionsToProps = (dispatch) => ({
    getCardsInDB: () => {
        dispatch(getCards())},
});

export default connect(mapStateToProps, mapActionsToProps)(Cards);
