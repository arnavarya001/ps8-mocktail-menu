import {Link} from 'react-router-dom'

function Home(){
  return (
    <div className="home">

      <h1>Mocktail Menu </h1>
      <Link to="/drinks"><button>See Menu</button></Link>

    </div>
  )
}

export default Home
