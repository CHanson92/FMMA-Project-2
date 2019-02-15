import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
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
    labelWidth: 0,
    isHidden: true,
    counter: 0
  }

  handleGymAdd() {
    let outgoingData = {
      "location": this.state.location,
      "gym": [
        {
          "name": this.state.gymName,
          "address": this.state.gymAddress ,
          "description": this.state.gymDescription,
          "martialArtClass": [
            {
              "martialArt": this.state.martialArt, 
              "session": [
                {"day": this.state.sessionDay, "startTime": this.state.sessionStart, "endTime": this.state.sessionEnd},
              ]
            }]
        }
      ]
    }
    Meteor.call(
      'FMMA.insert', outgoingData
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

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  martialArtCounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  render() {
    const { classes } = this.props;
    let martialartsessions = [];
    for(let i=0; i < this.state.counter; i++) {
      martialartsessions.push( <div key={i}>
        <FormControl className={classes.formControl}>
        <InputLabel>Martial Art</InputLabel>
        <Select
          value={this.state.martialArt}
          onChange={this.handleChange('martialArt')}
          inputProps={{
            name: 'martialArt',
            id: 'martialArt',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Judo'}>Judo</MenuItem>
          <MenuItem value={'Brazilian Jiu-Jitsu'}>Brazilian Jiu-Jitsu</MenuItem>
          <MenuItem value={'Muay Thai'}>Muay Thai</MenuItem>
        </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
        <InputLabel>Day</InputLabel>
        <Select
          value={this.state.sessionDay}
          onChange={this.handleChange('sessionDay')}
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
      )
    }
    return (
      <form>
        <div className="form">
          <FormControl className={classes.formControl}>
          <div className="textfields">
            <div className={classes.root}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={ref => {
                    this.InputLabelRef = ref;
                  }}
                  htmlFor="outlined-location-native-simple"
                >
                  Location
                </InputLabel>
                <Select
                  native
                  value={this.state.location}
                  onChange={this.handleChange('location')}
                  required={this.state.isHidden}
                  input={
                    <OutlinedInput
                      name="location"
                      labelWidth={this.state.labelWidth}
                      id="outlined-location-native-simple"
                    />
                  }
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </div>
            <div>
            <div>
              <Fab 
              onClick={this.toggleHidden.bind(this)}
              size="medium" 
              color="primary" 
              aria-label="Add" 
              className={classes.margin}>
                <AddIcon />
              </Fab>
              {!this.state.isHidden && 
              <TextField
              onChange={(e) => this.setState({location: e.target.value})}
              id="outlined-name"
              label="Location"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              required={!this.state.isHiddden} 
              />}
            </div>
            </div>
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
                onChange={this.handleChange('martialArt')}
                inputProps={{
                  name: 'martialArt',
                  id: 'martialArt',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'judo'}>Judo</MenuItem>
                <MenuItem value={'Brazilian Jiu-Jitsu'}>Brazilian Jiu-Jitsu</MenuItem>
                <MenuItem value={'muay thai'}>Muay Thai</MenuItem>
              </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
              <InputLabel>Day</InputLabel>
              <Select
                value={this.state.sessionDay}
                onChange={this.handleChange('sessionDay')}
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
              {<Fab
                onClick={this.martialArtCounter.bind(this)}
                size="medium" 
                color="primary"
                aria-label="Add" 
                className={classes.margin}>
                <AddIcon />
              </Fab>}
              {martialartsessions}
              </div>
          </FormControl>
        </div>
        <Button 
          onClick={this.handleGymAdd.bind(this)}
          variant="contained" 
          color="primary" 
          className={classes.button}>
          Upload
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(NewGymForm);