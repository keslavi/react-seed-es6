import {useState} from 'react';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip'
import {Help as IconMui} from "@mui/icons-material";
import { Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ClearIcon from '@mui/icons-material/Clear';
import {styled} from "@mui/material/styles";
import List from "@mui/material/List";
import {Col,Row} from 'components';
import {before} from 'lodash';

export const infoTooltip=(props)=>{
  const [open, setOpen]=useState(false);
  const onToggleTooltip=()=>{
    setOpen(!open);
  };

  const divStyle={
    border:'none',
    background: '#E3E3E3',
    margin: '9px 0 10px 0',
    position: 'relative',
    padding: '10px 20px 15px',
    maxHeight: '290px',
    clear: 'both',
    minWidth:'auto',
    overflowX:'auto',
  }

  const typolabelStyle= {
    color: '#524940',
    fontFamily:'connections',
  }

}
