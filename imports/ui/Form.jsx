import React from 'react';
import TextFields from './TextFields';
import Selector from './Select';
import TimePicker from './TimePicker';
import FormControl from '@material-ui/core/FormControl';

const Form = () => (
  <div className="form">
    <h3>Want to add your martial arts gym? Add it below!</h3>
    <form>
    <FormControl>
    <TextFields />
    <div className="selectortimepicker">
    <Selector />
    <TimePicker />
    </div>
    </FormControl>
    </form>
    <button>Add your martial arts gym!</button>
  </div>
);

export default Form;