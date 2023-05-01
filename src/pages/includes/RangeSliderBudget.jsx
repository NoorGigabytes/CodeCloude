import React, { useState, useRef } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSliderBudget = ({ field, form, min, max, step }) => {
  // const [value, setValue] = useState([min, max]);
  const [value, setValue] = useState(field.value || form.initialValues.range);
  const handleRef = useRef(null);

  const handleChange = (newValue) => {
    setValue(newValue);
    form.setFieldValue("budget", newValue);
  };

  const handleWithRef = (handle) => {
    handleRef.current = handle;
  };

  return (
    <div className='bg-white border shadow-sm py-8 px-4 flex justify-center items-center gap-4 text-lg font-medium text-gray-400'>
      <div className='text-center'>
        <p className='font-normal md:px-5'>From</p>
        <p>${value[0]}</p>
      </div>
      <Range
        value={form.values["budget"] || value}
        name={"budget"}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        allowCross={false}
      />
      <div className='text-center'>
        <p className='font-normal md:px-5'>To</p>
        <p>${value[1]}</p>
      </div>
    </div>
  );
};

export default RangeSliderBudget;
