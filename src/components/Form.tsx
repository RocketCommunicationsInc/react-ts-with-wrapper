import React from "react";
import { useState } from "react";
import {
  RuxButton,
  RuxInputField,
  RuxTextarea,
  RuxRadioGroup,
  RuxRadio,
  RuxPushButton,
  RuxCheckbox,
} from "astro-in-react";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [textarea, setTextarea] = useState<string>("");
  const [radioVal, setRadioVal] = useState<string>("");
  const [pushButton, setPushButton] = useState<string>("");
  const [checkboxVal, setCheckboxVal] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    return alert(
      `Email: ${email} \n Pw: ${pw} \n Textarea: ${textarea} \n RadioVal: ${radioVal} \n PushButton: ${pushButton}
      \n Checkbox: ${checkboxVal}
      `
    );
  };
  return (
    <div>
      <form className="default-form">
        <h1>Basic Form</h1>
        <RuxInputField
          label="Email"
          small="true"
          type="email"
          placeholder="zelda@hyrule.com"
          onSubmit={handleSubmit}
          //* This works too
          // onInput={(e: Event) => {
          //   const target = e.target as HTMLInputElement;
          //   console.log(target.value, "TARGE VAL");
          //   setEmail(target.value);
          // }}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          //! onChange isn't working.
          //! In storybook actions, rux-input gets fired while typing,
          //! and rux-change gets fired when you click away.
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(ev.target.value)
          }
        ></RuxInputField>

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPw(e.target.value)}
          // onInput={(e) => setPw(e.target.value)}
        ></input>
        <RuxTextarea
          help-text="Help Text"
          placeholder="RuxTextarea"
          onInput={(e: React.ChangeEvent<HTMLRuxTextareaElement>) =>
            setTextarea(e.target.value)
          }
        ></RuxTextarea>
        <br />
        <RuxRadioGroup
          name="radios"
          onInput={(e: React.ChangeEvent<HTMLRuxRadioGroupElement>) => {
            console.log("inside onChange radio group");
            setRadioVal(e.target.value);
          }}
        >
          <RuxRadio value="one" name="radios">
            One
          </RuxRadio>
          <RuxRadio value="two" name="radios">
            Two
          </RuxRadio>
          <RuxRadio value="three" name="radios">
            Three
          </RuxRadio>
        </RuxRadioGroup>
        <br />
        {/* Push button once clicked, doesn't remove itself from state if clicked agian to off. */}
        <RuxPushButton
          label="Push Button"
          name="pushbutton"
          value="pushbutton"
          onInput={(e: React.ChangeEvent<HTMLRuxPushButtonElement>) =>
            setPushButton(e.target.value)
          }
        />
        <br />
        <RuxCheckbox
          name="checkbox"
          value="checkbox"
          onInput={(e: React.ChangeEvent<HTMLRuxCheckboxElement>) => {
            console.log("OnINput!");
            console.log(e.target, "TARGET");
            // console.log(e.target.value, "VAL!");
            console.log(e.target.checked, "CHECKED");
            setCheckboxVal(e.target.value);
          }}
          // onClick={(e: React.MouseEvent<HTMLRuxCheckboxElement>) => {
          //   console.log("onClick!");
          //   const target = e.target as HTMLInputElement;
          //   setCheckboxVal(target.value);
          // }}
        >
          Checkbox
        </RuxCheckbox>
        <RuxButton
          onClick={(e: React.MouseEvent) => handleSubmit(e)}
          className="rux-but"
        >
          Submit
        </RuxButton>
      </form>
    </div>
  );
};

export default Form;

/*
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

*/
