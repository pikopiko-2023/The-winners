// @vitest-environment node
import { describe, it, expect, vi } from 'vitest'
import request from 'supertest'
import server from '../server.js'
import * as db from '../db/winsDb.js'
import { WinData, Win } from '../../models/wins.js'

vi.mock('../db/winsDb') // mocking the db functions, 'don't run the real functions mate...'

describe('GET wins', () => {
  it('responds with wins array on getWins success', () => {
    vi.mocked(db.getAllWins).mockImplementation(() =>
      Promise.resolve([
        {
          id: 1,
          name: 'Mark',
          title: 'First React App',
          win: 'Successfully created my first React app and deployed it on Netlify.',
          date: '2023-08-15',
          type: 'Dev',
        },
        {
          id: 2,
          name: 'Hope',
          title: 'Effective Communication',
          win: 'Presented a project update and nobody fell asleep this time. I call that a win!',
          date: '2023-08-25',
          type: 'Human Skills',
        },
        {
          id: 3,
          name: 'Laura',
          title: 'Database Normalisation',
          win: 'Normalised a database schema and now it’s having an identity crisis.',
          date: '2023-09-01',
          type: 'Dev',
        },
      ]),
    )
    return request(server)
      .get('/api/v1/wins')
      .expect(200)
      .then((res) => {
        const winsArray = res.body.wins

        // Adjust your assertions to use 'winsArray' instead of 'res.body'.
        expect(winsArray).toBeInstanceOf(Array) // Validate that 'winsArray' is an array.
        expect(winsArray).toHaveLength(3) // Validate the length of the array.
        expect(winsArray[1]).toHaveProperty('win') // Validate that 'winsArray[1]' has a 'win' property before trying to access it.
        expect(winsArray[1].win).toBe(
          'Presented a project update and nobody fell asleep this time. I call that a win!',
        )
      })
  })
  
  describe('POST /api/v1/wins', () => {
    it('responds with added win on successful POST', () => {
      // Define the request body data for the POST request.
      const newWin: WinData = {
        name: 'Mark',
        title: 'Personality Normalisation',
        win: 'The medicine kicked in',
        date: '2023-10-19',
        type: 'Life',
      }

      // Mock the newWin function to return the added Win data.
      vi.mocked(db.addWin).mockImplementation(() => Promise.resolve(newWin as Win))

      return request(server)
        .post('/api/v1/wins')
        .send({ newWin }) // Send the POST request with the data.
        .expect(200) // Expect a successful response status code.
        .then((res) => {
          // Expect the response body to contain the added URL data.
          expect(res.body.win).toEqual(newWin)
        })
    })

  })
})


 
describe('PATCH /api/v1/wins/:id', () => {
  it('responds with updated win on successful PATCH', async () => {
    // Define the ID of the win to update and the data to update it with.
    const winId = 1;
    const updatedWinData: WinData = {
      name: 'Updated Mark',
      title: 'Updated First React App',
      win: 'Updated success message',
      date: '2023-08-16',
      type: 'Dev',
    };

    // Mock the updateWin function to return the updated Win data.
    vi.mocked(db.updateWin).mockImplementation(() => Promise.resolve([updatedWinData]));

    // Send the PATCH request to update the win.
    const res = await request(server)
      .patch(`/api/v1/wins/${winId}`)
      .send(updatedWinData)  // Send the updated data in the request body.
      .expect(200);  // Expect a successful response status code.

    // Expect the response body to contain the updated win data.
    expect(res.body).toEqual(updatedWinData);
  });
});



