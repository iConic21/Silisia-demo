import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { routerActions } from './../../../../actions';
import FakeSpinner from './../../../common/FakeSpinner';
import * as Loadable from 'react-loadable';
import './styles.css';

// TODO add loading place holder
const Header = Loadable({
    loader: () => import('./../../../common/Header'),
    loading: () => <span />,
});

class ProjectCentral extends PureComponent {
    componentWillMount() {
        if (!this.props.user) {
            this.props.routerPushRoute('/login');
        }
    }

    render() {
        return (
            <div className="app">
                <Header />
                <div className='app__project__central'>
                    <FakeSpinner className='app__project__central__loader' />
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCentral);