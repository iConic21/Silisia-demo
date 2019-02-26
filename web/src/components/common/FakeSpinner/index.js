import React, { PureComponent } from 'react';
import { Spinner, Intent } from "@blueprintjs/core";

class FakeSpinner extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    componentDidMount() {
        const interval = setInterval(() => {
            if (this.state.value >= 0.95) {
                clearInterval(interval);
                return;
            }

            this.setState({ value: this.state.value+0.05 });
        }, 100);
    }

    render() {
        return (
            <Spinner intent={Intent.PRIMARY} size={100} value={this.state.value} {...this.props} />
        );
    }
}

export default FakeSpinner;