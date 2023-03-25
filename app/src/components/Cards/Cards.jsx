import Card from '../Card/Card';
import Styles from './Cards.module.css';

export default function Cards({ onClose, pacientes }) {
  return (
    <div className={Styles.container}>
    {pacientes.map(paciente => (
      <Card
        key={paciente.dni}
        nombre={paciente.nombre}
        apellido={paciente.apellido}
        dni={paciente.dni}
        email={paciente.email}
        doctor={paciente.doctor}
        lugarDeTurno={paciente.lugarDeTurno}
        onClose={() => onClose(paciente.dni)}
      />
    ))}
    </div>
  )
}
