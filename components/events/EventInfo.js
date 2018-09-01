import React from 'react';
import { Card, Divider } from 'antd';
import MainDetails from './MainDetails';
// import map from '../../src/img/map.png';

const EventInfo = () => (
  <Card
    cover={
      <img src="https://howtobecome-matthiashombauer.netdna-ssl.com/wp-content/uploads/2016/05/Destroyer_Blog_3-1-1000x567.jpg" />
    }
  >
    <MainDetails />
    <Divider orientation="left">Descripción</Divider>
    <section>
      <p>
        La adicción al trabajo, la depresión post-jubilación, el rebusque, las
        ventas de empanadas, las hojas de vida, las entrevistas de trabajo y
        hasta la poesía, se juntan y se revuelven en EL PUESTO, una comedia
        íntima, sentida e hilarante a partir del drama de Benjamín Molina, un
        hombre de 66 años que no se quiere jubilar.
      </p>

      <p>
        Si usted está vacante, a partir del 17 de agosto lleve su hoja de vida
        al Teatro Patria, ríase de tiempo completo y engánchese a EL PUESTO, con
        César Mora y Edwin Maya.
      </p>

      <p>
        El Singularity University Summit es un programa de dos días que se
        celebra en los cinco continentes, el cual tendrá lugar por primera vez
        en Colombia en noviembre de 2018. Este programa genera conversaciones y
        crea comunidad a nivel mundial en torno al aprovechamiento de las
        tecnologías exponenciales en la transformación de las industrias, la
        educación, las políticas públicas y la calidad de vida de las personas.
      </p>
    </section>
    <Divider orientation="left">Ubicación</Divider>
    <div>
      <h2>Estadio Pascual Guerrero, Cali, Valle del Cauca</h2>
      {/* <img style={{ width: '100%' }} src={map} /> */}
    </div>
  </Card>
);

export default EventInfo;
