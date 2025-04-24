import React, { Component } from 'react';

// 1. Définir une interface pour le state
interface CounterState {
  count: number;
}

// 2. Composant de classe avec typage du state
class Counter extends Component<{}, CounterState> {
  // 3. Initialiser le state avec typage
  state: CounterState = {
    count: 0,
  };

  // 4. Méthode d'incrémentation
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // 5. Méthode de rendu
  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
