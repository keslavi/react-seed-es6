import {Container as ContainerMUI} from '@mui/material';

export const Container = (props) => {
  return (
    <ContainerMUI>
      {props.children}
    </ContainerMUI>
  )
}

export const ContainerFullWidth = (props) =>{

  return (
    <ContainerMUI>
      {props.children}
    </ContainerMUI>
  )
}