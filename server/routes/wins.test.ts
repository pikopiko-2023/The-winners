// @vitest-environment node
import { describe, it, expect, vi } from 'vitest'
import request from 'supertest'
import server from '../server.js'
import * as db from '../db/wins.js'

vi.mock('../db/connection')

describe('GET wins', () => {
  it('responds with urls array on getWins success', () => {
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
      .get('/api/v1/urls')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(3)
        expect(res.body[1].url).toBe('https://soundcloud.com/')
      })
  })
  it.skip('responds with 500 and error on getUrls rejection', () => {
    vi.mocked(db.getWins).mockImplementation(() =>
      Promise.reject(new Error('mock DB error')),
    )
    return request(server)
      .get('/api/v1/urls')
      .expect(500)
      .then((err) => {
        expect(err.text).toBe('mock DB error')
      })
  })
})

describe.skip('POST /api/v1/urls', () => {
  it.skip('responds with added url on successful POST', () => {
    // Define the request body data for the POST request.
    const newUrlData = {
      name: 'New URL',
      url: 'https://example.com/new-url',
    }

    // Mock the newUrl function to return the added URL data.
    vi.mocked(db.newWin).mockImplementation(() => Promise.resolve(newWin))

    return request(server)
      .post('/api/v1/urls')
      .send(newUrlData) // Send the POST request with the data.
      .expect(200) // Expect a successful response status code.
      .then((res) => {
        // Expect the response body to contain the added URL data.
        expect(res.body).toEqual(newUrlData)
      })
  })

  it.skip('responds with 500 and error on failed POST', async () => {
    // Define the request body data for the POST request.
    const newUrlData = {
      name: 'Invalid URL',
      url: 'invalid-url', // This is an invalid URL.
    }

    // Mock the newUrl function to simulate a failed POST.
    vi.mocked(db.newWin).mockImplementation(() =>
      Promise.reject(new Error('Mock DB error')),
    )

    try {
      await request(server)
        .post('/api/v1/urls')
        .send(newUrlData) // Send the POST request with the data.
        .expect(500) // Expect a 500 response status code.

      // Add an expect statement here to assert that the error is thrown and handled correctly.
      expect.assertions(1) // Expect one assertion to be made.
    } catch (err) {
      // Handle the error here, e.g., by expecting the error message.
      expect(err.text).toBe('Mock DB error')
    }
  })
})
