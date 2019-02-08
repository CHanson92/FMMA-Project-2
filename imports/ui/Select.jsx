import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
  },
});

class Selector extends React.Component {
  state = {
    typeofmartialart: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Type of Martial Art</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.typeofmartialart}
            onChange={this.handleChange}
            inputProps={{
              name: 'typeofmartialart',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'judo'}>Judo</MenuItem>
            <MenuItem value={'bjj'}>Brazilian Jiu-Jitsu</MenuItem>
            <MenuItem value={'muaythai'}>Muay Thai</MenuItem>
            <MenuItem value={'submissionwrestling'}>Submission Wrestling</MenuItem>
          </Select>
        </FormControl>
    );
  }
}

Selector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Selector);