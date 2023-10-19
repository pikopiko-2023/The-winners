import { useWins } from '../hooks/useWins.ts'
import { Win } from '../../models/wins.ts'

function WinsList() {
  const { data } = useWins()

  return (
    <>
      <div className="section">
        <div>
          {data ? (
            data.map((win: Win, index: number) => (
              <div key={index}>
                <hr></hr>
                <h2>{win.title}</h2>
                <h3>{win.name}</h3>
                <h4>{win.date}</h4>
                <p>{win.win}</p>
                <hr></hr>
              </div>
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
