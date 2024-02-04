import React from 'react';

type Alumno = {
  name: string;
  edad: number;
  calificacion: number;
};

const calcularPromedio = (alumnos: Alumno[]): number => {
  const calificaciones = alumnos.map((alumno) => alumno.calificacion);

  const promedio =
    calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0) /
    calificaciones.length;

  return promedio;
};

export const CalcularPromedio: React.FC = () => {
  const alumnosEjemplo: Alumno[] = [
    {
      name: 'Viviana',
      edad: 19,
      calificacion: 10,
    },
    {
      name: 'Wendy',
      edad: 20,
      calificacion: 10,
    },
    {
      name: 'Gerson',
      edad: 18,
      calificacion: 10,
    },
  ];
  const promedio = calcularPromedio(alumnosEjemplo);

  return (
    <div>
      <h1>Promedio de calificaciones</h1>
      <p>
        El promedio de las calificaciones es: {promedio}
      </p>
    </div>
  );
}
console.log(calcularPromedio);
