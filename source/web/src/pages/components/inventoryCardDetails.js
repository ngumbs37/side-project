import React from 'react';

function inventoryCardDetails() {
  return (
    <div className='shaded container' style={{ padding: '5rem 2rem', margin: '1rem',  maxWidth: '60rem'}}>


    <div className='single-card-details shaded' style={{position: 'relative', margin: '0 1rem' }}>
      <div className='top-bar' style={{ backgroundColor: 'lightgreen', padding: '0 1.5rem', height: '3rem', }}>
        <div style={{ backgroundImage: 'url("BXbruIR.png")', backgroundPosition: '-2rem -1rem', height: '3rem', width: '4rem', backgroundRepeat: 'no-repeat',  position: 'absolute', left: 'calc(100% - 4rem)' }} ></div>
        <span className='character-name' style={{ position: 'absolute', left: '15rem' }}>Murasame Oshizu</span>
      </div>
      <div className='details-box' style={{ height: '16rem', }}>
        <img class src='11140200.25ac6fa2.jpg' alt='' style={{ height: '15rem', position: 'absolute', top: '1.5rem', left: '1.5rem', }} />
        <div className='card-details' style={{ margin: '0 1rem', position: 'absolute', left: '15rem' }}>
          <div> <span style={{ width: '50%'}}>Lv. </span>{'50/100'} <span>100% </span> <span>expbarIcon</span> </div>
          <hr />
          <div> <span>cost</span> { '99' } <span> awakening </span> {'0/10'} </div>
          <hr />
          <table className='text-center'>
          <tr>
            <th className='shaded-dark'>VOCAL</th>
            <th className='shaded-dark'>DANCE</th>
            <th className='shaded-dark'>ACT</th>
          </tr>
          <tr>
            <td className='shaded-light'>99999</td>
            <td className='shaded-light'>99999</td>
            <td className='shaded-light'>99999</td>
          </tr>
          </table>
        </div>
      </div>
      <div style={{ backgroundImage: 'url("Screen Shot 2014-12-31 at 7.55.04 AM.png")', backgroundPosition: '-15rem -36rem', height: '20rem', width: '100%', backgroundRepeat: 'no-repeat',  }} ></div>
    </div >
    </div>
  );
}

export default inventoryCardDetails;
