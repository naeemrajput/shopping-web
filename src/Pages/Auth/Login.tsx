import { Button, PasswordInput, TextInput } from '@mantine/core'
import axios from 'axios';
import React, { useState } from 'react'
import useAuthentication from '../Hooks/useAuthentiation';


export default function Login() {


 
  const {
    loginParams,
    isLoggingIn,
    handleLoginPayloadChange,
    handleLogin
  } = useAuthentication();
  return (
    <div className='w-full h-screen bg-slate-900 flex items-center justify-center'>
        <div className='w-[500px] bg-white flex flex-col rounded-2xl shadow-2xl p-3'>
          <h2 className='text-blue-700 self-center '>Welcome to Shoping Portal</h2>
          {/* <p className='font-md mt-2 '> Login with your credentials..</p> */}
          <form 
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="signin-form"
          >
          <TextInput
          required
            label={"Username"}
            placeholder={"user@gamil.com"}
            value={loginParams.userName}
            onChange={(e) => {
              const {value} = e.target;
              handleLoginPayloadChange("userName",value)
            }}
            className="mt-3 w-full"
            size="md"
          />
           <PasswordInput
           required
            label={"Password"}
            placeholder={"*************"}
            value={loginParams.password}
            onChange={(e) => {
              const {value} = e.target;
              handleLoginPayloadChange("password",value)
            }}
            className="mt-3 w-full"
            size="md"
          />
          <Button 
          type='submit'
          loading={isLoggingIn}
          className="bg-blue-500 mt-4 w-full" 
          onClick={() => {
            handleLogin()
          }}
          >
            Submit
            </Button>
          </form>

        </div>
    </div>
  )
}

