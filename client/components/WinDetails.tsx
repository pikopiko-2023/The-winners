import { Win } from '../../models/wins.tsx'
// display a single win, pass win from winlist into this //
interface Props {
  win: Win
}

export function WinDetails(props: Props) {
  const { win } = props

  return (
    <>
      <div className="win-box">
        <h2>{win.title}</h2>
        <p>{win.type}</p>
        <h3>{win.name}</h3>
        <h4>{win.date}</h4>
        <p>{win.win}</p>
      </div>
    </>
  )
}

export default WinDetails
