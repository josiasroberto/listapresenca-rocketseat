import './styles.css';

export function Card(props){//({name,time}) desestruturando //props.name seria apenas {name}
  return(
    <div className='card'>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}