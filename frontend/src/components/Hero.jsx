import { useNavigate } from 'react-router-dom';
import assistanceImage from '../assets/landing-bg.png';
import { useState } from 'react';
import Toast from './Toast';

const Hero = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    username: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const showLoginForm = () => {
    setIsLogin(true);
  };
  const showRegisterForm = () => {
    setIsLogin(false);
  };
  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const result = await res.json();
      if (res.ok) {
        console.log('Login successful:', result);
        navigate('/dashboard');
      } else {
        console.error('Login failed:', result.message);
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error('Password not match');
      return;
    }
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          fullName: formData.fullName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });
      const result = await res.json();
      if (res.ok) {
        console.log('Registration successful:', result);
        // Handle successful registration, e.g., update context or redirect
      } else {
        console.error('Registration failed:', result.message);
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <section
      id="beranda"
      className="bg-stone-100 md:pt-12 md:relative md:pb-32"
    >
      <div className="hidden md:flex md:absolute md:inset-0 md:z-0 md:justify-center md:items-end md:ml-32">
        <img
          className="h-3/4 object-cover"
          src={assistanceImage}
          alt="background"
        />
      </div>
      <div className="md:relative md:z-10">
        <div className="md:grid md:grid-cols-2">
          <div className="py-8 mt-16 px-8 mx-auto max-w-screen-xl md:py-0 z-10 relative text-center">
            <div
              href="#"
              className="inline-flex justify-between items-center py-1 px-4 pe-4 mb-7 text-sm text-slate-900 rounded-full border border-slate-900"
            >
              <span className="text-sm font-medium">
                Welcome to <span className="font-bold">UKAI Plus</span> - Your
                Tryout Companion
              </span>
            </div>
            <h1 className="mb-4 text-left text-5xl font-semibold font-serif tracking-wide leading-none text-slate-900 md:text-5xl lg:text-6xl">
              Membantu Jalanmu Menuju Apoteker
            </h1>
            <p className="my-8 text-left text-base font-normal text-slate-500 md:text-slate-900 md:mr-32">
              UKAI Plus adalah platform tryout terdepan yang dirancang khusus
              untuk membantu calon apoteker mempersiapkan diri menghadapi Uji
              Kompetensi Apoteker Indonesia (UKAI). Kami menyediakan berbagai
              fitur dan sumber daya yang komprehensif untuk memastikan Anda siap
              menghadapi ujian dengan percaya diri.
            </p>
          </div>
          <div className="flex justify-center md:justify-end md:py-14 md:pr-8">
            <div className="w-full max-w-sm bg-stone-100 border border-slate-200 rounded-md shadow md:w-1/2">
              <div className="flex justify-center mb-4 text-slate-900">
                <button
                  onClick={showLoginForm}
                  className={`inline-block w-full border-r border-b font-medium rounded-tl-lg text-sm px-4 py-3 text-center ${
                    isLogin
                      ? 'bg-orange-600 hover:bg-orange-800 text-slate-100 font-bold'
                      : 'bg-orange-100 hover:bg-orange-200'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={showRegisterForm}
                  className={`inline-block w-full border-l border-b font-medium rounded-tr-lg text-sm px-4 py-3  text-center ${
                    !isLogin
                      ? 'bg-orange-600 hover:bg-orange-800 text-slate-100 font-bold'
                      : 'bg-orange-100 hover:bg-orange-200'
                  }`}
                >
                  Register
                </button>
              </div>
              <div className="w-full"></div>
              <div className="p-4">
                {isLogin ? (
                  <form className="space-y-6" onSubmit={handleLogin}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                      Login
                    </h5>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 invalid:focus:ring-red-700 invalid:border-red-700 peer"
                        placeholder="youremail@gmail.com"
                        required
                      />
                      <p className='text-xs font-normal invisible m-1 text-red-700 peer-invalid:visible'>Email tidak valid</p>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Kata Sandi
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    {/* <div className="flex items-start">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Ingat Saya
                        </label>
                      </div>
                      <a
                        href="#"
                        className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Lupa Kata Sandi?
                      </a>
                    </div> */}
                    <button
                      type="submit"
                      className="w-full text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Login
                    </button>
                  </form>
                ) : (
                  <form className="space-y-6" onSubmit={handleRegister}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                      Register
                    </h5>
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Andika Ananda"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Dika"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="youremail@gmail.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Kata Sandi
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Konfirmasi Kata Sandi
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={() => handleShowToast()}
                      className="w-full text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Register
                    </button>
                  </form>
                )}
              </div>
              <div className='mx-2 mb-2'>
                <Toast
                  message={'Registrasi berhasil, silakan login'}
                  show={showToast}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center bg-stone-100 pt-8 md:hidden">
            <img
              className="w-full h-4/5 object-cover"
              src={assistanceImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
