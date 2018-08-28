import React , {Component} from 'react';

class Detail extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="detail">
            <a className="return-list" onClick={this.props.fnReturnList} >Return to List</a>

                <div className="container">
                    <div className="row">
                        <h1 className="album-name">{this.props.obj.title.label}</h1>
                    </div>
                    <div className="row">                        
                        <div className="col s12 m6 l6">
                            <img className="responsive-img  img-container" src={this.props.obj['im:image'][2].label} />
                        </div>                        
                        <div className="col s12 m6 l6">
                        
                            <p><span className="label-description">Category</span> {this.props.obj.category.attributes.term} </p>                              
                            <p><span className="label-description">Artist</span> {this.props.obj['im:artist'].label} </p>                              
                            <p><span className="label-description">Price</span> {this.props.obj['im:price'].label+' '+this.props.obj['im:price'].attributes.currency} </p>                              
                            <p><span className="label-description">Items</span> {this.props.obj['im:itemCount'].label} </p>                                 
                            <p><span className="label-description">Release Date</span> {this.props.obj['im:releaseDate'].attributes.label} </p>                                 
                            <p><span className="label-description">Rights</span> {this.props.obj.rights.label} </p>                                 
                        </div>
                    </div>                                        

                </div>
            </div>
        );
    }
}

export default Detail;
