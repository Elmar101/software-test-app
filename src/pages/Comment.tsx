import axios from "axios"
import { useEffect, useState } from "react"

interface Comment {
  id: number
  body: string
  postId: number
}

interface IState {
  data: Comment[];
  isLoading: boolean;
  error: string;
}

const Comment = () => {
  const [state, setState] = useState<IState>({
    data: [],
    isLoading: true,
    error: "",
  })
  
  useEffect(() => {
    axios.get("http://localhost:3000/comments")
      .then((res) => {
        setState({
          data: res.data,
          isLoading: false,
          error: ""
        })
      })
      .catch((err) => {
        setState({
          data: [],
          isLoading: false,
          error: err.message
        })
      })
  }, [])

  if (state.isLoading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <div>{state.error}</div>
  }
  return (
    <div>
      {state.data.map((comment) => (
        <div key={comment.id}>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Comment
