import React from 'react';


function Navbar(props) {

  function injectLinks(props) {
    let links = props.navItems.map(val => {
      return <a key={val.id} href={val.href}>{val.name}</a>
    })

    return (<>{links}</>)
  }

  return (

    < nav>
      {injectLinks(props)}
    </nav >
  );
};

export default Navbar;
