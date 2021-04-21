import { useEffect, useState } from 'react';
import { FiArrowRight, FiUser } from 'react-icons/fi';
import Cookies from 'js-cookie';

import Link from 'next/link';

import Head from 'next/head';
import Input from '../components/Input';

import { Container, Content, Button } from '../styles/styles';

import { InputProvider } from '../contexts/InputContext';

const SignIn: React.FC = () => {
  const [isHasInputValue, setIsHasInputValue] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (username) {
      Cookies.set('username', username);
    }
  }, [username]);

  return (
    <>
      <Head>
        <title>Sign In | move.it</title>
      </Head>
      <Container>
        <img src="/icons/logo-background.svg" alt="Background Logo" />

        <Content>
          <img src="/icons/logo-moveit.svg" alt="Moveit Logo" />

          <h1>Welcome</h1>

          <span>
            <img src="/icons/github-logo.svg" alt="Github Logo" />
            <span>Sign in with your Github to start</span>
          </span>
          <div>
            <InputProvider>
              <Input
                placeholder="Type your Github username"
                icon={FiUser}
                onChange={event => {
                  setIsHasInputValue(!!event.target.value);
                  setUsername(event.target.value);
                }}
              />

              <Link href="/home">
                <Button type="submit" filled={isHasInputValue}>
                  <FiArrowRight size={25} />
                </Button>
              </Link>
            </InputProvider>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
