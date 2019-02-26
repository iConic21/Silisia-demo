const core = require('./../../core');

const findUserById = async objectId => {
    return await core.schema.users.findById(objectId).findOne();
}

const findUserByEmail = async email => {
    return await core.schema.users.findOne({
        email
    });
}

const findUserByDisplayName = async (display_name, userIndex) => {
    return await core.schema.users.findOne({
        display_name,
        userIndex
    });
}

const me = async (req, res) => {
    if (!req.session) {
        return res.error && res.error('Unauthorized', 401);
    }

    const user = await findUserById(req.session.user.id);
    if (!user) {
        return res.error('user info not found', 500);
    }

    return res.ok(getUserPublic(user), 200);
}

const getUserPublic = user => {
    return {
        id: user._id.toString(),
        display_name: user.display_name,
        email: user.email,
        userIndex: user.userIndex,
        created_on: user.created_on || new Date()
    }
}

module.exports = {
    findUserById,
    findUserByEmail,
    findUserByDisplayName,
    me,
    getUserPublic
}