const express = require( 'express' )
const tasksController = require( '../controllers/taskController' )
const router = express.Router()

router.get('/', tasksController.index)

router.get('/:id', tasksController.show)

 router.post('/', tasksController.store)

// router.put('/:id', tasksController.upgrade )
// router.delete('/:id', tasksController.delete )

module.exports = router