import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import Stats from './stats';
import CardStudy from './card_study';
import { getCards } from '../../actions/card_actions';

class Study extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCards(this.props.params.deckId);
  }

  handleLibraryClick() {
    hashHistory.push('/library');
  }

  handleSearchClick() {
    hashHistory.push('/search');
  }

  render () {
    return (
      <main className='study group'>
        <aside className='thin-nav'>
          <img className='logo'
            onClick={this.handleLibraryClick}
            src={window.cardBrainAssets.logoImage} />
          <span className='icon' onClick={this.handleLibraryClick}>
            <i className="fa fa-book" ></i>
          </span>
          <span className='icon' onClick={this.handleSearchClick}>
            <i className="fa fa-search" ></i>
          </span>
        </aside>
        <Stats />
        <CardStudy />
      </main>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getCards: (deckId) => dispatch(getCards(deckId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Study);
