import React from 'react';
import { routeUrl } from '../config';

export default function Home() {
  const link = routeUrl('enroll');
  return (
    <div className="p-4">
      <h1>✅ Inertia + React is working!</h1>
      <p>Your React component has rendered successfully.</p>
      <a href={link}>Enroll now!</a>
    </div>
  );
}
