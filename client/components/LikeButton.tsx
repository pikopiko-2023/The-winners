import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

interface LikeButtonProps {
  postId: number
  // Need to sort out correct Id for posts & comments
}

// What is already created instead of postId?j
const LikeButton: React.FC<LikeButtonProps> = ({ postId }) => {
  // ({ postId }) is ok for now and can be changed in the future
  const [liked, setLiked] = useState(false)

  const handleLikeClick = () => {
    setLiked(!liked)
  }

  return (
    <div>
      <button
        onClick={handleLikeClick}
        style={{ border: 'none ', backgroundColor: 'white' }}
      >
        <FaHeart color={liked ? 'pink' : 'gray'} size={20} />
      </button>
    </div>
  )
}

export default LikeButton
