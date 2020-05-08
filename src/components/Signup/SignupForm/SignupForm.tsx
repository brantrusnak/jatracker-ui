import React, { FormEvent } from 'react';

interface State {
    email: string;
    password: string;
    repeatPassword: string;
}

export const SignupForm: React.FC = () => {
    const [form, setForm] = React.useState<State>({email: '', password: '', repeatPassword: ''});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (form.password === form.repeatPassword) {
            console.log(form);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange} />

            <label htmlFor="repeatPassword">Repeat Password</label>
            <input type="password" name="repeatPassword" onChange={handleChange} />

            <input type="submit" value="Submit" />
        </form>
    )
}
