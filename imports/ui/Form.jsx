import React from 'react';
import TextFields from './TextFields';
import Selector from './Select';
import TimePicker from './TimePicker';

const Form = () => (
  <div>
    <TextFields />
    <Selector />
    <TimePicker />
  </div>
);

export default Form;