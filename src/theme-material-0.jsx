import {
  AccordionSummary,
  CssBaseline,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";

import { styled } from "@mui/system";
import { Padding } from "@mui/icons-material";

/*************************************

  !IMPORTANT: Row,Col, Container, RowHeader is styled in /components/grid

*************************************/

export const ThemeProvider = (props) => {
  return (
    <CssBaseline>
      <MUIThemeProvider theme={theme}>{props.children}</MUIThemeProvider>
    </CssBaseline>
  );
};

export default ThemeProvider;

export const color = {
  primary: {
    blue: "#022366",
    red: "#E31836",
    white: "#FFFFFF",
    header: "#0241CE",
    backgroundColor: "#FFF",
  },
  secondary: {
    blue300: "#CEE0EA",
    blue600: "#0241CE",
    blue700: "#2741A3",
    blueShade: "#E6E9F1",
    black: "#000000",
  },
  black: "#000000",
  gray: "#757575",
  grey: "#757575",
  disabled: "#EEEEEE",
  almostBlack: "#504f54",
  almostGrey: "#7A7878",
  shaded: "#F8F8F8",
  white: "#FFFFFF",
};

const init = createTheme();

export const theme = createTheme({
  /*
  typography: {
    fontFamily:'"Connections", "Calibri", "sans-serif"',
    fontWeight:400,
    fontSize:14,
    lineHeight:1.5,
    color:color.black,
  },
  palette: {
    primary: {
      main: color.primary.blue,
    },
    secondary: {
      main: color.primary.red,
    },
    text: {
      disabled: color.almostGrey,
    },
  },
  */
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
    // MuiGrid: {
    //   styleOverrides:{
    //     root: {
    //       '>.MuiGrid-item': {
    //          //paddingLeft: "0px",
    //       },
    //       '>.MuiPaper-root':{
    //         paddingLeft:"0px",
    //       },
    //       '>.MuiFormControl-root': {
    //         paddingLeft:"16px",
    //       }
    //     }
    //   }
    // },

    // MuiPaper:{
    //   styleOverrides:{
    //     root:{
    //       boxShadow:"none",
    //       position:"relative",
    //     }
    //   }
    // },

    MuiAppBar: {},
    MuiAccordion: {},

    // MuiAccordionSummary:{
    //   styleOverrides:{
    //     root: {
    //       backgroundColor:color.primary.white,
    //       fontsize: "1rem",
    //       padding:"2px",
    //       paddingLeft: "0.5rem",
    //       border: "1px solit white",
    //       minHeight: 32,
    //       maxHeight: 32,
    //       '&.MuiAccordionSummary-expandIconWrapper':{
    //         color: color.white,
    //       },
    //       '&.Mui-expanded':{
    //         minHeight:32,
    //         maxHeight:32,
    //       },
    //       '&.MuiSvgIcon-root':{
    //         color:color.white,
    //       },
    //     }
    //   }
    // },

    // MuiInputBase: {
    //   styleOverrides:{
    //     root:{
    //       fontsize:"0rem",
    //       minWidth:"20px",
    //       '&.MuiButton-root':{
    //         svg:{
    //           color:color.white,
    //         }
    //       }
    //     }
    //   }
    // },

    // MuiCheckbox:{
    //   styleOverrides: {
    //     root:{
    //       width:"20px",
    //       height:"20px",
    //       color: color.grey,
    //       '&.Mui-checked':{
    //         color:color.primary.blue,
    //       },
    //       '&.hover':{
    //         color:color.primary.blue,
    //       }
    //     }
    //   }
    // }

    // MuiIconButton:{},
    // MuiFormControl:{
    //   styleOverrides:{
    //     root:{
    //       display:"flex",
    //       position:"relative",
    //       '.MuiFormLabel-root':{
    //         position:"relative",
    //         transform:"none",
    //         fontSize:"14px"
    //       },
    //       '.MuiInputBase-input': {
    //         padding: "8.5px 5px 8.5px 5px"
    //       },
    //       '.MuiOutlinedInput-notchedOutline':{
    //         top: '0px'
    //       },
    //       legend: {
    //         display:'none',
    //       }
    //     }
    //   }
    // }

    // MuiFormControlLabel: {
    //   styleOverrides: {
    //     root: {},
    //     variants: [{ props: { variant: "h1" }, style: {} }],
    //   },
    // },

    // MuiTableRow: {
    //   styleOverrides: {
    //     root: {
    //       '&:nth-of-type(odd)': {
    //         backgroundColor:color.shaded
    //       }
    //     }
    //   }
    // },

    // MuiTableCell: {
    //   styleOverrides:{
    //     head:{
    //       backgroundColor:color.primary.blue,
    //       color:color.white
    //     }
    //   }
    // }
  },
});

export const StyledAccordionSummary = styled(AccordionSummary)({
  minHeight: 30,
  maxHeight: 30,
  "&.Mui-expanded": {
    minHeight: 30,
    maxHeight: 30,
  },
  fontSize: "1.2rem",
  padding: "2px",
  paddingLeft: "0.5rem",
  border: "1px solid white",
});
