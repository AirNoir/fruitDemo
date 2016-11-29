import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFruit } from '../actions/index';

class  FruitSelector extends Component {

  constructor(props){
  		super(props);
  		this.state ={ type:''};
      console.log(props);
  	}

  onFruitClick(event){
    //console.log(event.target.value);
    //let fruitType = event.target.value;
    //alert(fruitType);
    //this.props.selectFruit(fruitType);
  }


  render(){
    let fruits = this.props.fruits;
    let fruitsLink = [];
    for (var item in fruits) {
      fruitsLink.push(<li>
        <a onClick={this.props.onFruitClick.bind(this,item)} className="btn btn-mod btn-border btn-large btn-round" >{item}</a>
        </li>);
    }

    console.log(fruitsLink);

    return(
      <div className="widget">
        <h5 className="widget-title font-alt">挑選..</h5>
        <div className="widget-body">
        <ul className="clearlist widget-menu">
{fruitsLink}
          </ul>
        </div>
      </div>
  );
}
}

// <li><a onClick={this.props.onFruitClick.bind(this,'芭樂')} className="btn btn-mod btn-border btn-large btn-round" >芭樂</a></li>
// <li><a onClick={this.onFruitClick('西瓜')} className="btn btn-mod btn-border btn-large btn-round" >西瓜</a></li>
// <li><a onClick={this.onFruitClick('蓮霧')} className="btn btn-mod btn-border btn-large btn-round" >蓮霧</a></li>
// <li><a onClick={this.onFruitClick('蘋果')} className="btn btn-mod btn-border btn-large btn-round" >蘋果</a></li>

export default FruitSelector
