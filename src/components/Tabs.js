import React, { Component } from 'react'
import Tab from './Tab';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let {activeTab} = this.props;

        return (
            <div className="tabs is-boxed is-medium">
                <ul>
                    <Tab title={"Hello React"}
                         handleClick={this.props.handleTabChange}  
                         tabNumber={0}
                         isActive={activeTab === 0}/>
                    <Tab title={"Lorem Ipsum"} 
                         handleClick={this.props.handleTabChange}
                         tabNumber={1}
                         isActive={activeTab === 1}  />
                    <Tab title={"Login Form"}
                         handleClick={this.props.handleTabChange} 
                         tabNumber={2}
                         isActive={activeTab === 2} />
                
                </ul>
            
            </div>
        )
    }
}

export default Tabs;
