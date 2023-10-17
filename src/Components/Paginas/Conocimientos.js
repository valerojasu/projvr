import React from 'react'
import './About.css'
import './Conocimientos.css'
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
    <div className='bodyaboutcono' >
        <section className='bodyaboutcono'> 
        <div className='col'>
        <p className='conotext'> ¿Qué conocimientos tengo con respecto a Desarrollo Full Stack?</p>  
        </div>
        <div className='col'>
          <section className='conoci'>
          <div className='col'>
            <h2 className='conop'> React </h2>
            <img src={lreact} alt='React' className='loguitos'></img>
          </div>
          <div className='col'>
          <h2 className='conop'> Angular </h2>
          <img src={langular} alt='React' className='loguitos'></img>
          </div>
          <div className='col'>
          <h2 className='conop'> HTML </h2>
          <img src={lhtml} alt='React' className='loguitos'></img>
          </div>
          </section>
          <section className='conoci' >
          <div className='col'>
          <h2 className='conop'> CSS </h2>
          <img src={lcss} alt='React' className='loguitos'></img>
          </div>
          <div className='col'>
          <h2 className='conop'> Github </h2>
          <img src={lgit} alt='React' className='loguitos'></img>
          </div>
          <div className='col'>
          <h2 className='conop'> Bootstrap </h2>
          <img src={lboots} alt='React' className='loguitos'></img>
          </div>

          </section>
          <section className='conoci'>
          <div className='col'>
          <h2 className='conop'> Back-End API </h2>
          <img src={lapi} alt='React' className='loguitos'></img>

          </div>
          <div className='col'>
          <h2 className='conop'> SQL / Azure SQL</h2>
          <img src={lsql} alt='React' className='loguitos'></img>

          </div>
          <div className='col'>
          <h2 className='conop'> JS / JSX </h2>
          <img src={ljs} alt='React' className='loguitos'></img>

          </div>

          </section>
          
          

        </div>
</section>
    </div>
  )
}

export default Conocimientos