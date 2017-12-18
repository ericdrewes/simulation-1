import React, { Component } from 'react';

export default class Shelf extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            placeholder: ''
        }
    }
        render(){
            return(
                <div className="Shelf">
                    
                        <button > Button {this.state.name}</button>
                </div>

            )
        }
    
}