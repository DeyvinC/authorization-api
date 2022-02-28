const { connectDb } = require('./dbConnect')
exports.createUser = (req, res) => {

    // first, lets do some validation.. (email, password)
    if(!req.body || !req.body.email || !req.body.password) {
        // invalid request
        res.status(400).send('Invaild request')
        return
    }
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        isAdmin: false,
        userRole: 5,
    }

    const db = connectDb()
    db.collection('users').add(newUser)
    .then(doc => {
        // TODO: create a JWT and send back the token
        res.status(201).send('Account created')
    })
    .catch(err => res.status(500).send(err))

}