import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import classes from './App.css';
import CharacterContext from '../context/character-context';
import Spinner from '../components/UI/Spinner/Spinner';
import Layout from '../hoc/Layout/Layout';

const App = props => {

  useEffect(()=> {
    props.autoInitListHandler()
    console.log(props)
    // eslint-disable-next-line
  }, []);

  const [characterId, setCharacterId] = useState(1);
  const setId = (id) => {
    setCharacterId(id)
  }

  return (
    <div className={classes.App} >
      {props.isLoading ? <Spinner /> : 
      <CharacterContext.Provider value={{characterId, setCharacterId: setId}}>
        <Layout />
      </CharacterContext.Provider>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.listReducer.isLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    autoInitListHandler: () => dispatch(actions.autoInitList())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);