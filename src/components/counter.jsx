import React, { Component } from 'react';

class Counter extends Component {
    
    state= {
        value:this.props.value
    };

    render() { 
    return (
    <React.Fragment>
            <br></br>
            <span className={ this.getBadgeClass() }>{this.formatCount()}</span>        
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={()=> this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
    </React.Fragment>);
    }

    
    handleIncrement = () =>
    {
        this.setState( {value: this.state.value+1} );
        console.log(this.props);
    };

    formatCount(){
        const { value: count } = this.state;
        return count ===0 ?'Zero':count;
    }

    getBadgeClass()
    {
        let classes="badge m-2 badge-";
        if(this.state.value===0)
        {
            classes+="warning";
        }
        else
        {
            classes+="primary";
        }
        return classes;
    }
}
 
export default Counter;