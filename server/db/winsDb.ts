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

// A function to update a url by its ID, to be called when a PATCH request is made to the 'api/v1/wins/2' endpoint.
export function updateWin(id: number, updatedData: WinData) {
  return connection('wins') // Starting a new database transaction targeting the 'wins' table.
    .where({ id }) // Finding the win with the specified ID in the 'wins' table.
    .update({ ...updatedData }) // Updating the found url with the new data provided. The '...' is the spread operator, which is used to expand the properties of the 'updatedData' object into individual key-value pairs within the new object passed to the update method.
    .returning([
      // Specifying the columns to return after the update operation.
      'id',
      'name',
      'title',
      'win',
      'date',
      'type'
    ])
}