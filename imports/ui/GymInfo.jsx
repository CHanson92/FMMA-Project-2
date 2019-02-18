import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Fuse from 'fuse.js';
import FMMA from '../api/fmma';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
});

class GymInfo extends Component {
    constructor(props) {
        super(props);
        this.initSearch = this.initSearch.bind(this);
        this.search = this.search.bind(this);
        this.state = {results: [], expanded: false }
    }
    componentDidMount() {
        this.initSearch();
        if (this.props.searched) {
            this.search(this.props.searchTerm)
            this.props.toggleSearch();
        }    
    }


    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    componentDidUpdate() {
        this.initSearch();
        if (this.props.searched) {
            this.search(this.props.searchTerm)
            this.props.toggleSearch();
        }

    }
    initSearch() {
        var options = {
            shouldSort: true,
            tokenize: true,
            threshold: 0.2,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
            "location"
            ]
        };
        this.fuse = new Fuse(this.props.all, options);
    }
    search(searchTerm) {
        this.setState({ results: this.fuse.search(searchTerm)});
    }

    displayGyms(gyms) {
        const { classes } = this.props;
        let displayGym = gyms.map((gym) => {
        const icon = <><i className="material-icons">location_on</i>{gym.address}</>
        return (
            <div>
            <CardHeader
                title={gym.name}
                subheader={icon}
                />
            <CardContent>
                <Typography paragraph>
                {gym.description}
                </Typography>
                <CardActions className="expandmore" disableActionSpacing>
                    <IconButton
                        className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    </CardActions>
                {this.displayMartialArtClasses(gym.martialArtClass)}
            </CardContent>
            </div>
            );
        });

        return displayGym
    }

    displayMartialArtClasses(martialArtClasses) {
        let martialArtClassDisplay = martialArtClasses.map((martialArtClass) => ( 
                <Typography component="p">
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    {martialArtClass.martialArt}
                        {this.displaySessionTimes(martialArtClass.session)}
                    </Collapse>
                </Typography>
        ))
        return martialArtClassDisplay
    }

    displaySessionTimes(sessionTimes) {
        let sessionTimesDisplay = sessionTimes.map((session) =>
            <Typography component="p">
            {session.day} from {session.startTime}-{session.endTime}
            </Typography>
        );

        return sessionTimesDisplay
    }

    render() {
        const { classes } = this.props;
        const results = this.state.results.map((result, i) => {
            return (
                <Card className={classes.card}>
                    {this.displayGyms(result.gym)}
                </Card>
            )
        });
        return (
            <div>
                <ul>{results}</ul>
            </div>
        )
    }
}

GymInfo = withStyles(styles)(GymInfo);

export default GymContainer = withTracker(() => {
    return {
      all: FMMA.find().fetch()
    };
})(GymInfo);