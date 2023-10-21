import { Win } from '../../models/wins.tsx'

import LikeButton from './LikeButton.tsx'
import {useDeleteWin} from '../hooks/useWins.ts'


interface Props {
  win: Win
}

export function WinDetails(props: Props) {
  const { win } = props
  const winId = win.id
  
  const deleteWinMutation = useDeleteWin()
  
  function handleDelete() {
    deleteWinMutation.mutate(winId) 
  }


  return (
    <>
      <div className="win-box" role='list-item'>
        <h2 role='win-title'>{win.title}</h2>
        <p>{win.type}</p>
        <h3>{win.name}</h3>
        <h4>{win.date}</h4>
        <p>{win.win}</p>
        <LikeButton postId={win.id} />
        <button>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  )
}

export default WinDetails
