import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "Phone Number",
      value: "+92 3013006456",
    },
    {
      title: "Email",
      value: "apervaiz622@gmail.com",
    },
    {
      title: "Instagram",
      value: "@_ahsun_x",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contact Me
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        I’d love to hear from you! Whether you have a project you'd like to
        discuss, need some advice, or just want to say hello, feel free to get
        in touch. Let's collaborate and create something amazing together!
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className="item" key={key}>
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Contacts;
