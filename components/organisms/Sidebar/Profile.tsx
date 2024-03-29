import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { jwtPayloadTypes, UserTypes } from '../../../services/data-types';

export default function Profile() {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    email: '',
  });
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = Buffer.from(token, 'base64').toString('utf8');
      const payload: jwtPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      setUser(userFromPayload);
    }
  }, []);
  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <div className="user text-center pb-50 pe-30">
      <img src={`${IMG}/${user.avatar}`} width="90" height="90" className="img-upload mb-20" alt="profile" />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
