import { Link } from 'react-router-dom';

import cityImg from '../assets/city.jpg';
import mountains from '../assets/mountains.jpg';
import heroImg from '../assets/hero.png';
import city2 from'../assets/city2.jpg';

export default function WelcomePage() {
  return (
    <>
      <header id="welcome-header">
        <div id="welcome-header-content">
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </div>
        <img
          src={city2}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
       
      </header>
      <main id="welcome-content">
        <section>
          <h2>Set Challenges For Yourself.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Become A Better Version Of Yourself</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>join our community</h2>
          <ul>
          <li>
              Community Support: Join our community and get motivated by peers.
            </li>
            <li>Post your achievements on our facebook group, discord sever and reddit</li>
            <li>
              Get latest updates through instagram and x
            </li>
           
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
          “In a day, when you don't come across any problems - you can be sure that you are travelling in a wrong path”
― Vivekananda
          </p>
         
        </section>
      </main>
    </>
  );
}
