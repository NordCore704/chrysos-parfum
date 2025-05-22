'use client'
import { logo } from '@/exports/image-exports';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsStars } from 'react-icons/bs';
import { FaStarOfLife } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const validateInput = (name, value) => {
    let error = '';
    switch (name) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email.';
        break;
      case 'password':
        if (value.length < 8) error = 'Password must be at least 8 characters long.';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate the input and update both formData and errors
    const error = validateInput(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: error }));

    // If field becomes valid, remove error
    if (!error) {
      setErrors((prev) => {
        const updatedErrors = { ...prev };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  // Check if the form is valid by ensuring there are no errors and all fields are filled
  const isFormValid =
    Object.values(formData).every(Boolean) && Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='md:w-[60%] sm:w-[65%] p-5 sm:p-3 md:p-5 lg:p-8 flex flex-col gap-5 bg-white rounded sm:self-center'>
      <div className="flex flex-col gap-3 ">
        <FaStarOfLife className='self-center' size={30} />
        <h4 className="self-center text-xl sm:text-2xl font-semibold">Welcome back!</h4>
      </div>

      {['email', 'password'].map((field) => (
        <div key={field} className="flex flex-col">
          <input
            type={field.includes('password') ? 'password' : 'text'}
            name={field}
            placeholder={capitalize(field)}
            value={formData[field]}
            onChange={handleChange}
            className={`px-1.5 py-2 lg:p-2 border rounded-xl outline-none focus:border-scheme-lightGold focus:bg-gray-50 transition-colors duration-200 ${errors[field] ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
        </div>
      ))}

      {errors.form && <p className="text-red-500 text-sm">{errors.form}</p>}

      <div className="flex gap-1 items-center">
        <p className="sm:text-sm text-xs">New to the fragrance game?</p>
        <Link href={'/auth/login'} className='text-xs sm:text-sm text-scheme-gold hover:text-scheme-goldThree transition-colors duration-300'>Sign up</Link>
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`p-2 rounded-xl ${isFormValid ? 'hover:bg-scheme-lightGold bg-scheme-gold transition-colors duration-300 text-white' : 'bg-scheme-goldThree bg-opacity-50 text-gray-500 cursor-not-allowed'}`}
      >
        {loading ? 'Loading...' : 'Log In'}
      </button>
    </form>
  );
};

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export default LoginForm;