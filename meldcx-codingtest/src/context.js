import React, { Component } from 'react'

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        email:"", 
        password: ""
    };
    componentDidMount(){

    }
    handleSubmit = event => {
        event.preventDefault();
        console.log("test");
    }
    handleChangeData = (event,param) => {
        console.log(param);
        const value = event.target.value;
        if (param==="email"){
            const email = [...this.state.email];
            
            this.setState(()=>{
                return {email: value};
            })
        }
        else{
            const pass = [...this.state.password];
            this.setState(()=>{
                return {password: value}
            })
        }
        console.log(event.target.value);
        
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handleSubmit: this.handleSubmit,
                handleChangeData: this.handleChangeData
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }

}



const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer};