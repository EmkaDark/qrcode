import React from "react";
import "@/styles/Heading.scss";
const Heading = () => {
  return (
    <section>
      <div className="container">
        <div className="hero_group">
          <h1 className="heading">Генератор QR кода онлайн</h1>
          <p className="hero_desc">
            Создайте QR-код для вашего текста, URL или другой информации.
            Введите данные и получите уникальный QR-код, который можно
            использовать для различных целей: маркетинга, информации, личных
            нужд и т. д.
          </p>
          <p className="hero_desc">
            Введите текст в поле и сгенерируйте свой QR код!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heading;
