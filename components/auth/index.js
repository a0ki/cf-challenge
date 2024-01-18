import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);

  const register = (first_name, last_name, email, password) => {
    dispatch({
      type: 'REGISTER',
      payload: { first_name, last_name, email, password },
    });
  };

  const login = (email, password) => {
    if (session && session.email === email && session.password === password) {
      dispatch({ type: 'LOGIN', payload: { email, password } });
    } else {
      console.log('Invalid email or password');
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return { register, login, logout };
};

export default Auth;