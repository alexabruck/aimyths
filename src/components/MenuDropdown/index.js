import React from "react"
import Select from "react-select"
import { navigate } from "gatsby"
import contentStructure from "../../content-structure"

const options = contentStructure.myths
  .filter(myth => !myth.hide && !myth.isDraft)
  .map(myth => ({
    value: myth.link,
    label: myth.title,
  }))

const dropdownStyles = {
  control: (base, state) => ({
    ...base,
    background: "inherit",
    color: "white",
    border: state.isFocused ? "1px" : "1px solid white",
    boxShadow: state.isFocused ? "0 0 15px #fff" : "0 0 5px #fff",
    padding: "0 0 0 0",
    "&:focus": {
      border: "1px solid white",
    },
  }),
  input: base => ({
    color: "white",
  }),
  menu: base => ({
    ...base,
    background: "#0d072e",
    zIndex: 2,
    height: "auto",
    padding: "0 0 0 0",
  }),
  menuList: base => ({
    ...base,
    maxHeight: "auto",
  }),
  option: base => ({
    ...base,
    background: "#0d072e",
    "&:hover": {
      // Overwrittes the different states of border
      //background: "black",
      textShadow:
        "-0.2rem -0.2rem 0.5rem #fff, 0.2rem 0.2rem 0.5rem #fff, 0 0 1rem #feb9b2",
    },
  }),
  singleValue: base => ({
    ...base,
    color: "white",
    lineHeight: "inherit",
  }),
}

export default ({ currentLocation }) => {
  return (
    <Select
      options={options}
      styles={dropdownStyles}
      defaultValue={options.find(el => el.value === currentLocation)}
      onChange={({ value }) => navigate(value)}
      isSearchable={false}
    />
  )
}
