import axios from 'axios';
import { useState } from 'react';

export default function Auth() {
  // form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // auth form state
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const path = 'http://localhost:3000/api/auth/';
    const endPoint = isLogin ? 'login' : 'register';

    axios
      .post(path + endPoint, { username, password })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err.response.data));
  };

  return (
    <main className="container">
      <div className="mb-3">
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
      <div>
        {isLogin ? "Don't have an account ? " : 'Already have an account ? '}
        <span className="text-primary" onClick={() => setIsLogin((s) => !s)}>
          {isLogin ? 'regiser' : 'login'}
        </span>
      </div>
    </main>
  );
}
