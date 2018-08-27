import React ,{Component}  from 'react';

class Card extends Component{

    constructor(props){
        super(props);

        console.log(props);
    }

    render(){
        return(
            <div class="card1">
                <span class="title">{this.props.obj.title.label}</span>
                <img src={this.props.obj['im:image'][2].label} class="img-album" />
                <p>Price <span class="price">{this.props.obj['im:price'].label}</span> </p>                              
                <div class="release">Month {this.props.obj['im:releaseDate'].attributes.label}</div>
                <button class="btn-more btn">See more</button>
            </div>
        );
    }
}

export default Card;