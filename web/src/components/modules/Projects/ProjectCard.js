import React, { PureComponent } from 'react';
import {
    Classes
} from "@blueprintjs/core";
import NewProject from './NewProject';
import { Link } from 'react-router-dom';
import './styles.css';

class ProjectCard extends PureComponent {
    render() {
        if (this.props.id === undefined) {
            return <span>
                <div className='app__project app__project--new' onClick={this.handleOpen}>
                    <span>+ New Project</span>
                </div>
                <NewProject teamId={this.props.teamId} isOpen={this.state && this.state.isOpen} onClose={this.handleClose} />
            </span>
        }

        return (
            <Link to={`team/${this.props.teamId}/project/${this.props.id}`}>
                <div className={`app__project ${Classes.ELEVATION_2}`} style={{ backgroundColor: this.props.color, backgroundImage: `url(${this.props.image})` }}>
                    <div className='app__project__label'>
                        {this.props.name}
                    </div>
                    <div className='app__project__info'>
                        <div className='app__project__info--left'>
                            {this.props.itemsCount} Items
                    </div>
                        <div className='app__project__info--right'>
                            Updated {this.props.lastUpdated}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    handleOpen = () => this.setState({ isOpen: true });
    handleClose = () => this.setState({ isOpen: false });
}

export default ProjectCard;