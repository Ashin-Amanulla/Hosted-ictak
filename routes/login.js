const express = require('express');
const router = express.Router();

const { signAccessToken,
    signRefreshToken,
    verifyRefreshToken } = require('../helpers/jwt_helper')

//! Currently deactivated since a bug has occured after hosting.Please refer news route 


router.post('/login', async (req, res, next) => {

    try {

        let email = req.body.data.email;
        let password = req.body.data.password

        if (email != 'admin@ictak' || password != 'ictakAdmin@12345') {

            console.log("false")
            return false
        }
        else {
            console.log("true")
            let role = 'ADMIN';
            const accessToken = await signAccessToken(role)
            res.send({ accessToken })
        }

    }



    catch (error) {
        console.log(error)
    }
})


module.exports = router;