import React from 'react'
function Awards() {
    return (
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-6 p-5'>
              <img src='media/images/largestBroker.svg' alt='Largest Broker Award' />
            </div>
            <div className='col-6 p-5 '>
              <h1> Largest Broker Award in INDIA </h1>
              <p className='mb-5'> Recognized as the largest broker in India for outstanding performance and customer satisfaction.</p>

              <div className ='row'>
                <div className='col-6 p-5' > <ul> 
                <li> 
                  <p> Futures Trading Excellence</p>
                </li>
                <li> 
                  <p> commodity derrivative  </p>
                </li>
                <li> 
                  <p> Currency derivative </p>
                </li>
               </ul></div>
                <div className='col-6 p-5'> 
                   <ul> 
                <li> 
                  <p> Stocks & IPOs </p>
                </li>
                <li> 
                  <p> Direct mutual funds </p>
                </li>
                <li> 
                  <p> bonds and government securities </p>
                </li>
               </ul>
                </div>
  
              </div>
              <img src='media\images\pressLogos.png' style={{width:"90%"}} alt='Press Logos' className='mt-4' />
              
            </div>
          </div>
        </div>
      );
}

export default Awards ;

