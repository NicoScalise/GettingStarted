const auth = (req, res, next) => {
    const {user} = req.query
    if (user == 'Nico'){
        console.log('accesso effettuato')
        next()
    }else{
        res.status(401).send('Non autorizzato')
    }
    
    
}

module.exports = auth



