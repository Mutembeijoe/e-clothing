import React from 'react'
import  './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInwithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    state = {
        email : '',
        password : ''
    }

    handleOnSubmit = (e)=>{
        e.preventDefault()
        this.setState({email:'', password:''})
    }

    handleOnChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with email and password </span>
                <form onSubmit={this.handleOnSubmit}>
                    <FormInput label ="email" name="email" type="text" handleChange={this.handleOnChange} value={this.state.email} required/>
                    <FormInput label ="password" name="password" type="password" onChange={this.handleOnChange} value={this.state.password} required/>
                    <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInwithGoogle} signInwithGoogle>Google Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;