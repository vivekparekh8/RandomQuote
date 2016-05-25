import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const CardExampleWithAvatar = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Card>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="http://lorempixel.com/100/100/nature/"
      />
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src="http://lorempixel.com/600/337/nature/" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </MuiThemeProvider>
);

export default class cardd extends Component {
  render(){
      return (
        <CardExampleWithAvatar />
      )
  }

}

