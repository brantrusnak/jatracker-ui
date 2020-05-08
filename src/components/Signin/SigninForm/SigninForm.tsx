import React, { FormEvent } from 'react';

interface State {
    email: string;
    password: string;
}

export const SigninForm: React.FC = () => {
    const [form, setForm] = React.useState<State>({email: '', password: ''});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form);
    }

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={handleChange}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange}/>

        <input type="submit" value="Submit"/>
    </form>
    )
}
