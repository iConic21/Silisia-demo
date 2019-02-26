import types from './types';

const projects = [
    {
        id: 0,
        name: 'design',
        itemsCount: 10,
        lastUpdated: '1 Hour ago',
        color: '#2f3136',
        teamId: 0
    }, {
        id: 1,
        name: 'Silisia',
        itemsCount: 203,
        lastUpdated: '5 Hour ago',
        color: '#2f3136',
        imageUrl: '',
        teamId: 1
    }, {
        id: 2,
        name: 'Features',
        itemsCount: 22,
        lastUpdated: '5 Hour ago',
        color: '#2f3136',
        imageUrl: '',
        teamId: 1
    }, {
        id: 3,
        name: 'Infrastructure',
        itemsCount: 22,
        lastUpdated: '5 Hour ago',
        color: '#003366',
        teamId: 1
    }, {
        id: 4,
        name: 'Tech Debt',
        itemsCount: 22,
        lastUpdated: '5 Hour ago',
        color: '#003',
        teamId: 1
    }, {
        id: 5,
        name: 'Ideas',
        itemsCount: 203,
        lastUpdated: '5 Hour ago',
        color: '#99c',
        teamId: 1
    }, {
        id: 6,
        name: 'Marketing',
        itemsCount: 22,
        lastUpdated: '5 Hour ago',
        color: '#936',
        teamId: 1
    }, {
        id: 7,
        name: 'Dev',
        itemsCount: 203,
        lastUpdated: '2 Hour ago',
        color: '#003366',
        teamId: 2
    }, {
        id: 8,
        name: 'Desgin',
        itemsCount: 22,
        lastUpdated: '2 Hour ago',
        color: '#003366',
        teamId: 2
    }, {
        id: 9,
        name: 'Logs',
        itemsCount: 22,
        lastUpdated: '5 Hour ago',
        color: '#2f3136',
        teamId: 2
    }
]

const projectsFetchForTeam = id => async dispatch => {
    const selectedProjects = projects.filter(p => p.teamId === id);

    dispatch({
        type: types.PROJECTS_FEATCH_FOR_TEAM,
        payload: {
            teamId: id,
            projects: selectedProjects
        }
    })
};

const projectCreate = (project, teamId) => async dispatch => {
    dispatch({
        type: types.PROJECTS_POST_PROJECT,
        payload: {
            ...project,
            itemsCount: 0,
            lastUpdated: 'just now',
            color: '#2f3136',
            teamId,
            id: Math.random().toString(36).substring(7)
        }
    })
}

export default {
    projectsFetchForTeam,
    projectCreate
}