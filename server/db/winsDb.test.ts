// Importing necessary functions and objects from vitest for defining and running tests.
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'

// Importing the database connection object from connection.ts.
import connection from './connection.ts'

// Importing the function to be tested from db.ts.
import {
  getAllWins,
  deleteWin,
  getWinsByType,
  getWinById,
  addWin,
} from './winsDb.ts'

import { WinData } from '../../models/wins.ts'

// A hook to run once before all the tests in this suite, to prepare the database.
beforeAll(async () => {
  await connection.migrate.latest() // Running all pending migrations to bring the DB schema up to date.
})

// A hook to run before each test in this suite, to seed the database with initial data.
beforeEach(async () => {
  await connection.seed.run() // Running seed files to populate the database with data.
})

// A hook to run once after all the tests in this suite, to clean up resources.
afterAll(async () => {
  await connection.destroy() // Destroying the database connection to clean up.
})

// Defining a test suite for the getWins function.
describe('getAllWins', () => {
  // Defining a single test within the suite.
  it('returns the correct wins array', async () => {
    const urls = await getAllWins() // Calling the function to be tested and awaiting its result.

    // Making assertions about the result.
    expect(urls).toHaveLength(15) // Expecting the result to be an array of length 3.
    expect(urls[0]).toHaveProperty('name') // Expecting the first object in the array to have a 'url' property.
    expect(urls[1].name).toBe('Hope') // Expecting the 'name' property of the second object to be 'Soundcloud'.
  })
})

describe('newWin', () => {
  it('adds a new win and returns it', async () => {
    // Fetch the initial set of wins before adding a new one.
    const initialWins = await getAllWins()

    const newWinData = {
      name: 'Mark',
      title: 'solved a testing thing',
      win: 'Successfully created my test.',
      date: '2023-10-19',
      type: 'Dev',
    }

    // Call the function to be tested, passing the new URL data.
    const addedWinArray: WinData[] = await addWin(newWinData)
    const addedWin = addedWinArray[0]

    // Assert that the function returns an object with the expected properties.
    expect(addedWin).toHaveProperty('id')
    expect(addedWin.name).toBe(newWinData.name)
    expect(addedWin.type).toBe(newWinData.type)

    // Now fetch the updated set of URLs after the new URL has been added.
    const newWins = await getAllWins()
    // console.log(getAllWins)

    // Assert that the count of URLs has increased by 1.
    expect(newWins.length).toBe(initialWins.length + 1)
  })
})

describe('deleteWin', () => {
  it('deletes a win by id and returns the number of rows affected', async () => {
    // Arrange: Ensure there's a Win to delete.
    const newWinData: WinData = {
      name: 'Test Name',
      title: 'went a little crazy',
      win: 'a thing I did',
      date: 'todays date lol',
      type: 'dev madness',
    }
    const addedWinArray = await addWin(newWinData)
    const addedWin = addedWinArray[0]

    // Act: Call the function to be tested.
    const result = await deleteWin(addedWin.id)

    // Assert: Check the function's return value and side effects.
    expect(result).toBe(1) // 1 row should have been deleted.

    // Optionally, verify the URL was actually deleted by trying to fetch it.
    const urls = await getAllWins()
    expect(urls).not.toContainEqual(addedWin)
  })
})

describe('getWinsByType', () => {
  it('returns the correct wins array filtered by type', async () => {
    // Arrange: Seed the database with known data.
    const type = 'Dev'

    // Act: Call the function to be tested.
    const wins = await getWinsByType(type)

    // Assert: Check the return value and possibly side effects.
    expect(wins).toBeInstanceOf(Array)
    expect(wins).toHaveLength(5) // Assuming there are 5 wins of type 'Dev'.
    wins.forEach((win) => {
      expect(win.type).toBe(type)
    })
  })
})

describe('getWinsById', () => {
  it('returns the correct win object by id', async () => {
    // Arrange:
    const id = 1 // Assuming there is a win with id 1 in the database.

    // Act: Call the function to be tested.
    const winArray = await getWinById(id)
    const win = winArray[0]
    // Assert: Check the return value and possibly side effects.
    
    expect(win).toHaveProperty('name') 
    expect(win).toHaveProperty('title')
    // ...and so on for other properties of a win.
  })
})

