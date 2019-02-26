const core = require('../core');

const userSchema = core.mongoose.Schema({
    display_name: String,
    email: String,
    userIndex: Number,
    password_hash: String,
    password_salt: String,
    status: Number,
    tokens: [
        {
            token: String,
            tokenType: Number,
            expire_on: Date
        }
    ],
    created_on: Date,
    updated_on: Date
});

userSchema.pre("save", next => {
    const now = new Date();

    if (!this.created_on) {
        this.created_on = now;
    }
    
    this.updated_on = now;
    next();
});

module.exports.public = user => {
    return {
        id: user._id.toString(),
        display_name: user.display_name,
        email: user.email,
        userIndex: user.userIndex,
        created_on: user.created_on || new Date()
    }
}

module.exports = userSchema;