import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
    <div>
     <Link to="/about">About</Link> | 
     <Link to="/products">Products</Link> | 
     <Link to="/contact">Contact</Link> |
     <Link to="/phones">Phones</Link> |
    </div>
    </div>
  )
}

export default Header
