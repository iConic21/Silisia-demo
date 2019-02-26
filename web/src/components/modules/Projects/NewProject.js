import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Classes,
    Dialog,
    Intent,
    InputGroup
} from "@blueprintjs/core";
import { projectsActions } from './../../../actions';

class NewProject extends PureComponent {
    render() {
        return (
            <Dialog icon="folder-new" onClose={this.handleClose} title="New Project" isOpen={this.props.isOpen} className='app__project__modal' >
                <div className={Classes.DIALOG_BODY}>
                    <InputGroup onBlur={this.handleNameChange} className={Classes.FILL}  placeholder="Project Name" />
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
        this.props.projectCreate({
            name: this.state && this.state.name
        }, this.props.teamId);
        this.handleClose();
    }
}

const mapDispatchToProps = {
    ...projectsActions
};

export default connect(null, mapDispatchToProps)(NewProject);