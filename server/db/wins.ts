import connection from './connection.ts'
import { Win, WinData } from '../../models/wins.ts'

const db = connection

export async function getAllWins(): Promise<Win[]> {
  return db('wins').select()
}

export async function getWinById(id: number): Promise<Win> {
  return db('wins').where({ id }).first()
}

export async function getWinsByType(type: string): Promise<Win[]> {
  return db('wins').where({ type }).select('*')
}

export async function addWin(newWin: WinData) {
  return db('wins').insert(newWin)
}
