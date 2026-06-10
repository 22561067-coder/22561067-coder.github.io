/*function NumberList(props) {
  const {numbers} = props;

  const listItems = numbers.map((number)=>
    <li>{number}</li>
  );

  return(
    <ul>{listItems}</ul>
  );
}*/

function NumberList(props) {
    const {numbers} = props;
    const listItems = numbers.map((number)=>
        <li key={number.toString()}>
            {number}
        </li>
        
    )
}
export default NumberList;