import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { routeUrl } from '../config';


export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(routeUrl('login'));
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input
            type="email"
            value={data.email}
            onChange={e => setData('email', e.target.value)}
            required
          />
          {errors.email && <div>{errors.email}</div>}
        </div>

        <div>
          <label>Password</label><br />
          <input
            type="password"
            value={data.password}
            onChange={e => setData('password', e.target.value)}
            required
          />
          {errors.password && <div>{errors.password}</div>}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={data.remember}
              onChange={e => setData('remember', e.target.checked)}
            />
            Remember me
          </label>
        </div>

        <button type="submit" disabled={processing}>
          {processing ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
