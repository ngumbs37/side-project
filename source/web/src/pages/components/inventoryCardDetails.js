import React from 'react';

function inventoryCardDetails() {
  return (
    <div className='single-card-details' style={{ backgroundColor: 'grey', position: 'relative', margin: '0 1rem' }}>
      <div className='top-bar' style={{ backgroundColor: 'lightgreen', padding: '0 1rem', height: '3rem', }}>
        <img class src='11140200.25ac6fa2.jpg' alt='' style={{ height: '15rem', position: 'absolute', top: '1rem' }} />
        <span style={{ backgroundImage: 'url("BXbruIR.png")', backgroundPosition: '-2rem -1rem', height: '3rem', width: '3rem', backgroundRepeat: 'no-repeat' }} > fdsaf</span>
        <span className='character-name' style={{ position: 'absolute', left: '15rem' }}>Murasame Oshizu</span>
      </div>
      <div className='details-box' style={{ height: '16rem', }}>
        <div className='details-box' style={{ margin: '0 1rem' }}>
          <span></span><span></span>
          <hr />
          <span></span><span></span>
          <hr />

        </div>
      </div>
    </div >
  );
}

export default inventoryCardDetails;
