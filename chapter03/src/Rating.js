import React, { Component } from 'react';
import { BiData } from "react-icons/bi"; // The icon you want to use

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = { rating: this.props.rating };
    }

    handleClick(ratingValue) {
        this.setState({ rating: ratingValue });
    }

    renderDataIcon(index) {
        // Show colored icon if selected, gray if not
        return (
            <BiData
                key={index}
                onClick={() => this.handleClick(index)}
                style={{
                    cursor: 'pointer',
                    fontSize: '30px',
                    color: this.state.rating >= index ? '#2196F3' : '#B0BEC5' // blue if selected, gray if not
                }}
            />
        );
    }

    render() {
        return (
            <div>
                <h1>Rating: {this.state.rating}</h1>
                {[1, 2, 3, 4, 5].map((index) => this.renderDataIcon(index))}
            </div>
        );
    }
}

export default Rating;
