import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {
  state = {
    name: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
    <div>
        <h3>Want to add your martial arts gym? Add it below!</h3>
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
            />

            <TextField
            id="outlined-name"
            label="Description"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            />

            <TextField
            id="outlined-name"
            label="Location"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            />

            <TextField
            id="outlined-name"
            label="Type Of Martial Art"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            />
        </form>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);