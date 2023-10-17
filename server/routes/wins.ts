import { Router } from 'express'

import * as db from '../db/wins.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const wins = await db.getAllWins()

    res.json({ wins: wins.map((win) => win.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
