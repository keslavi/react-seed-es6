import _ from 'lodash';


export const clone = (obj => {
    // if you get an undefined error you're not passing an object in...
    const ret = JSON.parse(JSON.stringify(obj));
    return ret;
})

export default clone;