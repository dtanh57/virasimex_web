import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    h1: {
      fontSize: '2.25rem'
    },
    h2: {
      fontSize: '1.875rem'
    },
    h3: {
      fontSize: '1.6rem'
    },
    h4: {
      fontSize: '1.4rem'
    },
    h5: {
      fontSize: '1.2rem'
    },
    h6: {
      fontSize: '1rem'
    }
  }
});

export default theme;
