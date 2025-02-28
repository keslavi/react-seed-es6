import { Typography } from "@mui/material";

export const Label = (props) =>{
  const {children, text,value}=props; //...rest

  return (
    <Typography color="primary" style={{fontWeight: "450"}}>
      {children || text || value}
    </Typography>
  )
}