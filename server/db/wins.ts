import connection from './connection.ts'
import { Win, NewWin } from '../../models/wins.ts'

// Get all wins
export async function getAllWins(db = connection): Promise<Win[]> {
  return db('wins').select()
}

// delete win
export function deleteWin(id: number): Promise<number> {
  return connection('wins').where({ id }).del() 
}

// By Type
export function getWinsByType(type: string): Promise<Win[]> {
  return connection('wins').where({ type }).select()
}

// By Id
export function getWinById(id: number): Promise<Win[]> {
  return connection('wins').where({ id }).select()
}

// New Win    
export function addWin(win: NewWin): Promise<Win> {
  return connection<Win>('wins') 
    .insert({ ...win }) 
    .returning(['id', 'name', 'title', 'win', 'date', 'type' ]) 
}

