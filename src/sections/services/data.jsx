import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { HiCode } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { SiGooglecolab } from "react-icons/si";
import { SiExpress } from "react-icons/si";

import { VscSymbolNamespace } from "react-icons/vsc";
const data = [

  {
    id: 2,
    icon: <FaJava />
,
    title: "Java",
    dsc: "Deep understanding of Java Programming Language and OOPs concepts",
  },

  {
      id: 8,
      icon: <SiExpress />
,
      title: "Express.js",
      dsc: "Has build a blog website using Express.js framework which required its extensive use",
    },
    {
        id: 8,
        icon: <IoLogoJavascript />,

        title: "JavaScript",
        dsc: "Understanding of JavaScript and also implemented it on several projects",
      },
  {
    id: 8,
    icon: <HiCode />,
    title: "Data Structure  and Algorithms",
    dsc: "Well versed in DSA (had the highest grade for this subject in my class). Have solved 40+ LeetCode questions",
  },
  {
    id: 3,
    icon: <VscSymbolNamespace />,
    title: "Programming languages",
    dsc: "Skilled in C, Java & JavaScript",
  },
{
    id: 1,
    icon: <FaReact />,
    title: "React",
    dsc: "Skilled at using hooks such as useState, React Routing and Animations",
  },
  {
    id: 5,
    icon: <IoLogoCss3 />,
    title: "CSS",
    dsc: "Capable of designing beautiful UIs using CSS-3",
  },
  { id: 6, icon: <AiFillHtml5 />, title: "HTML", dsc: "Well versed in HTML5" },
];

export default data;
