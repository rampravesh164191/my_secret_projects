type WelcomeMessageProps = {
  isLoggedIn: boolean;
  name: string;
};

export default function WelcomeMessage({ isLoggedIn, name }: WelcomeMessageProps) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back, {name}!</h1> : <h1>Please log in.</h1>}
    </div>
  );
}
