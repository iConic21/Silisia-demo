import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Classes,
    Dialog,
    Intent,
    InputGroup
} from "@blueprintjs/core";
import { teamsActions } from './../../../actions';

class NewTeam extends PureComponent {
    render() {
        return (
            <Dialog icon="people" onClose={this.handleClose} title="New Team" isOpen={this.props.isOpen} className='app__project__modal' >
                <div className={Classes.DIALOG_BODY}>
                    <InputGroup onBlur={this.handleNameChange} className={Classes.FILL}  placeholder="Team Name" />
                </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Button onClick={this.handleCreate} intent={Intent.PRIMARY} >Create</Button>
                    </div>
                </div>
            </Dialog>
        )
    }

    handleClose = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    };
    handleNameChange = event => this.setState({ name: event.target.value });
    handleCreate = () => {
        this.props.teamsPost({
            name: this.state && this.state.name
        });
        this.handleClose();
    }
}

const mapDispatchToProps = {
    ...teamsActions
};

export default connect(null, mapDispatchToProps)(NewTeam);