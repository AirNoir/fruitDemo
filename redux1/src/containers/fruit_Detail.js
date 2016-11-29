import React,{Component} from 'react';
import pic1 from  '../images/portfolio/full-project-1.jpg';
import pic2 from  '../images/portfolio/full-project-2.jpg';
import pic3 from  '../images/portfolio/full-project-3.jpg';
import '../css/owl.carousel.css';
 //import $ from 'jquery';
//import owlCarousel from 'owl.carousel';

export default class  FruitDetail extends Component {

   constructor(props){
      super(props);
      console.log(props);
   }
  componentDidMount(){
    // setTimeout(function(){
    //   $("#owl").owlCarousel({
    //     navigation : true, // Show next and prev buttons
    //  slideSpeed : 300,
    //  paginationSpeed : 400,
    //  singleItem:true
    //   });
    //
    // },2000)
  }

  render(){
    const wrapperStyle={
      width: '3702[x]',
      left: '0px',
      display: 'block',
      transition: 'all 350ms ease',
      transform: 'translate3d(0px, 0px, 0px)'
    };

    const owlStyle = {
       opacity: 1,
       display: 'block'
    };

    const photoStyle={
      width: '617px'
    };

    const item ={
      display:'block',
      width: '500px',
      height: 'auto'
    }


    return(
      <div className="col-sm-8 col-md-offset-1">
          <div className="blog-item">
          <h2 className="blog-item-title font-alt"><a href="blog-single-sidebar-left.html">Buy Now!</a></h2>

                <div  className="blog-media">
                    <div id="owl" >
                       <div href="#"><img src={pic1} alt=""/></div>
                      <p>{this.props.description}</p>
                    </div>
                </div>
          </div>
      </div>

  );
  }
}
