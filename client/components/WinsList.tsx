import { useWins } from '../hooks/useWins.ts'
import { Win } from '../../models/wins.ts'
import WinDetails from './WinDetails.tsx'

function WinsList() {
  const { data, isLoading, isError } = useWins()

  console.log(data)
  
  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>Something went wrong loading our wins</p>
  return (
    <>
      <div className="section" >
        <div role='list'>
          {data.map((win: Win, index: number) => (
              <WinDetails win={win} key={index} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default WinsList
