import React from 'react'
import './About.css'
import lreact from '../../assets/Logos/react.png';
import langular from '../../assets/Logos/angular.png';
import lhtml from '../../assets/Logos/html.png';
import lcss from '../../assets/Logos/css.png';
import lgit from '../../assets/Logos/GITHUB.png';
import lboots from '../../assets/Logos/boots.png';
import lapi from '../../assets/Logos/api.png';
import lsql from '../../assets/Logos/SQL.png';
import ljs from '../../assets/Logos/js.png';

const Conocimientos = () => {
  return (
    <div>
        <section className='bodyaboutcono'> 
        <div className='col-5'>
        <p className='abouttext2'> ¿Qué conocimientos tengo con respecto a Desarrollo Full Stack?</p>  
        </div>
        <div className='col'>
          <section className='conoci'>
          <div className='col'>
            <h2> React </h2>
            <img src={lreact} alt='React'></img>
          </div>
          <div className='col'>
          <h2> Angular </h2>
          <img src={langular} alt='React'></img>
          </div>
          <div className='col'>
          <h2> HTML </h2>
          <img src={lhtml} alt='React'></img>
          </div>
          </section>
          <section className='conoci'>
          <div className='col'>
          <h2> CSS </h2>
          <img src={lcss} alt='React'></img>
          </div>
          <div className='col'>
          <h2> Github </h2>
          <img src={lgit} alt='React'></img>
          </div>
          <div className='col'>
          <h2> Bootstrap </h2>
          <img src={lboots} alt='React'></img>
          </div>

          </section>
          <section className='conoci'>
          <div className='col'>
          <h2> backend API </h2>
          <img src={lapi} alt='React'></img>

          </div>
          <div className='col'>
          <h2> SQL / Azure SQL</h2>
          <img src={lsql} alt='React'></img>

          </div>
          <div className='col'>
          <h2> JS / JSX </h2>
          <img src={ljs} alt='React'></img>

          </div>

          </section>
          
          

        </div>
</section>
    </div>
  )
}

export default Conocimientos