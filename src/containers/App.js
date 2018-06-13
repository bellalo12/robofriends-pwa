import React from 'react';
import CardList from '../components/CardList';
import {connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

import {setSearchField, requestRobots} from '../actions';

const mapStateToProps =state=>{
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=>dispatch(requestRobots())
  }
}

class App extends React.Component{
  componentDidMount(){
    this.props.onRequestRobots()
  }

  render(){
      const {robots, searchField, onSearchChange, isPending} = this.props;
      const filterRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
     return isPending
      ? <h1>Loading</h1>
      : (
    <div className='tc'>
    <h1 className='f1'>ROBOFRIENDS</h1>
    <SearchBox onSearchChange={onSearchChange}/>
    <Scroll>
      <ErrorBoundary>
          <CardList robots={filterRobots}/>
      </ErrorBoundary>
    </Scroll>
    </div>
  );
}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
