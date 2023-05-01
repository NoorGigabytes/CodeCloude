import React, { useState, useRef } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSliderTime = ({ field, form, min, max, step }) => {
  const [value, setValue] = useState(field.value || form.initialValues.range);
  const handleRef = useRef(null);

  const handleChange = (newValue) => {
    setValue(newValue);
    form.setFieldValue("time", newValue);
  };


  return (
    <div className='bg-white border shadow-sm py-8 px-4 flex justify-center items-center md:gap-4 gap-2 text-lg font-medium text-gray-400'>
      <div className='text-center'>
        <p className='font-normal md:px-5 px-1'>From</p>
        <p>{value[0]} M</p>
      </div>
      <Range
        value={form.values["time"] || value}
        name={"time"}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        allowCross={false}
      />
      <div className='text-center'>
        <p className='font-normal md:px-5 px-3'>To</p>
        <p>{value[1]} M</p>
      </div>
    </div>
  );
};

export default RangeSliderTime;
