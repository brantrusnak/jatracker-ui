import React, { FormEvent } from 'react';

interface State {
    email: string;
    password: string;
    repeatPassword: string;
}

export class SignupForm extends React.Component {
    state: State = {
        email: '',
        password: '',
        repeatPassword: ''
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(this.state.password === this.state.repeatPassword) {
            console.log(this.state);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={this.handleChange}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={this.handleChange}/>

                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" name="repeatPassword" onChange={this.handleChange}/>

                <input type="submit" value="Submit"/>
            </form>
        )
    }

};