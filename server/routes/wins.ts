import { Router } from 'express'

import * as db from '../db/wins.ts'
import { WinData } from '../../models/wins.ts'

const router = Router()

// GET /api/v1/wins
router.get('/', async (req, res) => {
  try {
    const wins = await db.getAllWins()
    res.json({ wins }) // just res.json({wins})???
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
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
router.get('/:winType', async (req, res) => {
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
    const newWin = req.body.newWin as WinData
    if (!newWin) {
      res.sendStatus(400)
      return
    }
    const win = await db.addWin(newWin)
    res.json({ win })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

export default router
