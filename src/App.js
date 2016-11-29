import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './css/style.css';
import './css/bootstrap.min.css';
import FruitSelector from './containers/fruit_Selector';
import FruitDetail  from './containers/fruit_Detail';
import {selectFruit} from './actions/index';
import {connect}   from 'react-redux';


class App extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="appear-animate">
      <div className="page">
        <section className="page-section">
          <div className="container relative">
          <div className="row">
            <div className="col-sm-4 col-md-3 sidebar">
              <FruitSelector fruits={this.props.fruits.fruits} onFruitClick={this.props.onFruitClick}/>
            </div>
            <div className="col col-md-8">
             <FruitDetail description={this.props.fruits.description} />
            </div>
          </div>
          </div>
        </section>
      </div>
      </div>
    );
  }
}
//export default App;

const mapStateToProps = (state) => {

  return {
    fruits: state.fruits,
    description: state.description,
    selectedFruit: state.selectedFruit,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFruitClick: (type) => {
      dispatch(selectFruit(type))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default AppContainer;
