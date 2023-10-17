import connection from './connection.ts'
import { Win } from '../../models/wins.ts'

export async function getAllWins(db = connection): Promise<Win[]> {
  return db('wins').select()
}
