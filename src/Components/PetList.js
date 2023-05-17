export const PetList = (props) => {
  return (
    <aside className="pets-list">
      {(props.pets.length===0)?
      <p>No pets listed for this employee.</p>
      :
      props.pets.reduce((ac,pet)=>{
        ac.push(pet.name)
        return ac;
      },[]).join(", ")
    }</aside>
  );
};

export default PetList;
