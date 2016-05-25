import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import helpers from '../utils/xhr'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const CardExampleWithAvatar = (data) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Card>
      <CardHeader
        title={data.quote.title}
        subtitle={data.quote.date}
        avatar="http://lorempixel.com/100/100/nature/"
      />
      <CardMedia
        overlay={<CardTitle title={data.quote.author} subtitle="Author" />}
      >
        <img src={data.quote.background} />
      </CardMedia>
      <CardTitle title="Quote" subtitle={data.quote.author} />
      <CardText>
        {data.quote.quote}
      </CardText>
      <CardActions>
        <FlatButton label={data.quote.tags}></FlatButton>
      </CardActions>
    </Card>
  </MuiThemeProvider>
);

var card = React.createClass({
  getInitialState: function(){
      return {
        quoteObj : {}
      }
  },
  componentDidMount: function(){
    helpers.getData().then(function(data){
      this.setState({
        quoteObj : data
      })
    }.bind(this))
  },
  render: function(){
      return (
        <CardExampleWithAvatar quote = {this.state.quoteObj}/>
      )
  }

})
module.exports = card
