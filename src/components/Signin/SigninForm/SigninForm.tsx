import React, { FormEvent } from 'react';

interface State {
    email: string;
    password: string;
}

export class SigninForm extends React.Component {
    state: State = {
        email: '',
        password: ''
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={this.handleChange}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={this.handleChange}/>

                <input type="submit" value="Submit"/>
            </form>
        )
    }

};