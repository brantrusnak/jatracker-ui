import React, { FormEvent } from 'react';

interface State {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export class SignupForm extends React.Component {
    state: State = {
        email: '',
        username: '',
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
        console.log(this.state);
        console.log(this.state.password === this.state.repeatPassword);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={this.handleChange}/>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={this.handleChange}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={this.handleChange}/>

                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" name="repeatPassword" onChange={this.handleChange}/>

                <input type="submit" value="Submit"/>
            </form>
        )
    }

};