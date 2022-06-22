const express = require('express')
const app = express()
const path = require('path')
require('./helper/db')()
const { create } = require('express-handlebars')

const homeRouter = require('./routers/home')
const studentRouter = require('./routers/student')

const hbs = create({
    defaultLayout: 'layout',
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
})
// Handlebars engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', homeRouter)
app.use('/people', studentRouter)

try {
    const port = 5000
    app.listen(port, () => {
        console.log('Start with', port, 'port');
    })
} catch (error) {
    console.log(error);
}