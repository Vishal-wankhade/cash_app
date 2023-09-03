import './Banking.css'
import hole from './images/hole.png'
import col from './images/banking-column.png'
import str2 from './images/banking-stairs-2.png'
import ramp2 from './images/banking-ramp-2.png'
import tube from './images/banking-tube.png'
import hole2 from './images/banking-hole-1.png'
import track2 from './images/banking-track-2.png'
import ramp from './images/banking-ramp-1.png'
import str from './images/banking-stairs-1.png'
import monster from './images/banking-monster.png'
import cube from './images/banking-cubes.png'


function Banking() {
  return (
    <div className='banking-wrap'>
      <section className="bank-center">
      

      </section>
      <img src={hole} alt='hole' className='hole' />
      <img src={col} alt='col' className='col' />
      <div className='bank-info'>
        <h2>Banking</h2>
        <p>Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing <br/>and account number.</p>
      </div>
      <img src={str2} alt='stair' className='stair2' />
      <img src={ramp2} alt='ramp' className='ramp2' />
      <img src={tube} alt='tube' className='tube' />
      <img src={hole2} alt='hole' className='hole2' />
      <img src={track2} alt='hole' className='track2' />
      <img src={ramp} alt='hole' className='ramp' />
      <img src={str} alt='hole' className='str' />
      <img src={monster} alt='hole' className='monster' />
      <img src={cube} alt='hole' className='cube' />
    </div>
  );
}

export default Banking;
