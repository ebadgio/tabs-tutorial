import React, { Component } from 'react'

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            tabNumer: props.tabNumber
        };
    }

    render() {

        let {isActive} = this.props;
    
        return (
            <li className={isActive ? "is-active" : ""} 
                onClick={() => this.props.handleClick(this.state.tabNumer)}>
                <a>
                    <span>{this.state.title}</span>
                </a>
            </li>
        )
  }
}

export default Tab;
