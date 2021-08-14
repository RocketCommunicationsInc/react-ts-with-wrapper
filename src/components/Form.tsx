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
  RuxSlider,
  RuxSwitch,
  RuxSelect,
} from "astro-in-react";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [textarea, setTextarea] = useState<string>("");
  const [radioVal, setRadioVal] = useState<string>("");
  const [pushButton, setPushButton] = useState<string>("");
  const [checkboxVal, setCheckboxVal] = useState<string>("");
  const [sliderVal, setSliderVal] = useState<number>();
  const [switchVal, setSwitchVal] = useState<string>("");
  const [selectVal, setSelectVal] = useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    return alert(
      `Email: ${email} \n Pw: ${pw} \n Textarea: ${textarea} \n RadioVal: ${radioVal} \n PushButton: ${pushButton}
      \n Checkbox: ${checkboxVal} \n SliderVal: ${sliderVal} \n SwitchVal: ${switchVal} \n SelectVal: ${selectVal}
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
          onRux-change={(e: React.ChangeEvent<HTMLRuxInputFieldElement>) =>
            setEmail(e.target.value)
          }
        ></RuxInputField>

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPw(e.target.value)}
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
        <RuxPushButton
          label="Push Button"
          name="pushbutton"
          value="pushbutton"
          onRux-change={(e: React.ChangeEvent<HTMLRuxPushButtonElement>) =>
            setPushButton(e.target.checked ? e.target.value : "")
          }
        />
        <br />
        <RuxCheckbox
          name="checkbox"
          value="checkbox"
          onRux-change={(e: React.ChangeEvent<HTMLRuxCheckboxElement>) => {
            setCheckboxVal(e.target.checked ? e.target.value : "");
          }}
        >
          Checkbox
        </RuxCheckbox>
        <br />
        {/*! Slider hasn't been merged yet. */}
        {/* <RuxSlider
          onRux-change={(e: React.ChangeEvent<HTMLRuxSliderElement>) => {
            setSliderVal(e.target.value);
          }}
        /> */}
        <RuxSwitch
          value="switch"
          onRux-change={(e: React.ChangeEvent<HTMLRuxSwitchElement>) =>
            setSwitchVal(e.target.checked ? e.target.value : "")
          }
        />
        <br />
        <RuxSelect
          label="Select Menu"
          name="select"
          onRux-change={(e: any) => console.log(e)}
        >
          <option value="opt">Select Something</option>
          <optgroup label="Group 1">
            <option value="1">1</option>
            <option value="2">2</option>
          </optgroup>
        </RuxSelect>
        <RuxButton
          onClick={(e: React.MouseEvent) => handleSubmit(e)}
          className="rux-but"
          icon="check"
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
