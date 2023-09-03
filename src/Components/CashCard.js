import './cash.css'

import boost from './images/boost-stairs-2.png'
import boost2 from './images/boost-stairs-1.png'
import cPhone from './images/boost-phone.png'
import card from './images/boost-card.png'
import shoe from './images/boost-shoe.png'
import coffee from './images/boost-coffee.png'
import hand from './images/boost-hand.png'
import burger from './images/boost-burger.png'




function CashCard() {
  return (
    <div className='cash'>
        <img src={cPhone} alt='c-mobile' className='cash-center'/>
        <div className='c-info'> 
          <h2>Cash Card & Boost</h2>
          <p>The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.
</p>
        </div>
      
      <img src={boost} alt='' className='boost'/>
      <img src={boost2} alt='' className='boost2'/>
      <img src={card} alt='' className='card'/>
      <img src={shoe} alt='' className='shoe'/>
      <img src={coffee} alt='' className='coffee'/>
      <img src={hand} alt='' className='hand'/>
      <img src={burger} alt='' className='burger'/>
    </div>
  );
}

export default CashCard;
