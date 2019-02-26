import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { teamsActions, routerActions } from './../../../actions';
import TeamContainer from './TeamContainer';
import * as Loadable from 'react-loadable';

import './styles.css';

// TODO add loading place holder
const Header = Loadable({
    loader: () => import('./../../common/Header'),
    loading: () => <span />,
});

class Teams extends PureComponent {
    componentWillMount() {
        if (!this.props.user) {
            this.props.routerPushRoute('/login');
        }
        this.props.teamsFetch();
    }

    render() {
        return (
            <div className="app">
                <Header />
                <div className='app__teams'>
                    {
                        Object.keys(this.props.teams.items).map(key => (
                            <TeamContainer key={this.props.teams.items[key].id} {...this.props.teams.items[key]} />
                        ))
                    }
                    <TeamContainer />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ teams, user }) {
    return {
        teams,
        user
    }
}

const mapDispatchToProps = {
    ...teamsActions,
    ...routerActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
