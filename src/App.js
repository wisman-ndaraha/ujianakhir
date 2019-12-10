import React, { Component } from 'react';
import Background from '../src/daun.jpg';
class App extends Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.overlay}>
          <div style={styles.container}>

          </div>
        </div>
      </div>
    );
  }
}
let w = window.innerWidth;
let h = window.innerHeight;
const styles = {
  background: {
    display: 'flex',
    backgroundImage: `url(${Background})`,
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgoundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  overlay: {

    height: h,
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Pacifico'
  },
  h1: {
    alignSelf: 'center',
    marginTop: 50,
    color: 'black',
    fontSize: 48,
    textAlign: 'center',
    maxWidth: 700
  },
  h2: {
    color: 'orange',
    textAlign: 'center',
    maxWidth: 700
  },
  wrapperInput: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: 60
  },
  subTittle: {
    color: 'black',
    fontFamily: "Roboto",
    marginTop: 20
  },
}

export default App;

