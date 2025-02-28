
import {NavLink} from 'react-router-dom';

export const Header=(props) => {
  const {menu} =props;

  const renderMenu = (menu) => {
    if (!menu) return; //may not appear due to multiple rendering... React.StrictMode?
    return menu.map(x=>{
      if (x.items) { return renderMenu(x.items) }
      return <li key={x.text}><NavLink to={x.link}>{x.text}</NavLink></li>
    })
  }

  return (
    <div className='navbar'>
      {/* <textarea rows={10} cols={100} value={JSON.stringify(menu, null, 2)}></textarea> */}
      <ul>
        {renderMenu(menu)}
      </ul>
    </div>)
}

export default Header;
