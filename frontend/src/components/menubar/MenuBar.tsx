import { Link } from 'react-router-dom';
import { MenuData } from '../../data';
import Icon  from '../../assets/icon.jpeg';
import './menu.scss'


const MenuBar = () => {
  return (
    <div className='menu'>
      {/* profile icon here */}
      <div className="mainIcon">
        <img src={Icon} alt=""  className='img'/>
        <p className="text">sales_person@example.com</p>
      </div>
      {MenuData.map((item) => (
        <div className='item'>
          <Link to={item.url} className='url' key={item.id}>
            {/* <div className='icon'>{item.icon}</div> */}
            <span className='title'>{item.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
