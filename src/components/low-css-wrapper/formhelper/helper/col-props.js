/*
  description pull Col properties from the parent properties
*/
export const colProps = (props) => {
  const ret = {};
  /*eslint react/prop-types: 0 */
  ret.xs = props.xs || 4;
  if (props.sm) ret.sm = props.sm;
  if (props.md) ret.md = props.md;
  if (props.lg) ret.lg = props.lg;
  if (props.xl) ret.xl = props.xl;

  return ret;
};
