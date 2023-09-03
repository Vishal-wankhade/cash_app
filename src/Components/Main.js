import './main.css'
import cube from './images/cube.png'
import stairs from './images/stairs.png'
import cubeStairs from './images/cubeStairs.png'
import pillers from './images/pillers.png'

function Main() {
  return (
    <main>
       <div className='box'>
       <img src={cube} alt='cube' />
       </div>
       <div className='stairs'>
       <img src={stairs} alt='stairs' />
       </div>


       <section>
          <div className='phone'>
          <h1 className='cash'>CASH</h1>
          <h1 className='app'>APP</h1>
          </div>
       </section>
       
       <div className='cube-stairs'>
       <img src={cubeStairs} alt='stairs' />
       </div>
       <div className='pillers'>
       <img src={pillers} alt='pillers' />
       </div>

    </main>
  );
}

export default Main;
