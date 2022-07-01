import React, { useState } from "react";
import "./Tab.scss";

export const Tab = () => {
  const [toggleTabs, setToggleTabs] = useState(1);

  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  return (
    <div className="tab__globalComponent">
      <div className="tab__container">
        <div className="tab__content-tabs">
          <div
            className={
              toggleTabs === 1
                ? "tab__content tab__active-content tab__color1"
                : "tab__content"
            }
          >
            <div className="Tab__itemCard">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis expedita sapiente possimus libero ducimus totam sequi
                ab minima neque omnis, magnam fugiat voluptate repudiandae!
                Repudiandae rerum eos voluptate? Mollitia, qui? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nemo consequatur
                accusamus veritatis voluptas impedit magnam dicta eligendi iste
                id. Exercitationem, aut ducimus repellendus eveniet ad eum
                blanditiis nobis reiciendis pariatur? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Dicta alias quaerat nam
                adipisci. Veritatis, accusantium. Eos excepturi sunt corporis
                ullam tempora dolore esse officia, ducimus rem itaque dolorum
                rerum omnis? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quia dolor impedit ratione nisi optio quibusdam quasi odit
                iure blanditiis est, quaerat, recusandae perspiciatis. Esse
                deleniti adipisci tempore, saepe ratione eaque?
              </p>
            </div>
          </div>
          <div
            className={
              toggleTabs === 2
                ? "tab__content tab__active-content tab__color2"
                : "tab__content"
            }
          >
            <div className="tab__itemCard">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci provident odio eaque iste, a sequi placeat minus porro
                nobis quisquam officia quos modi debitis libero! Nobis alias et
                ea minima!
              </p>
            </div>
          </div>
          <div
            className={
              toggleTabs === 3
                ? "tab__content tab__active-content tab__color3"
                : "tab__content"
            }
          >
            <div className="tab__itemCard">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique nisi minus magnam blanditiis, voluptatibus ipsa ut
                molestiae doloribus vitae, mollitia nesciunt suscipit quam harum
                asperiores ipsam accusantium repellendus rem quo.
              </p>
            </div>
          </div>
        </div>

        <div className="tab__bloc-tabs">
          <div
            role="button"
            tabIndex={0}
            className={
              toggleTabs === 1
                ? "tab__tabs tab__active-tabs tab__color1"
                : "tab__tabs"
            }
            onClick={() => toggleTab(1)}
            onKeyPress={() => toggleTab(1)}
          >
            movie
          </div>
          <div
            role="button"
            tabIndex={0}
            className={
              toggleTabs === 2
                ? "tab__tabs tab__active-tabs tab__color2"
                : "tab__tabs"
            }
            onClick={() => toggleTab(2)}
            onKeyPress={() => toggleTab(2)}
          >
            book
          </div>
          <div
            role="button"
            tabIndex={0}
            className={
              toggleTabs === 3
                ? "tab__tabs tab__active-tabs tab__color3"
                : "tab__tabs"
            }
            onClick={() => toggleTab(3)}
            onKeyPress={() => toggleTab(3)}
          >
            music
          </div>
        </div>
      </div>
    </div>
  );
};
