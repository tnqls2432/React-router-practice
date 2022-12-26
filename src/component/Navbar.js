// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-regular-svg-icons';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';


// const Navbar = () => {
//     const menuList = [
//         "여성",
//         "Divided",
//         "남성",
//         "신생아/유아",
//         "아동",
//         "H&M Home",
//         "Sale",
//         "지속가능성",
//     ];

//   const navigate = useNavigate()

//   const goToLogin=()=>{
//     navigate("/login");
//   }
//   return <div>
    
//     <div>
//         <div className='login-button' onClick={goToLogin}>
//             <FontAwesomeIcon icon={faUser} />
//             <div className='login'>로그인</div>
//         </div>
//     </div>  

//     <div className='nav-section'>
//         <img width={100} 
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIldL-VD6bsjjnOGca5uBTpBHE0Xi9jNxwtA&usqp=CAU"></img>
//     </div>

//     <div className='menu-area'>
        
//         <ul className='menu-list'>
//             {menuList.map((menu)=>(
//               <li>{menu}</li>
//             ))}
//         </ul>
        
//         <div className='search-box'>
//             <FontAwesomeIcon icon={faSearch} />
//             <input type="text" placeholder='제품검색'/>
//         </div>
//     </div>

    
//     </div>;
  
// };

// export default Navbar

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  let [width, setWidth] = useState(0);
  let navigate = useNavigate();
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };
  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </div>
        )}
      </div>

      <div className="nav-logo">
        <Link to="/">
          <img
            width={100}
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          />
        </Link>
      </div>
      <div class="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyPress={onCheckEnter} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
