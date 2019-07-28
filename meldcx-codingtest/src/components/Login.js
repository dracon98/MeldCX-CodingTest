import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';

export default class Login extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const {handleChangeData, handleSubmit} = value;
                    return(
                    <LoginContainer >
                        <div className="container">
                            <div className="row">
                                <div id="login" className="col-12 mx-auto col-xs-10 col-sm-8 col-md-6 col-lg-4 my-3 text-center p-5">
                                <h1 className="text-title">Login</h1>
                                    <TextBox className="text-left text-field"><i className="fa fa-envelope"/><input type="text" name="email" placeholder="Email Address" className="text-box" onChange={(e)=>handleChangeData(e,"email")}/></TextBox>
                                    <TextBox className="text-left text-field"><i className="fa fa-exclamation-circle"/><input type="password" name="pass" placeholder="Password" className="text-box" onChange={(e)=>handleChangeData(e,"pass")}/></TextBox>
                                    <ButtonContainer1>Log in</ButtonContainer1>
                                </div>
                            </div>
                        </div>
                    </LoginContainer>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const TextBox = styled.div`
    .text-box{
        border: none;
        background: transparent;
        margin-left: 1rem;
        width:83%;
    }
    font-family: 'Darker Grotesque', sans-serif;
    text-transform: capitalize;
    margin: 0.5rem 0 0.5rem 0;
    padding: 0.5rem 0 0.5rem 1rem;
    border-radius: 0.5rem;

    background: #D3D3D3;
    .text-box:focus {
        outline: none;
    }
`;

const ButtonContainer1 = styled.button`
text-transform: uppercase;
font-size: 1rem;
font-family: 'Darker Grotesque', sans-serif;
background: var(--lightBlue);;
border-radius: 0.3rem;
cursor: pointer;

margin: 1rem 1rem 1rem 1rem;
padding: 0.5rem 1.2rem 0.5rem 1.2rem;
transition: all 0.5s ease-in-out;
&:hover{
    background:var(--darkBlue);
}
&:focus{
    outline:none;
}
`;

const LoginContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
    #login{
        background: var(--mainWhite);
        border: 0.04 rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
`;