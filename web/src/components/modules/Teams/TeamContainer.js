import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { projectsActions } from './../../../actions';
import ProjectCard from '../Projects/ProjectCard';
import {
    Button
} from "@blueprintjs/core";
import NewTeam from './NewTeam';

class TeamContainer extends PureComponent {
    componentDidMount() {
        this.props.projectsFetchForTeam(this.props.id);
    }

    render() {
        if (this.props.id === undefined) {
            return (
                <span>
                    <div className='app__teams__team app__teams__team--new' onClick={this.handleOpen}>
                        <span>+ New Team</span>
                    </div>
                    <NewTeam isOpen={this.state && this.state.isOpen} onClose={this.handleClose} />
                </span>
            )
        }
        const projectList = this.props.projects.teamProjects[this.props.id];
        return (

            <div className='app__teams__team'>
                <div className='app__teams__team__label'>
                    <span>{this.props.name}</span>
                    <Button className="bp3-minimal app__teams__team__label__config" icon='cog' />
                </div>
                <div className='app__teams__team__projectslist'>
                    {
                        projectList && projectList.map(project => <ProjectCard key={project.id} {...project} />)
                    }
                    <ProjectCard teamId={this.props.id} />
                </div>
            </div>
        );
    }

    handleOpen = () => this.setState({ isOpen: true });
    handleClose = () => this.setState({ isOpen: false });
}

function mapStateToProps({ projects }) {
    return {
        projects
    }
}

const mapDispatchToProps = {
    ...projectsActions
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer);