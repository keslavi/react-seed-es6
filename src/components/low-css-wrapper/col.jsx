
export const Col = (props) => {
  const size=`col-${props.xs || 4}`;
  return <div className= {size}>{props.children}</div>
}