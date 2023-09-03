import './payments.css'
import r1 from'./images/r-1.png'
import r2 from'./images/r2.png'
import r3 from'./images/r3.png'
import large from'./images/large.png'


function Payments() {
  return (
    <div className='wrap'>
      <article>
        <div className='info'>
          <h2>Payments</h2>
          <p>Send and receive money with anyone, donate to an important cause, or tip professionals. Just enter a $cashtag, phone number, or scan their QR code to pay.</p>
        </div>
        
      </article>
      <div className='lines'>

      </div>
      <img src={r1} alt='insta' className='r1' />
      <img src={r2} alt='insta' className='r2' />
      <img src={r3} alt='insta' className='r3' />
      <img src={r2} alt='insta' className='medium' />
      <img src={r2} alt='insta' className='half-medium'/>
      <img src={large} alt='insta' className='large' />
      <img src={r1} alt='insta' className='second-piller' />
      <img src={r2} alt='insta' className='l2' />
      <img src={r1} alt='insta' className='l1' />
    </div>
  );
}

export default Payments;
