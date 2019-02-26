import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../../common/FormInput';
import { IconNames } from '@blueprintjs/icons';
import { Button } from "@blueprintjs/core";
import { routerActions } from './../../../../actions';

import './styles.css';

class LoginPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            invalid: true
        };
    }

    componentDidMount() {
        this.checkUserLogin();
    }

    componentDidUpdate() {
        this.checkUserLogin(true);
    }

    render() {
        return (
            <div className='app__login'>
                <div className='app__login__title'>Welcome Back :)</div>
                <form className='app__login__form' onSubmit={this.handleFormSubmit} >
                    <div className='app__login__form__inputs'>
                    <FormInput icon={IconNames.ENVELOPE} label='Email Address' onValueChange={this.handleValueChange.bind(this, 'email')} />
                    <FormInput icon={IconNames.LOCK} label='Password' onValueChange={this.handleValueChange.bind(this, 'password')} inputProps={{
                        type: 'password'
                    }} />
                    </div>
                    {this.props.invalid && <div>Invalid user!</div>}
                    <Button className='app__login__form__submit' type='submit'>Login</Button>
                </form>
            </div>
        );
    }

    checkUserLogin = isUpdate => {
        if (!this.props.user) {
            if (isUpdate) {
                this.setState({
                    invalid: true
                })
            }
            return;
        }

        this.props.routerPushRoute('/');
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.userLogin(this.state.email, this.state.password);
    }

    handleValueChange = (propName, value) => {
        this.setState({
            [propName]: value
        })
    }
}

function mapStateToProps({ user }) {
    return {
        user
    }
}

const mapDispatchToProps = {
    ...routerActions
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);