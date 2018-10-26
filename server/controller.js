const axios = require('axios'); 
id = 0; 

module.exports = {
    createUser: (req, res) => {
        const { email, name, pic } = req.body; 
        req.app.get('db').create_user({
            auth0_id: id,  
            email: email, 
            name: name, 
            picture: pic
        }).then(newUsers => {
            const newUser = newUsers[0]; 
            req.sessionuser = newUser; 
            res.redirect('/dashboard'); 
            id++; 
        }).catch(error => {
            console.log('--- error inserting user into databse', error); 
            res.status(500).send('An unexpected error happened server side'); 
        })
    }
}