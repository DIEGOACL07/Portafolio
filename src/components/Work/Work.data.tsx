import { FaJava } from "react-icons/fa";
import { SiCsswizardry, SiHtml5, SiJavascript, SiReact, SiSpringboot, SiTailwindcss, SiTypescript } from "react-icons/si";

export const cardContent = [
  {
    id: 0,
    title: "Calculador de Presupuesto",
    description:
      "Proyecto de Calculador de Presupuesto entre Ingresos y Egresos realizado en HTML,CSS y JS.",
    imageUrl: "/presupuesto-app.JPG",
    link: "https://diegoacl07.github.io/proyecto-presupuesto.github.io/",
    skills: [
      {
        icon: <SiHtml5 size="40" />
      },
      {
        icon: <SiCsswizardry size="40" />
      },
      {
        icon: <SiJavascript size="40" />
      },
    ]
  },
  {
    id: 1,
    title: "Frontend de Ecommer",
    description:
      "Proyecto Front-end de Ecommer realizado en TS, React y Tailwind.",
    imageUrl: "/ecommer.JPG",
    link: "https://github.com/DIEGOACL07/ecommer-app-ts",
    skills: [
      {
        icon: <SiTypescript size="40" />
      },
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiTailwindcss size="40" />
      },
    ]
  },
  {
    id: 2,
    title: "Administracion de Institucion Educativa",
    description:
      "Proyecto Full-Stack de un Sistema de Administracion de Institucion Educativa realizado en Java, TS, Spring-Boot, React, Tailwind.",
    imageUrl: "/login1.JPG",
    link: "https://github.com/DIEGOACL07/forge-app-back",
    skills: [
      {
        icon: <FaJava  size="40" />
      },
      {
        icon: <SiTypescript size="40" />
      },
      {
        icon: <SiSpringboot size="40" />
      },
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiTailwindcss size="40" />
      },
    ]
  },
];
