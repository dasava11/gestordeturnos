import Card from '../Card/Card';

export default function Cards({ onClose, pacientes }) {
  return (
    <div>
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
