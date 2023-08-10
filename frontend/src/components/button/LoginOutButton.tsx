import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

type Props = {
  action: () => void
}

const LoginOutButton = (props: Props) => {
  const { action } = props;

  return (
    <>
      <Button variant="contained" startIcon={<LogoutIcon/>} onClick={action} color="primary">
        ログアウト
      </Button>
    </>
  )
}

export default LoginOutButton