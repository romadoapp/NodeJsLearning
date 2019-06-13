const express = require('express')
const bodyParer = require('body-parser')

const dishRouter = express.Router()

dishRouter.use(bodyParer.json())

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        next()
    })
    .get((req, res, next) => {
        if (req.params.id != nil) {
            res.end('Will send details of the dish: '
                + req.params.dishId + ' to you!')
        } else {
        res.end('Will send all the dishes to you!')
        }
    })
    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + ' with details '
            + req.body.description)
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('Put operation not supported on dishes')
    })
    .delete((req, res, next) => {
        res.end('Deleting all the dishes!')
    })

module.exports = dishRouter

// app.get('/dishes/:dishId', (req, res, next) => {
//     res.end('Will send details of the dish: '
//     + req.params.dishId + ' to you!')
// })

// app.post('/dishes/:dishId', (req, res, next) => {
//     res.statusCode = 403
//     res.end('Post operation not supported on dishes ' + req.params.dishId)
// })

// app.put('/dishes/:dishId', (req, res, next) => {
//     res.write('updating the dish :' + req.params.dishId)
//     res.end('will update the dish: ' + req.body.name + ' with details: ' + req.body.description)
// })

// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end('Deleting all the dishes!')
// })