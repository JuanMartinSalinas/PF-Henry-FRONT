// import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.jsx";
import './about.css';
import Faq from './Faq';


export default function About() {
  return (
    <div>
        <NavBar />
        <div className="containerOne">
          <div className="divAboutLeft">
            <h2 className="titles">Who are we?</h2>
            <p> We are a website that facilitates the online sale of books. We also allow the exchange of books between users of the site. Our goal is to connect book lovers from all over the world, allowing them to buy, sell and exchange books in a simple and secure way.</p>
          </div>
        </div>
        <div className="containerTwo">
          <div className="divAboutRight">
            <h2  className="titles">Mission</h2>
            <p>Our mission is to provide users with access to a wide selection of books in a variety of genres, from classic novels to the latest releases. We work closely with reliable bookstores and vendors to ensure that the books offered are of high quality and in good condition.</p>
          </div>
        </div>
        <div className="containerThree">
          <div className="divAboutttLeft">
            <h2  className="titles">Vision</h2>
            <p>Our vision is to become the preferred destination for online book lovers by offering a reliable and convenient platform to buy, sell and exchange books. We strive to create a global community where users can share their passion for reading and discover new stories.</p>
          </div>
        </div>



      <Faq />
 


        <div className="global">
          <h2 className="titles">Developer Team</h2>
          <div className="containerFlex">
              <div className="column">
                <h3 className="titluloFront">Frontend Developers</h3>
                <ul>
                  <li>Bautista Bauzá</li>
                  <li>Juan Salinas</li>
                  <li>Roberto Arregui</li>
                  </ul>
              </div>
              <div className="column">
              <h3 className="titluloBack">Backend Developers</h3>
              <ul>
                <li>Franco Aldeco</li>
                <li>Lady Clavijo</li>
                <li>Steven Lizarazo</li>
                <li>Agustin Juarez</li>
              </ul>
              </div>
          </div>
        </div>
        </div> 
  )
}




