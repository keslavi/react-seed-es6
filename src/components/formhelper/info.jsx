import { useState } from "react";
import { isEmpty } from "lodash";
import { InputAdornment, Popover, Typography } from "@mui/material";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Help /*helpOutline*/ as IconMui } from "@mui/icons-material";
import { color } from "@/theme-material";
import { InsertCommentOutlined } from "@mui/icons-material";

export const Info = (props) => {
  const { id, info } = props;
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  let infoHeader = null;
  let infoSubject = info;

  if (info.indexOf("|") > 0) {
    const arInfo = info.split("|");
    infoHeader = arInfo[0];
    infoSubject = arInfo[1];
  }

  const onTogglePopover = (e) => {
    const el = isEmpty(anchor) ? e.currentTarget : null;
    setAnchor(e.currentTarget);
  };

  const onClosePopover = (e) => {
    setAnchor(null);
  };
  const ret=
  // return (
    // <div style={{ position: "absolute"}}>
    // <div style={{transform: 'translate(-15px,-70px)'}}>
      <div >
        {/* <HelpRoundedIcon
        sx={{ color: color.primary.blue }}
        onClick={onTogglePopover}
      /> */}
        <IconMui
          color="primary"
          fontSize="small"
          onClick={onTogglePopover}
          sx={{ color: color.primary.blue }}
          //style={{transform:'translate(-12px,-10px)'}}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchor}
          onClose={onClosePopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          slotProps={{ style: { width: "400px" } }}
        >
          {infoHeader && (
            <Typography variant="h5" gutterBottom>
              {infoHeader}
            </Typography>
          )}
          {infoSubject}
        </Popover>
      </div>
    // </div>
  // );
  return ret;
};
