//adds styling, particularly padding
//todo: can we do this out of the master theme provider somehow?

import {Paper,styled} from "@mui/material";
import {color, theme} from "@/theme-material";


export const Item=styled(Paper)(({theme})=>({
  backgroundColor:theme.palette.mode==="dark" ? color.primary.backgroundColor : "inherit",
  ...theme.typography.body2,
  padding: theme.spacing(1),//this is the all important line
  textAlign: "left",
  //color: theme.palette.text.secondary,
}));

export const ItemNoPadding=styled(Paper)(({theme})=>({
  backgroundColor:theme.palette.mode==="dark" ? color.primary.backgroundColor : "inherit",
  ...theme.typography.body2,
  padding: theme.spacing(0),//this is the all important line
  textAlign: "left",
  //color: theme.palette.text.secondary,
}));
