import Carousel from 'react-bootstrap/Carousel';
import './cur.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function Cur() {
  return (
    <div className='curt'>
    <Carousel >
      <Carousel.Item interval={1000} borderR>
      <img src='https://portal.siesgst.ac.in/static/media/TML2024%20-%201.ad4ec9c7.jpg' alt='sus'/>
        <Carousel.Caption>
          <h3>Glimpses of TML</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src='https://portal.siesgst.ac.in/static/media/TML2024%20-%203.2b641385.jpg' alt='sus'/>
        <Carousel.Caption>
          <h3>Glimpses of TML</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://portal.siesgst.ac.in/static/media/TML2024%20-%207.59099eb7.jpg' alt='sus'/>
        <Carousel.Caption>
          <h3>Glimpses of TML</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Cur;