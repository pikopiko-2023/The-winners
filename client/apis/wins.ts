import request from 'superagent'
import { Win } from '../../models/wins'

const rootUrl = '/api/v1'

export async function getWins(): Promise<Win[]> {
  const response = await request.get(rootUrl + '/wins')
  return response.body.wins
}

export async function deleteWin(id: number): Promise<unkown> {
  return request.delete(`${rootUrl}/wins/${id}`)
  
} 

export async function addWin(win: WinData): Promise<unkown> {
  return request.post(`${rootUrl}/wins`).send({...win})
  
}