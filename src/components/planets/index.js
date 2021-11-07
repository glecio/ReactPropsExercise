import React from "react";
import Planet from "./planet";

const showMessage = (name) => {
  console.log(`clicou em : ${name}`);
};

const Planets = () => {
  return (
    <div className="planets">
      <h1>Planets List</h1>
      <hr />
      <Planet
        title_italic={true}
        name="Mercurio"
        description="Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Quem num gosta di mim que vai caçá sua turmis! Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est."
        link=""
        img_url="https://pluspng.com/img-png/planet-png-hd-space-planet-transparent-background-1000.png"
        bordered={true}
        showMessage={showMessage}
      />

      <Planet
        title_italic={false}
        name="Marte"
        description="Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Quem num gosta di mim que vai caçá sua turmis! Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est."
        link="https://google.com"
        img_url="https://pluspng.com/img-png/planet-png-hd-space-planet-transparent-background-1000.png"
        bordered={false}
        showMessage={showMessage}
      />

      <Planet
        title_italic={false}
        name="Plutão"
        description="Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Quem num gosta di mim que vai caçá sua turmis! Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est."
        link="https://google.com"
        img_url="https://pluspng.com/img-png/planet-png-hd-space-planet-transparent-background-1000.png"
        bordered={true}
        showMessage={showMessage}
      />
    </div>
  );
};

export default Planets;
