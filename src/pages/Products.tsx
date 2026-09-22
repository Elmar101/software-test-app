import axios from "axios";
import { useEffect, useState } from "react";

interface IProduct {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface IState {
  data: IProduct[];
  isLoading: boolean;
  error: string;
}

const Products = () => {
  const [state, setState] = useState<IState>({
    data: [],
    isLoading: true,
    error: "",
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setState({ ...state, data: res.data, isLoading: false });
      })
      .catch((err) =>
        setState({ ...state, error: err.message, isLoading: false }),
      )
  }, []);

  if (state.isLoading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>{state.error}</div>;
  }

  return <div>{state.data.map((item) => (
    <div key={item.id}>
      <h3>{item.title}</h3>
    </div>
  ))}</div>;
};

export default Products;
