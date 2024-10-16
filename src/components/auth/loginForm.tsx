'use client';

import React, { useState } from 'react';
import Input from './input';
import Button from '../shared/button';

interface LoginFormProps {
  label: string;
  password?: boolean;
  login?: boolean;
}

const LoginForm = ({ label, password = false, login = true }: LoginFormProps) => {
  const [lotNumber, setLotNumber] = useState<string>('');

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="p-[40px] flex flex-col gap-[40px] bg-fillLightBgLightContr rounded-[25px]">
      <h1 className="text-[40px] font-semibold leading-[100%]">{label}</h1>
      <div className="w-[442px] flex flex-col gap-[30px]">
        <div className="flex flex-col w-full gap-[20px]">
          {login ? (
            <input
              required={true}
              name={'login'}
              id={'Введите свой логин'}
              placeholder={'kod'}
              type="text"
              value={lotNumber}
              onChange={(e) => setLotNumber(e.target.value)}
              className="text-[#000000] font-medium text-base bg-[#E6E6FA] rounded-[12px] px-[16px] py-[12px] w-full outline-none"
            />
          ) : // <Input label="Логин" id="Введите свой логин" placeholder="Введите свой логин" type="text" value={inputValue}/>
          null}
          {password ? (
            <Input label="Пароль" id="password" placeholder="Введите свой пароль" type="password" />
          ) : null}
        </div>
        <Button buttonLink={`/lot/${lotNumber}`} size="small" disabled={lotNumber.length != 6}>
          Giriş
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
