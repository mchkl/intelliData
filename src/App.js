import React, { useEffect } from 'react';
import { css } from 'glamor';
import { connect } from 'react-redux';
import Main from './pages/Main';
import globalStyle from './style';
import { fetchData } from './store/actions';

const App = ({ startFetching, data = {} }) => {
  useEffect(() => {
    startFetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App" {...css(globalStyle)}>
      <Main data={data} />
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.generalReducer.data
});

const mapDispatchToProps = dispatch => ({
  startFetching: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
