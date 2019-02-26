import types from './../../actions/projects/types';

const defaultValue = {
    projects: {},
    teamProjects: {}
};

export default (state = defaultValue, action) => {
    switch (action.type) {
        case types.PROJECTS_FEATCH_FOR_TEAM:
            const projectObj = {...state.projects}
            action.payload.projects.forEach(element => {
                projectObj[element.id] = element;
            });
            return {
                ...state,
                teamProjects: {
                    ...state.teamProjects,
                    [action.payload.teamId]: action.payload.projects
                },
                projects: projectObj
            }
        case types.PROJECTS_POST_PROJECT:
        console.log(state);
            return {
                ...state,
                teamProjects: {
                    ...state.teamProjects,
                    [action.payload.teamId]: [
                        ...state.teamProjects[action.payload.teamId],
                        action.payload
                    ]
                },
                projects: {
                    ...state.projects,
                    [action.payload.id]: action.payload
                }
            }
        default:
            return state;
    }
}