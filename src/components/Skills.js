import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faLaravel,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";
import {
  faDatabase,
  faFire,
  faFireBurner,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "Ad ad in cillum ut labore irure aliqua. Ex sit dolore ipsum id duis nostrud veniam. Nisi duis ut veniam ut eiusmod occaecat ullamco ullamco. Consequat eu sunt ut elit dolor sint magna magna velit ex. Excepteur occaecat reprehenderit tempor veniam.",
      icon: faCss3,
    },
    {
      name: "Javascript",
      des: "Sunt nostrud nulla qui cillum mollit aute anim anim aliqua aute magna tempor. Do culpa culpa excepteur officia ut eu deserunt proident sint non ut do magna minim. Sunt et excepteur tempor culpa irure non exercitation. Amet nostrud ex aute incididunt incididunt ipsum.",
      icon: faJs,
    },
    {
      name: "ReactJs",
      des: "Voluptate qui adipisicing dolore pariatur laboris deserunt consectetur reprehenderit. Esse dolor elit ullamco duis quis aliquip fugiat ipsum nisi est et. Nisi ut deserunt excepteur irure aliquip proident ",
      icon: faReact,
    },
    {
      name: "NODE JS",
      des: "Laborum commodo reprehenderit anim sunt est. Aliquip ipsum nisi incididunt enim ex id et sit sint magna. Deserunt minim ullamco aute veniam. Do irure nulla ut quis.",
      icon: faNodeJs,
    },
    {
      name: "ExpressJs",
      des: "Ullamco incididunt adipisicing laboris ullamco ipsum quis nulla non. Non et irure amet in sint duis Lorem est eiusmod nisi. Aute dolor eiusmod esse et cupidatat ex minim do reprehenderit ut aute. In commodo do consectetur qui occaecat cupidatat sint ullamco dolor tempor ullamco elit.",
      icon: faJs,
    },
    {
      name: "MONGO DB",
      des: "Ullamco incididunt adipisicing laboris ullamco ipsum quis nulla non. Non et irure amet in sint duis Lorem est eiusmod nisi. Aute dolor eiusmod esse et cupidatat ex minim do reprehenderit ut aute. In commodo do consectetur qui occaecat cupidatat sint ullamco dolor tempor ullamco elit.",
      icon: faDatabase,
    },
    {
      name: "FIREBASE",
      des: "Ullamco incididunt adipisicing laboris ullamco ipsum quis nulla non. Non et irure amet in sint duis Lorem est eiusmod nisi. Aute dolor eiusmod esse et cupidatat ex minim do reprehenderit ut aute. In commodo do consectetur qui occaecat cupidatat sint ullamco dolor tempor ullamco elit.",
      icon: faFire,
    },
    {
      name: "Talwind CSS",
      des: "Ullamco incididunt adipisicing laboris ullamco ipsum quis nulla non. Non et irure amet in sint duis Lorem est eiusmod nisi. Aute dolor eiusmod esse et cupidatat ex minim do reprehenderit ut aute. In commodo do consectetur qui occaecat cupidatat sint ullamco dolor tempor ullamco elit.",
      icon: faCss3,
    },
    {
      name: "React Native",
      des: "Ullamco incididunt adipisicing laboris ullamco ipsum quis nulla non. Non et irure amet in sint duis Lorem est eiusmod nisi. Aute dolor eiusmod esse et cupidatat ex minim do reprehenderit ut aute. In commodo do consectetur qui occaecat cupidatat sint ullamco dolor tempor ullamco elit.",
      icon: faReact,
    },
  ]);
  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}I have honed a diverse set of technical skills, enabling me to
        build powerful, scalable, and user-friendly applications. Below are some
        of the key technologies and tools I work with to bring my projects to
        life.
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className={"item  myup"}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            {/* <div className="des">{value.des}</div> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
