import './bottom.css'
import apple from './images/Vector.png'
import android from './images/android.png'
import arrow from './images/arrow.png'
import msg from './images/msg.png'
import twitter from './images/twitter.png'
import insta from './images/insta.png'

function Bottom() {
  return (
    <div className='bottom'>
       <div className='play'>
         <button>
           <img src={apple} alt='' />
           App Store
         </button>
         <button className='google'>
           <img src={android} alt='' />
           google Store
         </button>
       </div>
       <div className='arrow'> 
         <button><img src={arrow} alt='arrow'/></button>
       </div>
       <div className='icons'>
          <p>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
       <button><img src={msg} alt='msg' /></button>
       <button><img src={twitter} alt='twitter' /></button>
       <button><img src={insta} alt='insta' /></button>
       </div>
    </div>
  );
}

export default Bottom;
