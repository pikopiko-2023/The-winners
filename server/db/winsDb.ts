import connection from './connection.ts'
import { Win, WinData } from '../../models/wins.ts'

const db = connection

// Get all wins
export async function getAllWins(): Promise<Win[]> {
  return db('wins').select()
}

// delete win
export function deleteWin(id: number): Promise<number> {
  return connection('wins').where({ id }).del() 
}

// By Type - Maybe we don't need this?
export function getWinsByType(type: string): Promise<Win[]> {
  return connection('wins').where({ type }).select()
}

// By Id - Maybe we don't need this?
export function getWinById(id: number): Promise<Win[]> {
  return connection('wins').where({ id }).select()
}

// New Win    
export function addWin(win: WinData): Promise<Win> {
  return connection<Win>('wins') 
    .insert({ ...win }) 
    .returning(['id', 'name', 'title', 'win', 'date', 'type' ]) 
}
