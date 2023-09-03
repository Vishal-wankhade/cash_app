import './footer.css'
import img1 from './images/investing-bitcoin.png'
import img2 from './images/investing-stocks.png'
import leftCurve from './images/investing-graph-1.png'
import rightCurve from './images/investing-graph-2.png'
import rightCurve2 from './images/investing-graph-3.png'
import apple from './images/Vector.png'
import android from './images/android.png'
import arrow from './images/arrow.png'
import msg from './images/msg.png'
import twitter from './images/twitter.png'
import insta from './images/insta.png'



function Footer() {
  return (
    <footer>
        <div className='f-center'>
            <h2>Investing</h2>
            <div className='img-wrap'>
                <img src={img1} alt=''/>
                <img src={img2} alt=''/>
            </div>
        </div>
        <div className='box1'>
           <h2 className='st'>Stocks</h2>
           <p>Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.</p>
        </div>
        <div className='box2'>
          <h2 className='bit'>Bitcoin</h2>
          <p>Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about.</p>
        </div>
        <img src={leftCurve} alt='' className='left-curve'/>
        <img src={rightCurve} alt='' className='right-curve'/>
        <img src={rightCurve2} alt='' className='right-curve2'/>
     <div className='last-line'>
       
     </div>
     <div className='bottom footer'>
       <div className='play '>
         <button>
           <img src={apple} alt='' />
           App Store
         </button>
         <button className='google'>
           <img src={android} alt='' />
           google Store
         </button>
       </div>
       
       <div className='icons'>
          <p>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
       <button><img src={msg} alt='msg' /></button>
       <button><img src={twitter} alt='twitter' /></button>
       <button><img src={insta} alt='insta' /></button>
       </div>
    </div>
    </footer>
  );
}

export default Footer;
