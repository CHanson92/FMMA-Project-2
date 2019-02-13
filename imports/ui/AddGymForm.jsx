import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Meteor } from 'meteor/meteor';

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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
  },
});

class NewGymForm extends Component {
  state = {
    location: '',
    gymName: '',
    gymAddress: '',
    gymDescription: '',
    martialArt: '',
    sessionDay: '',
    sessionStart: '',
    sessionEnd: '',
    open: false,
  }

  handleGymAdd() {
    Meteor.call(
      'FMMA.insert',
      this.state.location, 
      this.state.gymName, 
      this.state.gymAddress, 
      this.state.gymDescription, 
      this.state.martialArt, 
      this.state.sessionDay,
      this.state.sessionStart, 
      this.state.sessionEnd
    )
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  render() {
    const { classes } = this.props;
    console.log(this.state);
    return (
      <form>
        <div className="form">
          <FormControl className={classes.formControl}>
          <div className="textfields">
            <TextField onChange={(e) => this.setState({location: e.target.value})}
                id="outlined-name"
                label="Location"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required={true}
              />

              <TextField onChange={(e) => this.setState({gymName: e.target.value})}
                id="outlined-name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                margin="normal"
                variant="outlined"
                required={true}
              />

              <TextField onChange={(e) => this.setState({gymAddress: e.target.value})}
                id="outlined-name"
                label="Address"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required={true}
                multiline={true}
                rows={5}
                rowsMax={5}
              />

              <TextField onChange={(e) => this.setState({gymDescription: e.target.value})}
                id="outlined-name"
                label="Description"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required={true}
                multiline={true}
                rows={5}
                rowsMax={5}
              />
              </div>
          <div className="selecttimepicker">
              <FormControl className={classes.formControl}>
              <InputLabel>Martial Art</InputLabel>
              <Select
                value={this.state.martialArt}
                onChange={this.handleChange}
                inputProps={{
                  name: 'martialArt',
                  id: 'martialArt',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'judo'}>Judo</MenuItem>
                <MenuItem value={'brazilian jiu-jitsu'}>Brazilian Jiu-Jitsu</MenuItem>
                <MenuItem value={'muay thai'}>Muay Thai</MenuItem>
              </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
              <InputLabel>Day</InputLabel>
              <Select
                value={this.state.sessionDay}
                onChange={this.handleChange}
                inputProps={{
                  name: 'sessionDay',
                  id: 'sessionDay',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Monday'}>Monday</MenuItem>
                <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
                <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
                <MenuItem value={'Thursday'}>Thursday</MenuItem>
                <MenuItem value={'Friday'}>Friday</MenuItem>
                <MenuItem value={'Saturday'}>Saturday</MenuItem>
                <MenuItem value={'Sunday'}>Sunday</MenuItem>
              </Select>
              </FormControl>

              <TextField onChange={(e) => this.setState({sessionStart: e.target.value})}
                id="time"
                label="Session Start Time"
                type="time"
                defaultValue="12:00"
                style={{marginTop: 8, width: 150}}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 900, // 15 min
                }}
              />

              <TextField onChange={(e) => this.setState({sessionEnd: e.target.value})}
                id="time"
                label="Session End Time"
                type="time"
                defaultValue="13:00"
                style={{marginTop: 8, width: 150}}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 900, // 15 min
                }}
              />
              </div>
          </FormControl>
        </div>
        <button onSubmit={this.handleGymAdd()} 
        onClick={()=>{ alert('The gym has been added successfully'); }}>
        Add your martial arts gym!</button>
      </form>
    )
  }
}

export default withStyles(styles)(NewGymForm);