import SilverWare from '../SilverWare/SilverWare'

function DinnerSupplies({guestList}) {
  return (
  <>  
    <h2>Dinner Supplies</h2>
    <SilverWare count={guestList} />

  </>    
  );
}

export default DinnerSupplies;