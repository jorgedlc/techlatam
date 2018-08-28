import React , {Component} from 'react';

class Nav extends Component{

    render(){
        return(
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo"><img className="logo" src={this.props.logo} width="75"/></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">All categories</a></li>
              <li><a href="#">More Music</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
        </nav>
        );
    }
}


export default Nav;