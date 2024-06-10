import React from 'react';
import '../../styles/Servicios.scss';
const TwoRowsComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="centered-heading">Descubre la gran veriedad de animes que existen</h1>
      </div>
      <div className="row">
        <div className="column">
          <h2>Naruto</h2>
          <p>
            Un joven ninja llamado Naruto busca ser reconocido como el mejor ninja de su aldea y líder de su pueblo,
            enfrentándose a desafíos personales y a poderosos enemigos.
          </p>
          <img
            src="https://areajugones.sport.es/wp-content/uploads/2018/08/naruto-e1534511199389.jpg"
            alt="Imagen 1"
            className="column-image"
          />
        </div>
        <div className="column">
          <h2>Dragon Ball Z</h2>
          <p>
            Goku y sus amigos protegen la Tierra de amenazas intergalácticas, enfrentándose a poderosos guerreros y
            desafiando límites de poder.
          </p>
          <img
            src="https://www.justwatch.com/images/backdrop/258646002/s640/dragon-ball-z/dragon-ball-z"
            alt="Imagen 2"
            className="column-image"
          />
        </div>
        <div className="column">
          <h2>One Piece</h2>
          <p>
            Monkey D. Luffy y su tripulación pirata buscan el tesoro más grande del mundo, enfrentándose a peligrosos
            enemigos y viviendo emocionantes aventuras.
          </p>
          <br />
          <img
            src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/08/one-piece_0.jpg?tf=3840x"
            alt="Imagen 1"
            className="column-image"
          />
        </div>
      </div>
      {/* ROW 2 */}
      <div className="row">
        <div className="column">
          <h2>Death Note</h2>
          <p>
            Un brillante estudiante encuentra un cuaderno capaz de matar a cualquier persona cuyo nombre se escriba en él,
            desencadenando un mortal juego mental con un detective.
          </p>
          <img
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/07/death-note-episode-featured.jpg"
            alt="Imagen 3"
            className="column-image"
          />
        </div>
        <div className="column">
          <h2>Super Campeones (Captain Tsubasa)</h2>
          <p>
            Creamos soluciones de punto de venta adaptadas a tu negocio. Desde abarrotes hasta comercios especializados,
            diseñamos un sistema que optimiza tus operaciones y mejora la experiencia del cliente.
          </p>
          <br />
          <img
            src="https://elcomercio.pe/resizer/Xwya2q5O6NZ63i2sPlDBZqmW2y4=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/O5W36B33DNFZJD6XXWX7PQQYHU.jpg"
            alt="Imagen 2"
            className="column-image"
          />
        </div>
        <div className="column">
          <h2>Pokémon</h2>
          <p>
            Sigue las aventuras de Ash Ketchum y su fiel compañero Pikachu mientras viajan por el mundo capturando criaturas
            conocidas como Pokémon y compitiendo en batallas de entrenadores para convertirse en un Maestro Pokémon.
          </p>
          <img
            src="https://img.lemde.fr/2022/12/22/5/0/1730/865/1440/720/60/0/e968e4d_1671703423578-b5e.jpeg"
            alt="Imagen 3"
            className="column-image"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoRowsComponent;
