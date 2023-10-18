import request from 'superagent'
import { Win } from '../../models/wins'

const rootUrl = '/api/v1'

export async function getWins(): Promise<Win[]> {
  const response = await request.get(rootUrl + '/wins')
  return response.body.wins
}
