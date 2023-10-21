import { Router } from 'express'

import * as db from '../db/winsDb.ts'
import { WinData } from '../../models/wins.ts'

const router = Router()

// GET /api/v1/wins
router.get('/', async (req, res) => {
  try {
    const wins = await db.getAllWins()
    res.json({ wins }) // res.json({ wins: wins })
  } catch (error) {
    res.status(500).json({ message: 'error' })
  }
})

// GET /api/v1/wins/:winId
router.get('/:winId', async (req, res) => {
  try {
    const winId = Number(req.params.winId)
    if (isNaN(winId)) {
      res.sendStatus(400)
      return
    }
    const win = await db.getWinById(winId)
    res.json({ win })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// GET /api/v1/wins/:winType
router.get('/type/:winType', async (req, res) => {
  try {
    const winType = String(req.params.winType)
    const wins = await db.getWinsByType(winType)
    res.json({ wins })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// POST /api/v1/wins
router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const newWin = req.body as WinData
    if (!newWin) {
      res.sendStatus(400)
      return
    }
    const win = await db.addWin(newWin)
    console.log(win)
    res.json({ win }) // just the newly added win right?
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// Define a PATCH route to update a url by its ID.
router.patch('/:id', async (req, res) => {
  const WinId = Number(req.params.id) // Retrieve the url ID from the route parameters and convert it to a number.
  const updatedData = req.body // Retrieve the updated data from the request body.

  const updatedWin = await db.updateWin(WinId, updatedData) // Use the updateUrl function to update the url in the database and await the promise it returns.
  res.json(updatedWin[0]) // Respond with the data of the updated url in JSON format.
})

// Define a DELETE route to remove a url by its ID.
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id) // Retrieve the url ID from the route parameters and convert it to a number.
    const result = await db.deleteWin(id) // Use the deleteWin function to remove the url from the database and await the promise it returns.
    if (result) {
      res.status(200).send({ message: 'Win deleted successfully' }) // Respond with a success message if the url was successfully deleted.
    } else {
      res.status(404).send({ message: 'Win not found' }) // Respond with a 404 status code and error message if the url was not found in the database.
    }
  } catch (error) {
    res.status(500).send({ message: 'Server error', error: error.message }) // Respond with a 500 status code and error message if an error occurs during the process.
  }
})

export default router
