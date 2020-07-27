import React, { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import DishDetails from './DishdetailComponent';
import About from './AboutUsComponent';
import { Switch, Route,Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comment';
import {LEADERS} from '../shared/leader';
import {PROMOTIONS} from '../shared/promotion';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments:COMMENTS,
        leaders:LEADERS,
        promotions:PROMOTIONS,
    };
  }


  render() {
    const HomePage=()=>{
      return(
        <Home 
              dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
              promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
              leader={this.state.leaders.filter((leader)=>leader.featured)[0]}        
        />
      )
    }
    const DishWithId = ({match}) => {
      
      return(
          <DishDetails
           dishes={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.ID))[0]} 
           comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.ID))} />    
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/aboutus" component={()=><About leaders={this.state.leaders}/>}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
          <Route exact path="/menu/:ID" component={DishWithId}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;