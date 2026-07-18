import React from 'react'
import ceo from '../assets/ceo.png'
import manger from '../assets/hr manger.png'
import hr from '../assets/hr.png'
import team from '../assets/team.png'
const Team = () => {
  return (
    <div>
         <div>
           <main>
               <div className='mainsection'>
           <div className='box'>
            <img src={ceo} alt="" height={50} width={50} />
              <h1>VIKAS BANSODE</h1>
               <h1>CEO</h1>
               <p>Vikas Bansode is the CEO of Kavya Sourcing, delivering reliable Medical Data Indexing and data management services.</p>
           </div>
              <div className='box'>
                 <img src={manger} alt="" height={50} width={50} />
                <h1>SACHIN SHINDE</h1>
               <h1>MANAGER</h1>
               <p>Experienced Manager overseeing daily operations and team performance.</p>
           </div>
              <div className='box'>
                 <img src={manger} alt="" height={50} width={50} />
                 <h1>PRADIP SUPEKAR</h1>
               <h1>MANGER</h1>
               <p>Dedicated Manager ensuring efficient workflow and high-quality service delivery.</p>
           </div>
              <div className='box'>
                <img src={hr} alt="" height={50} width={50} />
                <h1>PRATHMESH SONAR</h1>
               <h1>HR</h1>
               <p>HR professional dedicated to hiring, employee engagement, and workplace development.</p>
           </div>
           <div className='box'>
                 <img src={team} alt="" height={50} width={50} />
                <h1>SUMIT ADAGALE</h1>
               <h1>TEAM LEAD</h1>
               <p>Experienced Team Lead focused on collaboration, productivity, and quality delivery.</p>
           </div>
               </div>
           </main>
         </div>
       </div>
  )
}

export default Team
