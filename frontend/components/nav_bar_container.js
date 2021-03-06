import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: (cb) => dispatch(logout(cb))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
