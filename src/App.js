import React from 'react';
//import PropTypes from 'prop-types';
import Bad from './components/Bad';
import Good from './components/Good';
import ErrorBoundary from './components/ErrorBoundary';

function App() {

  // class Counter extends Component {
  //   static propTypes = {
  //     count: PropTypes.number
  //   }

  //   state = {
  //     count: 0
  //   }

  //   onClick(e) {
  //     this.setState({
  //       count: this.state.count + 1
  //     });
  //     console.log(e);
  //   }

  //   render() {
  //     return (
  //       this.state.count,
        
  //       <div>
  //         <button onClick={this.onClick.bind(this)}>Good or Bad?</button>
  //       </div>
  //     );
  //   }
  // }

  //function yeaOrNay(tally) {
  const yeaOrNay = Math.floor((Math.random() * 10) + 1);
  if(yeaOrNay % 2 === 0) {
    return (
      <ErrorBoundary>
        <Good />
      </ErrorBoundary>
    );
  } else {
    return (
      <ErrorBoundary>
        <Bad />
      </ErrorBoundary>
    );
  }
}

export default App;
