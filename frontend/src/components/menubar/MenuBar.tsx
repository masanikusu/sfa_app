import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DescriptionIcon from '@mui/icons-material/Description';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';

// import { MenuData } from '../../data';
// import Icon  from '../../assets/icon.jpeg';
// import { LogOut } from '../button';
import './menu.scss';
import { ChangeEvent, useState } from 'react';

const MenuBar = () => {
  const [checked, setChecked] = useState(false);
  // const handleLogout = () => alert('ログアウトしました。');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <nav>
      <div className='logo-name'>
        <div className='logo-image'>
          <img src='images/logo.png' alt='' />
        </div>

        <span className='logo_name'>営業支援</span>
      </div>

      <div className='menu-items'>
        <ul className='nav-links'>
          <li>
            <Link to='/'>
              <i className='uil uil-estate'>
                <HomeIcon />
              </i>
              <span className='link-name'>ホーム</span>
            </Link>
          </li>
          <li>
            <Link to='/clients'>
              <i className='uil uil-files-landscapes'>
                <PersonIcon />
              </i>
              <span className='link-name'>顧客情報</span>
            </Link>
          </li>
          <li>
            <Link to='/projects'>
              <i className='uil uil-chart'>
                <WorkIcon />
              </i>
              <span className='link-name'>案件情報</span>
            </Link>
          </li>
          <li>
            <Link to='/activities'>
              <i className='uil uil-thumbs-up'>
                <HistoryIcon />
              </i>
              <span className='link-name'>活動履歴</span>
            </Link>
          </li>
          <li>
            <Link to='/products'>
              <i className='uil uil-comments'>
                <BusinessCenterIcon />
              </i>
              <span className='link-name'>商品リスト</span>
            </Link>
          </li>
          <li>
            <Link to='/reports'>
              <i className='uil uil-share'>
                <SummarizeIcon />
              </i>
              <span className='link-name'>商談報告</span>
            </Link>
          </li>
          <li>
            <Link to='/quotations'>
              <i className='uil uil-share'>
                <DescriptionIcon />
              </i>
              <span className='link-name'>見積リスト</span>
            </Link>
          </li>
        </ul>

        <ul className='logout-mode'>
          <li>
            <Link to='/'>
              <i className='uil'>
                <LogoutIcon />
              </i>
              <span className='link-name'>ログアウト</span>
            </Link>
          </li>

          <li className='mode'>
            <a href='#'>
              <i className='uil'>
                <DarkModeIcon />
              </i>
              <span className='link-name'>ダークモード</span>
            </a>

            <div className='mode-toggle'>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
