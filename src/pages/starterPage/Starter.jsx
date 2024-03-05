import React from "react";
import "./starter.css";
import logo from "../../main_img.png";
import Button from "../../components/btn/Button";

const Starter = () => {
  return (
    <div className="starter_wrapper">
      <img className="starter_img" src={logo} alt="logo" />
      <div className="text_block">
        <h3 className="text_block_title">Get things done with TODOO</h3>
        <p className="text_block_subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor duis
          sed duis suspendisse et. Non fames nibh non auctor malesuada ut
          consectetur. Ut quis id risus elit.
        </p>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Starter;
