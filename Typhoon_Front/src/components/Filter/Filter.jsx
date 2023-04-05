
const Filter = (props) => {
  
  return (
    <select 
          onChange={props.handleChange}
          defaultValue=""
          style={{
            padding:'.2em',
            borderRadius:'.7em',
            borderColor:'#121212',}}>
          <option value="">niveau</option>
          <option value="">All</option>
          <option value="II1">ii1</option>
          <option value="II2">ii2</option>
          <option value="II3">ii3</option>
        </select>
  );
};

export default Filter;
