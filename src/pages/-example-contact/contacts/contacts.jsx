import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useStore} from "../slice/store-zustand";

import { TextareaDebug } from "components";

export const Contacts = () => {
  const {
    contacts,
    option,
    contactList,    
    loading,
    error,
    errorMsg,
  }=useStore();
  const items=contacts;

  useEffect(() => {
    contactList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if(loading) return (<div>Loading...</div>);
  if (error) return (<div>Error: {errorMsg}</div>)

  const optionText=(option,key)=>{
    const ret =option.find(x=>x.key==key).text;
    return ret;
  }

  const renderItems = (data) => {
    return data.map((item) => (
      <tr key={item.id}>
        <td><NavLink to={`/dev/contacts/${item.id}`}>{item.id}</NavLink></td>
        <td>{item.nameLast}, {item.nameFirst}</td>
        <td>{optionText(option.type,item.type)}</td>
        <td>{item.profile}</td> 
      </tr>
    ));
  }; 

  return (
    <>
    <div><h4>Contacts</h4></div>
    <NavLink to="/dev/contacts/new">New</NavLink>
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>profile</th>
          </tr>
        </thead>
        <tbody>{renderItems(items)}</tbody>
      </table>
      <TextareaDebug value={{items,option}} />
    </>
  )
}
export default Contacts;
