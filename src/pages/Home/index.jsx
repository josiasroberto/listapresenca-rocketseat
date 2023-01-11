import React, {useState, useEffect} from 'react';
import './styles.css';

import { Card } from '../../components/Card';

export function Home() {

  /*let studentName ="";

  function handleNameChange(name){
    studentName = name;
  }*/

    const [studentName,setStudentName] = useState('');
    const [students,setStudents] = useState([]);
    const [user, setUser] = useState({name: '',avatar:''});

    function handleAddStudent(){
      const newStudent ={
        name: studentName,
        time: new Date().toLocaleDateString("pt-br",{
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      };
      setStudents(prevState =>[...prevState, newStudent]); 
      //spread operator (...)é usado para que todos os estados anteriores fiquem no mesmo nível no vetor
    }

    useEffect(() =>{//é executado automaticamente quando a interface é renderizada
      //ações que eu quero que execute
      fetch('https://api.github.com/users/josiasroberto')
      .then(response => response.json())
      .then(data =>{
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        })
      })

    },[]/*(dependências): toda vez que o estado for alterado o useEffect vai ser chamado*/);


    return (
    <div className='container'>
      
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite o nome..."
        //onChange={e => handleNameChange(e.target.value)} antiga usando variável
        onChange={e => setStudentName(e.target.value)}//usando State
        
      />
      <button type="button" onClick={handleAddStudent}>Adicionar</button>

      {
        students.map(student => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time}/>
        ))
        
      }
      
      
    </div>
  )
}

//export default Home (o export vai na linha function e no arquivo main, Home fica entre '{}' )
