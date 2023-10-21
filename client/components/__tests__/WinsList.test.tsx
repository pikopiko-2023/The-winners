// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import {screen, waitFor, within} from '@testing-library/react'
import { renderRoute} from '../../test-utils.tsx' 
import nock from 'nock'

describe('<WinsList>', () => {
  it('should render a loading indicator', async () => {
    const scope = nock('http://localhost').get('/api/v1/wins').reply(200, {
      "wins": [
          {
              "id": 4,
              "name": "Jayde",
              "title": "Team Collaboration",
              "win": "We resolved a critical bug together and only cried twice.",
              "date": "2023-09-10",
              "type": "Human Skills"
          },
          ]})

          renderRoute('/')

          expect(screen.getByText(/Loading/)).toBeInTheDocument()
        
        })
  

  it('should render details of the win', async () => {
    const scope = nock('http://localhost').get('/api/v1/wins').reply(200, {
      "wins": [
          {
              "id": 4,
              "name": "Jayde",
              "title": "Team Collaboration",
              "win": "We resolved a critical bug together and only cried twice.",
              "date": "2023-09-10",
              "type": "Human Skills"
          },
         ]})

          renderRoute('/')

        await waitFor(() => {
          expect(screen.queryByText(/Loading/)).not.toBeInTheDocument()
        })
        const listItems = screen.getAllByRole('list-item').map((li) => li.textContent)
        
        expect(scope.isDone()).toBe(true)
        expect(listItems[0]).toMatchInlineSnapshot('"Team CollaborationHuman SkillsJayde2023-09-10We resolved a critical bug together and only cried twice.editdelete"')
  })
  it('should render an error message if something goes wrong', async () => {
    const scope = nock('http://localhost').get('/api/v1/wins').reply(500)

          renderRoute('/')

        await waitFor(() => {
          expect(screen.queryByText(/Loading/)).not.toBeInTheDocument()
        })

        expect(screen.getByText(/Something went wrong loading our wins/)).toBeInTheDocument()
}) 
})
