import './App.css'
import Button from './Button/Button'
import ChildrenExample from './ChildrenExample/ChildrenExample'
import Navigation from './Navigation/Navigation'
import StudentCard from './StudentCard/StudentCard'
import Title from './Title/Title'

import ReactPlayer from 'react-player'

const App = () => {

  return (

    <div className="App">

      <Navigation />

      <Title text={'Listado principal de alumnxs'} />

      <Button
        href={"/contacto"}
        text={"Contacta con nosotros"}
        highlighted={true}
      />

      <Button
        href={"/alumnos"}
        text={"Ver todo el listado"}
        highlighted={false}
      />

      <hr />

      <StudentCard
        studentInfo={{
          firstName: 'Ariana',
          lastName: 'Whatever',
          age: 33,
          bootcamp: 'Data',
          image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-1158.jpg'
        }}
      />

      <StudentCard
        studentInfo={{
          firstName: 'Stuart',
          lastName: 'Little :D',
          age: 22,
          bootcamp: 'Web Dev',
          image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-1600.jpg'
        }}
      />

      <StudentCard
        studentInfo={{
          firstName: 'Mina',
          lastName: 'Bottiesso D:',
          age: 35,
          bootcamp: 'UX/UI',
          image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-1712.jpg'
        }}
      />

      <StudentCard
        studentInfo={{
          firstName: 'Sandra',
          lastName: 'Whatever',
          age: 42,
          bootcamp: 'Data',
          image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-1723.jpg'
        }}
      />

      <Title text={'Ejemplo de componente con CHILDREN'} />

      <ChildrenExample>
        <p>Yo soy un children anidado</p>
        <p>Yo seré otro jeje</p>
      </ChildrenExample>

      <Title text={'Y ahora un vídeo de Karina'} />

      <ReactPlayer url={'https://www.youtube.com/watch?v=FginhFF0AKE'} playing={true} muted={true} />


    </div>
  )
}

export default App