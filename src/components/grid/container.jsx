//import {Box, Grid2 as Grid} from '@mui/material';
// export const Container = (props) => { 
//   return (
//     <Box sx={{flexGrow:1}}>
//        <Grid container spacing ={2}>
//         {props.children}
//        </Grid>
//     </Box>
//   )
// }

// export const ContainerFullWidth = (props) => { 
//   return (
//     <Box sx={{flexGrow:1}}>
//        <Grid container 
//         spacing ={2}
//         maxWidth={true}
//        >
//         {props.children}
//        </Grid>
//     </Box>
//   )
// }

import {Container as ContainerMui} from '@mui/material';

export const Container=(props)=>{
  return (
    <ContainerMui maxwidth={"false"}>
      {props.children}
    </ContainerMui>
  );
}

export const ContainerFullWidth=(props)=>{
  return (
    <ContainerMui maxwidth={"true"}>
      {props.children}
    </ContainerMui>
  );
}
