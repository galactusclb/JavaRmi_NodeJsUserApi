const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const apiRoutes = require('./routes/api');
const app = express();

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on port ${process.env.PORT || 3000}`)
})

app.get('/', (req, res) => {
    res.send('LX Login api for java rmi')
})

app.use('/api', apiRoutes);
