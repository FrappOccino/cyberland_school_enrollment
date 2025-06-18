import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { routeUrl } from '../config';

export default function Register() {
  const { data, setData, post, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(routeUrl('register'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        placeholder="Name"
        value={data.name}
        onChange={e => setData('name', e.target.value)}
      />
      {errors.name && <div>{errors.name}</div>}

      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={e => setData('email', e.target.value)}
      />
      {errors.email && <div>{errors.email}</div>}

      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={e => setData('password', e.target.value)}
      />
      {errors.password && <div>{errors.password}</div>}

      <input
        type="password"
        placeholder="Confirm Password"
        value={data.password_confirmation}
        onChange={e => setData('password_confirmation', e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
}
