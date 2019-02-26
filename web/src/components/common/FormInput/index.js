import React, { PureComponent } from 'react';
import {
    Icon,
    InputGroup
} from "@blueprintjs/core";
import './styles.css';

class FormInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            value: '',
            input: null
        };
    }

    render() {
        return (
            <div className={`app__formInput ${this.state.focus ? 'focus': ''}`} onClick={this.handleClick}>
                <div className='app__formInput__icon'>
                    <Icon icon={this.props.icon} iconSize={30} />
                </div>
                <div className='app__formInput__inputContainer'>
                    <div className='app__formInput__inputContainer__label'>
                        <span>{this.props.label}</span>
                    </div>
                    {
                        (this.state.focus || this.state.value) && (
                            <div className='app__formInput__inputContainer__input'>
                                <InputGroup {...this.props.inputProps} autoFocus={true} onBlur={this.handleBlur} className='app__formInput__inputContainer__input__item' inputRef={this.setInputRef} />
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }

    handleClick = () => {
        this.setState({ focus: true }, () => {
            if (this.state.input) {
                this.state.input.focus();
            }
        });
    }
    handleBlur = event => {
        const value = event.target.value;
        if (this.state.value !== value) {
            this.setState({ value });
            if (this.props.onValueChange) {
                this.props.onValueChange(value);
            }
        }
        
        this.setState({ focus: false });
    }
    setInputRef = input => this.setState({ input });
}

export default FormInput;