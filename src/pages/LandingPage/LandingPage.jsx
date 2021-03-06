import React from "react";
import BurgerAnimated from "../../components/BurgerAnimated/BurgerAnimated";
import { ButtonPrimary } from "../../components/UI/Button";
import Classes from "./LandingPage.module.scss";

function LandingPage() {
  return (
    <div className={Classes.Container}>
      <BurgerAnimated />
      <div className={Classes.TextContainer}>
        <div className={Classes.Title}>
          Burger Builder
          <br />
          <span>React App</span>
        </div>

        <div className={Classes.Text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non
          aliquid quidem minus deserunt et, qui laboriosam modi! Mollitia
          asperiores placeat numquam qui error animi doloribus neque, molestias
          exercitationem quis.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non
          aliquid quidem minus deserunt et, qui laboriosam modi! Mollitia
          asperiores placeat numquam qui error animi doloribus neque, molestias
          exercitationem quis.
        </div>
        <div className={Classes.Buttons}>
          <ButtonPrimary href="app">View Live App</ButtonPrimary>
          <a href="http://google.com" target="_blank" rel="noreferrer">
            View Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
