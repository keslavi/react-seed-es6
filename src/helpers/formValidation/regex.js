import msg from "./messages";

export const regex = {
  currency: {
    //numeric, allows + - commas, and up to 2 decimal places
    pattern: /^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$/,
    message: msg.Currency,
  },
  currency0Dec: {
    //numeric, allows + - commas, no decimal places
    pattern: /^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*$/,
    message: msg.CurrencyNoDec,
  },
  integer: {
    //two digits,
    pattern: /^$|(^-?\d\d*$)/,
    message: msg.integer,
  },
  /*
      (?:(?=.*\b5[15]00\b)[0-9]{2,}\\[0-9]{2}-[0-9]{4}-[0-9]{3}-|(?!.*\b5[15]00\b)[0-9]{2,}\\[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]{2})$  
  */
  numeric2Dec: {
    //empty or two digits, two decimal places, + -, optional commas
    // eslint-disable-next-line
    pattern: /^$|(^-?\d\d*[\.|,]\d{0,2}$)|(^-?\d\d*$)|(^-?[\.|,]\d{0,2}$)/,
    message: msg.numeric2Decimal,
  },
  numeric3Dec: {
    //two digits, three decimal places, + -, optional commas
    // eslint-disable-next-line
    pattern: /^$|(^-?\d\d*[\.|,]\d{0,3}$)|(^-?\d\d*$)|(^-?[\.|,]\d{0,3}$)/,
    message: msg.numeric3Decimal,
  },
  alphanumeric: {
    //two digits, three decimal places, + -, optional commas
    pattern: /^$|^[_\-a-z0-9.]+$/gi,
    message: msg.AlphaNum,
  },
  longtitle: {
    pattern: /$|^[A-Za-z0-9\s=.,()+"':?#*$%=@!{},`~&*()+<>^_?.:;[/\\|-]+$/i,
    message: msg.InvalidLongTitle,
  },
  /*

      (?:(?=.*\b5[15]00\b)[0-9]{2,}\\[0-9]{2}-[0-9]{4}-[0-9]{3}-|(?!.*\b5[15]00\b)[0-9]{2,}\\[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]{2})$  

  */
};

export default regex;
