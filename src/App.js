import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainRoutes from './routes/MainRoutes';
import SimpleBackdrop from './components/Common/Loader/SimpleBackdrop';

const App = ({ loading })  => (
  <>
    <MainRoutes />
    { loading && <SimpleBackdrop loading /> }
  </>
);

const mapStateToProps = ({common}) => ({
  loading: common?.loading,
});

App.defaultProps = {
  loading: false,
};

App.propTypes = {
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(App);
