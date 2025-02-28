import config from '@/config';
import { clone } from 'helpers';

export const TextareaDebug = (props) => {
  const {hidden} =props;
  const rows = props.rows || 10;
  const cols = props.cols || 100;
  
  if (!config.debug || !!hidden) return (<></>);

  const o = clone(props.value || {});
  //remove the history property if it exists
  //delete o.history; 

  return (
    <div>
      Debug:<br />
      <textarea
        readOnly
        rows={rows}
        cols={cols}
        value={JSON.stringify(o, null, 2)}
      ></textarea>
    </div>
  );
}

