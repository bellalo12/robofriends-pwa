import React from 'react';

class ErrorBoundry  extends React.Component{
  constructor(props){
    super(props);
    this.state={
      hasError: false
    }
  }

  componetDidCatch(error, info){
    this.setState({hasError: true})
  }

  render(){
    if(this.state.hasError){
      return <h1>Ooooops something goes wrong</h1>
    }
    return this.props.children
  }
}



export default ErrorBoundry;
