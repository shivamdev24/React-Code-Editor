import React from "react";
import Select from "react-select";
import { languageOptions } from "../constants/languageOptions";

const LanguagesDropdown = ({ onSelectChange }) => {


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "300px", // Set the width of the control
      border: "none", // Remove the border
      outline: "1px", // Remove the outline
      color: "#000", // Text color
      // Add other custom styles as needed
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#fff" : "#5C6BC0", // Background color for options
      color: state.isSelected ? "#000" : "#fff", // Text color for options
      // Add other custom styles for options
    }),

    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "#5C6BC0", // Background color for the menu
      // Add other custom styles for the menu
    }),

    placeholder: (provided, state) => ({
      ...provided,
      color: "#000", // Placeholder text color
      // Add other custom styles for the placeholder
    }),
  };

  return (
    <Select
      options={languageOptions}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
      styles={customStyles}
    />
  );
};

export default LanguagesDropdown;
