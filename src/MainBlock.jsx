import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chart from './chart';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const [GlobalData,setGolobalData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const Loading = "Loading...";

  useEffect(() => {
    async function fetchGlobalData(){
      const apiResponse = await axios.get('https://api.covid19api.com/summary');
      // console.log(apiResponse.data.Global);
      setGolobalData(apiResponse.data.Global);
      setDataLoading(false);
    }
    fetchGlobalData();
  }, [])

  if(dataLoading)
  {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
          <Paper variant="outlined" className={classes.paper}>
              <Typography variant="h3" gutterBottom>
                  {Loading}
              </Typography>
              <Typography variant="h6" gutterBottom>
                  Total Confirmed
              </Typography>
          </Paper>
          <Paper variant="outlined" className={classes.paper}>
            <Typography variant="h3" gutterBottom>
              {Loading}
            </Typography>
              <Typography variant="h6" gutterBottom>
                  Daily Confirmed
              </Typography>
          </Paper>
          <Paper variant="outlined" className={classes.paper} style={{color:"green"}}>
            <Typography variant="h3" gutterBottom>
              {Loading}
            </Typography>
              <Typography variant="h6" gutterBottom style={{color:"green"}}>
                  Total Recovered
              </Typography>
          </Paper>
          <Paper variant="outlined" className={classes.paper} style={{color:"red"}}>
            <Typography variant="h3" gutterBottom>
              {Loading}
            </Typography>
              <Typography variant="h6" gutterBottom style={{color:"red"}}>
                  Total Deciesed
              </Typography>
          </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>xs=8</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
        <Paper variant="outlined" className={classes.paper}>
            <Typography variant="h3" gutterBottom>
                {GlobalData.TotalConfirmed}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Total Confirmed
            </Typography>
        </Paper>
        <Paper variant="outlined" className={classes.paper} style={{color:"orange"}}>
          <Typography variant="h3" gutterBottom>
            {GlobalData.NewConfirmed}
          </Typography>
            <Typography variant="h6" gutterBottom>
                New Confirmed
            </Typography>
        </Paper>
        <Paper variant="outlined" className={classes.paper} style={{color:"green"}}>
          <Typography variant="h3" gutterBottom>
            {GlobalData.TotalRecovered}
          </Typography>
            <Typography variant="h6" gutterBottom style={{color:"green"}}>
                Total Recovered
            </Typography>
        </Paper>
        <Paper variant="outlined" className={classes.paper} style={{color:"red"}}>
          <Typography variant="h3" gutterBottom>
            {GlobalData.TotalDeaths}
          </Typography>
            <Typography variant="h6" gutterBottom style={{color:"red"}}>
                Total Deaths
            </Typography>
        </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Global Data</Paper>
          <Paper className={classes.paper}>
            <Chart
              totalConfirmed = {GlobalData.TotalConfirmed}
              newConfirmed = {GlobalData.NewConfirmed}
              totalRecovered = {GlobalData.TotalRecovered}
              totalDeaths = {GlobalData.TotalDeaths}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
  
}