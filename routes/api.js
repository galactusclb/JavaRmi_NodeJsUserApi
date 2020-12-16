const express = require('express')

const router = express.Router();

const users = [
    {
        _id: 10,
        uname: "chanaka",
        password: "Chanaka123@",
        email: "chanakaBalasuriya@gmail.com",
        role: "admin"
    },
    {
        _id: 12,
        uname: "lakshan",
        password: "Chanaka",
        email: "ggwp@gmail.com",
        role: "user"
    },
    {
        _id: 20,
        uname: "eminem",
        password: "Chanaka123@",
        role: "user"
    },
    {
        _id: 22,
        uname: "tony",
        password: "stark123@",
        role: "user"
    }
]

router.get('/gg', (req, res) => {
    res.send('login api')
})


router.post('/login', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 10000));

    try {
        console.log(req.body)

        role = null

        users.forEach(element => {
            if (element['uname'] == req.body.name && element['password'] == req.body.password) {
                role = element['role'];
            }
        });

        console.log(role)
        if (role) {
            res.status(200).json({ "role": role })
        } else {
            res.status(400).json({ "message": "wrong" })
        }

    } catch (error) {
        res.status(400).send('wrong')
        console.log(error)
    }
})

router.get('/userdetails', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log(req.query)

    try {
        data = {}

        users.forEach(element => {
            if (element['uname'] == req.query.uname) {
                data = {
                    _id: element['_id'],
                    uname: element['uname'],
                    role: element['role'],
                    email: element['email'],
                }
            }
        });

        console.log(data)
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(400).json({ "message": "wrong" })
        }

    } catch (error) {
        console.log(error)
    }
})

router.post('/updatepassword', async (req, res) => {
    try {
        console.log(req.body)
        output = false

        users.forEach(element => {
            if (element['uname'] == req.body.uid) {
                element['password'] = req.body.password;
                output = true
            }
        });

        if (output) {
            res.status(200).json({ "message": "success" })
        } else {
            res.status(400).json({ "message": "wrong" })
        }

    } catch (error) {
        res.status(400).send('wrong')
        console.log(error)
    }
})

module.exports = router;