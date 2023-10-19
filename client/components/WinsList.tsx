import { useWins } from '../hooks/useWins.ts'
import { Win } from '../../models/wins.ts'
import WinDetails from './WinDetails.tsx'

function WinsList() {
  const { data } = useWins()

  return (
    <>
      <div className="section">
        <div>
          {data ? (
            data.map((win: Win, index: number) => (
              <WinDetails win={win} key={index} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default WinsList
