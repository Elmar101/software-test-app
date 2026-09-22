import { Link } from "react-router"
import { phones } from "../db"

const Phones = () => {
  return (
    <div>
       {
        phones.map((phone) => (
            <div key={phone.id}>
                <h3>{phone.name}</h3>
                <p>Price: ${phone.price}</p>
                <img src={phone.image} alt={phone.name} width="200" />
                <Link to="/comment">View Details</Link>
            </div>
        ))
       }
    </div>
  )
}

export default Phones
