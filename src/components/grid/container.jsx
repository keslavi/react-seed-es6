//import {Container as ContainerMUI} from '@mui/material';
import Box from '@mui/material/Box';

export const Container = (props) => {
  return (
    <Box>
      {props.children}
    </Box>
  )
}

export const ContainerFullWidth = (props) =>{

  return (
    <Box>
      {props.children}
    </Box>
  )
}