import React from 'react';
import {
  Paper,
  Typography,
  Container,
  makeStyles,
  TextField,
  Button,
  Grid,
  Link
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.primary.main
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    height: '80vh'
  },
  title: {
    color: '#fff'
  },
  grid: {
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(6, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  'MuiOutlinedInput-notchedOutline': {
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography className={classes.title} component="h1" variant="h4">
        Budget Tracker
      </Typography>
      <Paper className={classes.paper}>
        <Grid className={classes.grid} container>
          <Grid item xs>
            <Typography component="h1" variant="h4">
              Sign In
            </Typography>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>

        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Paper>
    </Container>
  );
}
