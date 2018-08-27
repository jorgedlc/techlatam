import React , {Component} from 'react';

class Nav extends Component{

    render(){

        return(

        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo"><img src="https://www.gfxmag.com/wp-content/uploads/2016/07/apple-itunes-vector-logo.png" width="75"/></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
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