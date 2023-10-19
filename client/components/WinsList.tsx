import { useWins } from '../hooks/useWins.ts'
import { Win } from '../../models/wins.ts'

function WinsList() {
  const { data } = useWins()

  return (
    <>
      <div className="section">
        <div>
          {data ? (
            data.map((win: Win, index: number) => <WinDetails data={win} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default WinsList
