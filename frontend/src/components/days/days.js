import React, { useState } from 'react'
import './days.css'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';


const dayDb = [
  {
    day: 'day1'
  },
  {
    day: 'day2'
  },
  {
    day: 'day3'
  },
  {
    day: 'day4'
  },
  {
    day: 'day5'
  },
  {
    day: 'day6'
  },
  {
    day: 'day7'
  },
]

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ShowDays() {
  const dayButt = (name) =>
    <Button id="dayButton" className="dayButton" onClick={handleClickOpen}>
      {name.day}
    </Button>

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className='daysList' >
        {dayDb.map((day) => {
          return (
            <Router>
              <Switch>
                <div className='dayList'>
                  {dayButt(day)}
                </div>
              </Switch>
            </Router>
          )
        })}
      </div>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              <CancelIcon />
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}

export default ShowDays
