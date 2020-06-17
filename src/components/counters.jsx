import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {
        counters:
        [
            {id:1, value: 0},
            {id:2, value: 0},
            {id:3, value: 0},            
        ]
      }
    
    render() { 
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => <Counter key={counter.id} id={ counter.id} onDelete={  this.handleDelete} value={counter.value} > </Counter>)}
            </div>
            
        );
    }

    handleReset = () =>
    {
        const counters =this.state.counters.map(c => {
            c.value=0;
            return c;
        });
        this.setState( { counters } );
    };

    handleDelete = (counterID) =>
    {
        console.log(counterID);
        const counters =this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters  });
    };
}
 
export default Counters;