import Grid from '@mui/material/Grid';


export const Row = (props) => {
  //return (<div className='row'>{props.children}</div>)   
  return (<Grid container spacing={2}>{props.children}</Grid>)
}