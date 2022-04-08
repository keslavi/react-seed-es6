
//import { TextareaDebug } from "components/textAreaDebug/textAreaDebug";

export const Header=(props) => {
  const {menu} =props;
  return (
    <div>
      <h5>Header</h5>
      <textarea rows={10} cols={100} value={JSON.stringify(menu, null, 2)}></textarea>
    </div>)
}

export default Header;
