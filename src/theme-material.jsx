import { createTheme } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { AccordionSummary } from "@mui/material";
import { bgcolor, fontSize, fontWeight, styled } from "@mui/system";
import { Padding } from "@mui/icons-material";

/************************************ 

  !IMPORTANT rowHeader is styled in /src/components/grid/rowheader.jsx

*************************************/

export const ThemeProvider = (props) => {
  return (
    <CssBaseline>
      <MUIThemeProvider theme={theme}>{props.children}</MUIThemeProvider>
    </CssBaseline>
  );
};

export const color = {
  primary: {
    blue: "#022366",
    red: "#E31836",
    white: "#FFFFFF",
  },
  secondary: {
    blue300: "#CEE0EA",
    blue600: "#0241CE",
    blue700: "#2741A3",
    blueShade: "#E6E9F1",
    black: "#000000",
  },
  header: "#0241ce", //blue600
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

export const theme0=createTheme({
  shadows:["none"],
})

export const theme = createTheme({
  //shadows: Array(25).fill("none"),//remove all shadows without causing warnings
  shadows: [...createTheme({}).shadows.map((shadow, i) => (
    i === 1 ? '0 0 0px 0 rgba(9, 32, 46, 0.2)' : shadow
  ))],
  typography: {
    // fontFamily:"Connections, Calibri, 'sans-serif'",
    // fontWeight:"400",
    // fontSize:"14",
    // lineHeight:1.5,
    // color:color.black,
  },
  // typography:{
  //   allVariants:{
  //     fontFamily:['Connetions', 'Arial', 'Calibri','Helvetica','sans-serif'].join(','),
  //     textTransform: 'none',
  //   }
  // },
  palette: {
    primary: {
      main: color.primary.blue,
    },
    secondary: {
      main: color.primary.red,
    },
    text: {
      disabled: color.secondary.almostGrey,
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
    MuiGrid: {
      styleOverrides: {
        root: {
          //boxShadow:"none",
          ">.MuiGrid-item": {
            //paddingLeft:"0px",
          },
          ">.MuiPaper-root": {
            paddingLeft: "0px",
          },
          ">MuiFormControl-root": {
            paddingLeft: "16px",
          },
        },
      },
    },
    MuiGrid2:{
      styleOverrides:{
        root:{
          boxShadow:"none",
        }
      }
    },
    MuiPaper: {
      styleoverrides: {
        root: {
          boxShadow: "none",
          position: "relative",
        },
      },
      // elevation: {
      //   //1: '0px 2px 4px rgba(0,0,0,0.2)'
      // }
    },
    MuiPopover: {
      styleoverrides: {
        paper: {
          border: `1px solid ${color.almostGrey}`,
          padding: "15px",
          fontSize: "14px",
          color: color.black,
          "& .MuiTypography-h5": {
            fontSize: "1.2rem",
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {},
      },
    },
    MuiAppBar: {},
    MuiAlert: {
      styleOverrides: {
        root: {
          "&.MuiAlert-colorError": {
            "& .MuiSvgIcon-root": {
              color: color.primary.red,
            },
          },
          "& .MuiTypography-root": {
            paddingLeft: "0px",
          },
          svg: {
            color: color.black,
          },
        },
      },
    },
    MuiAccordion: {},
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: color.primary.white,
          border: `1px solid ${color.almostGrey}`,
        },
      },
      variants: [
        {
          props: { variant: "noborder" },
          style: {
            border: `0px solid`,
          },
        },
      ],
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          color: color.primary.blue,
          fontSize: "1.2rem",
          fontWeight: "500",
          padding: "2px",
          paddingLeft: "0.5rem",
          border: `1px solid ${color.secondary.almostGrey}`, //grey500
          minHeight: 32,
          margin: "0px",
          "& .MuiAccordionSummary-expandIconWrapper": {
            alignSelf: "start",
            marginTop: "16px",
          },
          "& .Mui-expanded": {
            alignSelf: "start",
            marginTop: "24px",
          },
          "& .MuiSvgIcon-root": {
            color: color.almostGrey,
          },
        },
      },
      variants: [
        {
          props: { variant: "noborder" },
          style: {
            border: "0px",
          },
        },
      ],
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontSize: "0rem",
          minWidth: "20px",
          "&.MuiButton-root": {
            svg: {
              color: color.white,
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          width: "20px",
          height: "20px",
          //color: color.almostGrey,
          "&.Mui-checked": {
            color: color.primary.blue,
          },
          "&:hover": {
            color: color.primary.blue,
          },
        },
      },
    },
    MuiFormControl: {
      // styleOverrides: {
      //   root: {
      //     display: "flex",
      //     position: "relative",
      //     ".MuiFormLabel-root": {
      //       position: "relative",
      //       transform: "none",
      //       fontSize: "14px",
      //     },
      //     ".MuiInputBase-input": {
      //       padding: "8.5px 5px 8.5px 5px",
      //     },
      //     ".MuiOutlinedInput-notchedOutline": {
      //       top: "0px",
      //     },
      //     legend: {
      //       display: "none",
      //     },
      //   },
      // },
    },
    MuiAutocomplete: {
      // styleOverrides: {
      //   root: {
      //     svg: {
      //       //color: color.primary.blue,
      //     },
      //     "&.MuiAutocomplete-hasClearIcon": {
      //       "&.MuiAutocomplete-hasPopupIcon": {
      //         ".MuiOutlinedInput-root": {
      //           paddingRight: "0px",
      //         },
      //       },
      //     },
      //   },
      //   inputRoot: {
      //     padding: "0px",
      //     ".MuiInputBase-input": {
      //       padding: "8.5px 35px 8.5px 5px",
      //       "&:hover": {
      //         paddingRight: "60px",
      //       },
      //       "&:focus": {
      //         paddingRight: "60px",
      //       },
      //     },
      //   },
      //   listbox: {
      //     borderTop: "1px solid #d1c9c0",
      //     borderRight: "1px solid #d1c9c0",
      //     borderBottom: "",
      //     borderLeft: "",
      //     padding: "0px",
      //     background: color.white,
      //     ".MuiAutocomplete-option.Mui-focused": {
      //       color: white,
      //       backgroundColor: color.primary.blue,
      //     },
      //     '.MuiAutocomplete-options[aria-selected="true"].Mui-focused': {
      //       color: color.primary.white,
      //       backgroundColor: color.primary.blue,
      //     },
      //   },
      // },
    },
    MuiInputLabel: {
      // styleOverrides: {
      //   root: {
      //     color:color.black,
      //     zIndex:0,
      //   },
      // },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: "0px",
          width: "20px",
          height: "20px",
          //color:color.almostGrey,
          // '&.Mui-checked':{
          //   color:color.primary.blue,
          // },
          // '&:hover':{
          //   color:color.primary.blue,
          // }
        },
      },
    },
    MuiTextField: {
      // styleOverrides: {
      //   root: {
      //     alignSelf: "flext-start",
      //   },
      // },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          margin:"5px"
        },
      },
    },
    MuiFormLabel: {
      // styleOverrides: {
      //   root: {
      //     '&.Mui-focused':{
      //       color:color.black,
      //     },
      //   },
      // },
    },
    MuiOutlinedInput: {
      // styleOverrides: {
      //   root: {
      //     borderRadius:"0px",
      //     display:"flex",
      //     padding:"0px",
      //     '&.Mui-focused .MuiOutlinedInput-notchedOutline':{
      //       border: '`1pxsolid ${color.primary.blue}',
      //     }
      //   },
      // },
    },
    MuiDrawer: {
      // paper:{
      //   backgroundColor:color.secondary.almostGrey,
      // },
    },
    MuiToolbar: {
      dense: {
        minHeight: "0px",
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(odd)": {
            backgroundColor: color.secondary.shaded,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          head: {
            backgroundColor: color.primary.blue,
            color: color.primary.white,
          },
        },
      },
    },
    MuiDataGrid: {
      // styleOverrides: {
      //   root: {},
      //   columnHeader: {
      //     fontWeight: "bold",
      //     color: color.header,
      //   },
      //   cell: {
      //     //color:color.primary.black,
      //   },
      //   sortIcon: {
      //     color: color.primary.blue,
      //     opacity: 1,
      //   },
      // },
    },
  },
});

//const drawerWidth=215;
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
