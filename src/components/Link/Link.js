import { Link as NavLink } from 'react-router-dom';

export default function Link({to, ...props}) {
  return (
    <NavLink {...props} to={process.env.PUBLIC_URL + to} />
  );
}