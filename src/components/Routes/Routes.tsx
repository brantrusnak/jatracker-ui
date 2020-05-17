import React from 'react';
import { Switch } from "react-router-dom"
import { Jobs } from "../Jobs/Jobs"
import { Signin } from '../Signin/Signin';
import { Signup } from '../Signup/Signup';
import { Landing } from '../Landing/Landing';
import { AuthorizedRoute } from './AuthorizedRoute';
import { UnauthorizedRoute } from './UnauthorizedRoute';
import { Settings } from '../Settings/Settings';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <AuthorizedRoute path='/jobs'><Jobs /></AuthorizedRoute>
            <AuthorizedRoute path='/settings'><Settings /></AuthorizedRoute>
            <UnauthorizedRoute path="/signin"><Signin /></UnauthorizedRoute>
            <UnauthorizedRoute path="/signup"><Signup /></UnauthorizedRoute>
            <UnauthorizedRoute path="/"><Landing /></UnauthorizedRoute>
        </Switch>
    )
}