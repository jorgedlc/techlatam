import React ,{Component}  from 'react';

class Card extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card1">
                <span className="title">{this.props.obj.title.label}</span>
                <img src={this.props.obj['im:image'][2].label} className="img-album" />
                <p>Price <span className="price">{this.props.obj['im:price'].label}</span> </p>                              
                <div className="release">Month {this.props.obj['im:releaseDate'].attributes.label}</div>
                <button className="btn-more btn" id={this.props.obj.id.attributes['im:id']} onClick={this.props.fnDetail} >See more</button>
            </div>
        );
    }
}

export default Card;