/**
 * The Index of Routes
 */

module.exports = function (app) {

    // The signup route
    app.use('/signup', require('./routes/signup'));

    //The user route
    app.use('users', require('./routes/users'));
}
