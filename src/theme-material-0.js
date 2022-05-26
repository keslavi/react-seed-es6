import React from 'react';
import { createTheme } from "@mui/material/styles";
//import { blue, red, white } from "@mui/material/colors";

import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
//https://mui.com/material-ui/customization/theming/
//https://mui.com/material-ui/customization/theme-components/

export const color = {
  primary: {
    blue: "#022366",
    red: "#e31836",
    white: "#FFFFF",
  },
  secondary: {
    blue300: "#CEE0EA",
    blue600: "#0241ce",
    blue700: "#2741A3",
    almostBlack: "#504f54",
    almostGrey: "#7A7878",
    shaded: "#F8F8F8",
  },
};

const init = createTheme();

//TIP: use ctrl-k + ctrl-0 to collapse all, then expand
export const theme = createTheme({
  //TODO: finish all the custom stuff as it comes up
  palette: {
    primary: {
      main: color.primary.blue,
    },
    secondary: {
      main: color.primary.red,
    },
    text: {
      //disabled: color.secondary.almostGrey
    },
  },
  zIndex: {
    appBar: 4000,
    modal: 4001,
  },
  root: {
    display: "flex",
  },
  paper: {
    marginRight: init.spacing(2),
  },
  components: {
    //TODO: figure out how lates MUI properties work
    MuiAppBar: {},
    MuiAccordion: {},
    MuiAccordionSummary: {
      // root: {
      //   paddingTop: '2.5px',
      //   paddingBottom: '2.5px',
      //   color:color.primary.white,
      // }
    },
    MuiListItem: {
      // root:{
      //   paddingTop:'2.5px',
      //   paddingBottom: '2.5px',
      //   color:color.primary.blue,
      // }
    },
    MuiIconButton: {},
    MuiFormControl: {
      // root: { marginTop: "10px", marginBottom: "10px" },
    },
    MuiInputLabel: {
      // root: {
      //   color: color.secondary.blue700,
      // },
    },
    MuiTextField: {
      // root: {
      //   marginTop: "10px",
      //   marginBottom: "10px",
      // },
    },
    MuiFormLabel: {
      //root: {},
    },
    MuiDrawer: {
      // paper: {
      //   backgroundColor: color.secondary.almostGrey;
      // }
    },
    MuiToolbar: {
      //   dense: {
      //     minHeight: '0px',
      //   }
      // }
    },
  },
});

const drawerWidth = 215;

export const ThemeProvider = (props) => {
  <>
  {props.children}
  </>
}

/*
export const ThemeProvider = (props) => {
  // <CssBaseline enableColorScheme>
    <MUIThemeProvider theme={theme}>
      {props.children}
    </MUIThemeProvider>
  // </CssBaseline>;
};
*/