import logo from './logo.svg';
import './App.css';
import { FavoriteFood } from './components/FavoriteFood';
import { Heading } from './components/Heading';
import { MathView } from './components/MathView';
import { PersonInfo } from './components/PersonInfo';
import { Hooks } from './components/Hooks/Hooks';
import { Greetings } from './components/Greetings';
import { Time } from './components/Time/Time';
import { Hello } from './components/Hello/Hello';

function App() {
  return (
    <div className="App">
      <Heading />
      <FavoriteFood />
      <FavoriteFood />
      <MathView />
      <Greetings />
      <PersonInfo
        name="Руслан"
        email="email@gmail.com"
        avatarLink="https://gvzm-nasledie.ru/wp/wp-content/uploads/598.jpg"
        phoneNumber="89502410512"
      />
      <Hooks />
      <Time />
      <Hello />
    </div>
  );
}

export default App;