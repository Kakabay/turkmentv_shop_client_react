import LoginForm from '../components/auth/loginForm';
import Container from '../components/shared/container';
import LotProvider from '../providers/LotProvider';

export default function Home() {
  return (
    <main className="min-h-screen py-6 flex items-center justify-center">
      <Container>
        <div className="flex justify-center items-center">
          <LotProvider>
            <LoginForm label="Koduňyzy giriziň" />
          </LotProvider>
        </div>
      </Container>
    </main>
  );
}
