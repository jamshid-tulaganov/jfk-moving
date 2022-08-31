import React from 'react'
import Select from 'react-select'

const customStyle = {
      indicatorSeparator: (provided, state) => {
        const display = 'none';
      },
      indicatorsContainer: (provided, state) => ({
          ...provided,
          'transform': 'rotate(-90deg)',
          'marginRight': '20px'
      }),
      container: (provided, state) => (
        {
          ...provided,
          width:'100%',
          height:'64px'
        }
      ),
      control: (provided, state) => ({
          ...provided,
          'border': 'none',
          'boxShadow':'none'
      }),
      valueContainer: (provided, state) => ({
         ...provided,
        'padding': '14px 20px', 
      }),
      DropdownIndicator: (provided, state) => ({
        ...provided,
        "color": "#447e7f"
      }),
      placeholder: (provided, state) => ({
        ...provided,
        'lineHeight': '26px',
        'fontSize': '18px',
        'fontFamily': "InterMedium",
        'color': '#bbb'
      }),
      input: (provided, state) => ({
        ...provided,
        'fontFamily': "InterMedium",
        'fontSize': '18px',
        color: '#447e7f'
      }),
      singleValue: (provided, state) => ({
        ...provided,
        'fontFamily': "InterMedium",
        'fontSize': '18px',
        color: '#447e7f'
      })
  }

const SelectComponent = ({selectData}) => (
  <Select styles={customStyle}  options={selectData} />
)

export default SelectComponent;