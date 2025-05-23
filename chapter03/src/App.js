import React, { Component } from 'react';
import Products from './Products';
import { Button, Toast, ToastContainer } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }

  toggleToast = () => {
    this.setState({ showToast: !this.state.showToast });
  };

  render() {
    const isValid = true;

    return (
      <div className="p-3">
        <Products />

        <Button 
          variant="warning" 
          disabled={!isValid} 
          onClick={this.toggleToast}
        >
          🎉 Click Me
        </Button>

        <ToastContainer position="top-end" className="p-3">
          <Toast 
            show={this.state.showToast} 
            onClose={() => this.setState({ showToast: false })} 
            bg="info"
            delay={3000} 
            autohide
          >
            <Toast.Header>
              <strong className="me-auto">Bootstrap Toast</strong>
            </Toast.Header>
            <Toast.Body>🔥 You clicked the magic button!</Toast.Body>
          </Toast>
        </ToastContainer>

        <div className="mt-4">
          <Rating rating="1" />
          <Rating rating="2" />
          <Rating rating="3" />
          <Rating rating="4" />
          <Rating rating="5" />
        </div>
      </div>
    );
  }
}

export default App;
