import './StudentCard.css'

const StudentCard = ({ studentInfo }) => {

    const { age, lastName, firstName, bootcamp, image } = studentInfo

    const group = age < 25 ? 'Grupo 1' : 'Grupo 2'
    const fullName = `${firstName} ${lastName}`

    return (
        <article className="StudentCard">
            <img src={image} alt={fullName} />
            <h2>{firstName} {lastName}</h2>
            <p>{age} años | Bootcamp {bootcamp}</p>
            <p>Pertenece al {group}</p>
        </article>
    )
}

export default StudentCard