// Botón reutilizable básico: componente flexible para cualquier acción.
// Props:
//   - title: Texto del botón (opcional)
//   - onClick: Función callback al hacer clic (default: sin acción)
//   - typeButton: Tipo de botón 1=primary, 2=secondary, 3=tertiary (default: 1)
//   - enable: Habilita o deshabilita el botón (default: true)
//   - icon: Componente SVG para mostrar como icono (opcional)
// Ejemplo:
// <ButtonBasic
//   title="Primario" //opcional
//   icon={null} //opcional
//   onClick={null}
//   typeButton={1}
//   enable={true}
// />

"use client";

import React from "react";

interface ButtonBasicProps {
  title?: string;
  onClick?: () => void;
  typeButton: 1 | 2 | 3;
  enable?: boolean;
  icon?: React.ReactNode;
}

const ButtonBasic = ({
  title,
  onClick = () => {},
  typeButton = 1,
  enable = true,
  icon,
}: ButtonBasicProps) => {
  const getClassName = () => {
    if (typeButton === 1) return "btn btn-primary";
    if (typeButton === 2) return "btn btn-secondary";
    return "btn btn-tertiary";
  };

  return (
    <button className={getClassName()} disabled={!enable} onClick={onClick}>
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </button>
  );
};

export default ButtonBasic;
