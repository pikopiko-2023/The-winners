import { Win } from '../../models/wins.tsx'
import { deleteWin } from '../apis/wins.ts'
// display a single win, pass win from winlist into this //
interface Props {
  win: Win
}

export function WinDetails(props: Props) {
  const { win } = props
  const winId = win.id

  function handleDelete() {
    deleteWin(winId) 
  }


  return (
    <>
      <div className="win-box">
        <h2>{win.title}</h2>
        <p>{win.type}</p>
        <h3>{win.name}</h3>
        <h4>{win.date}</h4>
        <p>{win.win}</p>
        <button>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  )
}

export default WinDetails
