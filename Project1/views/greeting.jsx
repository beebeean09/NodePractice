const React = require('react');

class Greeting extends React.Component{

  render() {
    const name = this.props.name;
    return(
      <div>
        <h1>Hello my name is {name}!</h1>
        <h2>It's very nice to meet you.</h2>
      </div>
    );
  }
}

module.exports = Greeting;
