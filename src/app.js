// // const express = require('express')
// // const path = require('path') // no need to install as it is built in node module
// // const app = express()

// // console.log(__dirname) // print directory name
// // console.log(__filename) // print file name
// // const publicDirectoryPath= path.join(__dirname,'../public')
// // app.set('view engine','hbs') //for setting up handlebar
// // app.use(express.static(publicDirectoryPath)) 
// // //app.get('',(req,res)=> {
// // //     res.send('<h1>Weather</h1>')
// // // })
// // app.get('',(req,res)=>{
// //     res.render('index',{
// //         title:'Weather App',
// //         name:'Andrew Head'
// //     })  //to render index.hbs 
// // })


// // // app.get('/help',(req,res)=>{
// // // res.send('Help Page')
// // // })
// // // // app.get('/about',(req,res)=>{
// // // //     res.send('About Page')
// // // //     })
// // //     app.get('/about',(req,res)=>{
// // //         res.send('<h1>About Page<h1>')
// // //         })
// //     // app.get('/weather',(req,res)=>{
// //     //     res.send('Your weather')
// //     //     })
// //         app.get('/weather',(req,res)=>{
// //             res.send({
// //                 forecast:'It is snowing',
// //                 location: 'Philadephia'
// //             })
// //             //data with html tag can also be added
// //         })
// //         app.get('/html',(req,res)=>{
// //             res.send('<h1>Your weather<h1>')
// //             })
// //             //we can also get json response
// //             app.get('/json',(req,res)=>{
// //                 res.send([{
// //                     name:'Andrew',
// //                     age:27
// //                 },
// //                 {
// //                     name:'Himanshu',
// //                     age:28
// //                 }])
// //             })
                

        
// // app.listen(3000,()=>{
// //     console.log('Server is up on port 3000')
// // })

// //-------------------------new
// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')
// const geocode = require('./utils/destructuregeocode')
// const forecast = require('./utils/destructureforecast')
// const app = express()
// //define paths for express config
// const publicDirectoryPath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views')
// const partialsPath = path.join(__dirname,'../templates/partials')

// //set up handlebar engine and views location
// app.set('view engine', 'hbs')
// app.set('views',viewsPath)
// hbs.registerPartials(partialsPath)

// //setup static directory to serve
// app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Index Mead'
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         name: 'About Mead'
//     })
// })

// app.get('/help', (req, res) => {
//     res.render('help', {
//         helpText: 'This is some helpful text.',
//         title:'Help',
//         name:'Help Mead'

//     })
// })

// app.get('/weather', (req, res) => {
//     if(!req.query.address)
//     {
//      return   res.send({
//             error:'You must provide an address'         //as two rquest we should not send
            
//         })
//     }
    
//     geocode(req.query.address,(error,{latitude,longitude,location})=>{
//         if(error)
//         {
//             return res.send({error})
//         }
//         forecast(latitude,longitude,(error,forecastData)=>{
//             if(error)
//         {
//             return res.send({error})
//         }
//        res.send(
//            {
//                forecast:forecastData,
//                location,
//                address:req.query.address
//            })

//         })
//     })

//     // res.send({
//     //     forecast: 'It is snowing',
//     //     location: 'Philadelphia', 
//     //     address: req.query.address
//     // })
// })


// app.get('/products',(req,res)=>{
    
//     if(!req.query.search)
//     {
//      return   res.send({
//             error:'You must provide a search term'         //as two rquest we should not send
            
//         })
//     }
//     console.log(req.query)
//     console.log(req.query.search)

//     res.send({
//         products: []
//     })
// })
// app.get('/help/*',(req,res)=>{res.send('Help article not found')})
// //app.get('*',(req,res)=>{res.send('My 404 page')})

// app.get('/help/*',(req,res)=>{res.render('404',{
//     title:'404',
//     name:'Andrew Mead',
//     errorMessage:'Help Page not found.'
    
    
// })})

// app.get('*',(req,res)=>{
//     res.render('404',{
//         title:'404',
//         name:'Andrew Mead',
//         errorMessage:'Page not found.'
        
        
//     })
// })
// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })

const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const port = process.env.PORT || 3000

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Andrew Mead'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port'+ 3000)
})