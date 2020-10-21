import axios from '../_helpers/axios';
import { ACT } from '../_action-constants';
import config from '../../config';

const url = `${config.api}/option`;

// Retrieve
export function actOption_L() {
    const api=`${url}`;
    const res = axios.get(api);

    return {
        type: ACT.options.list,
        payload: res
    };
}


