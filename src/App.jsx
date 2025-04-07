import "./App.css";
import { motion } from "framer-motion";
import { slideIn } from "./utils/motion.js";
import pic1 from "./Images/lina/a.jpg";
import pic2 from "./Images/lina/photo_2025-04-06_05-37-45.jpg";
import pic3 from "./Images/lina/photo_2025-04-06_05-38-46.jpg";
import pic4 from "./Images/lina/photo_2025-04-06_05-38-54.jpg";
import pic5 from "./Images/lina/photo_2025-04-06_05-38-57.jpg";
import pic6 from "./Images/lina/photo_2025-04-06_05-40-16.jpg";
import pic7 from "./Images/lina/photofromtik.png";
import pic8 from "./Images/lina/photo_2025-04-06_05-40-19.jpg";
function App() {
  return (
    <>
      <h1 className="text-3xl text-center mt-5">Happybirthday Z!!</h1>
      <motion.div
        initial="hidden"
        animate="show"
        variants={slideIn("left", "tween", 0.5, 1)}
        className="flex flex-row items-center justify-center mt-5"
      >
        <img
          src={pic1}
          alt="Birthday"
          className="ml-10  mr-5 w-30 h-40 rounded-lg shadow-lg"
        />
        <p className="text-xs text-center w-40">
          Happy birthday to you, my dear friend! I hope this year brings you all
          the happiness and success you deserve.
        </p>
      </motion.div>
      <div className="flex flex-row items-center justify-center mt-5">
        <p className="text-xs text-center w-40">
          May your day be filled with love, laughter, and unforgettable
          memories. You are such a special person in my life, and I am grateful
          for your friendship.
        </p>
        <img
          src={pic2}
          alt="Birthday"
          className="mr-10  ml-5 w-30 h-40 rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-row items-center justify-center mt-5">
        <img
          src={pic3}
          alt="Birthday"
          className="ml-10  mr-5 w-30 h-40 rounded-lg shadow-lg"
        />
        s
        <p className="text-xs text-center w-40">
          Thank you for always being there for me and for all the wonderful
          moments we have shared together.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mt-5">
        <p className="text-xs text-center w-40">
          Enjoy your special day to the fullest! Remember that you are loved and
          cherished by so many people. You deserve all the happiness in the
          world.
        </p>
        <img
          src={pic4}
          alt="Birthday"
          className="mr-10  ml-5 w-30 h-40 rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-row items-center justify-center mt-5">
        <img
          src={pic5}
          alt="Birthday"
          className="ml-10  mr-5 w-30 h-40 rounded-lg shadow-lg"
        />
        <p className="text-xs text-center w-40">
          May this birthday be the best one yet, filled with all the things you
          love. I can’t wait to celebrate with you and create even more amazing
          memories.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mt-5">
        <p className="text-xs text-center w-40">
          Cheers to you, Z! You are truly one of a kind, and I am so lucky to
          have you in my life. Thank you for being such an incredible friend.
        </p>
        <img
          src={pic6}
          alt="Birthday"
          className="mr-10  ml-5 w-30 h-40 rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-row items-center justify-center mt-5">
        <img
          src={pic7}
          alt="Birthday"
          className="ml-10  mr-5 w-30 h-40 rounded-lg shadow-lg"
        />
        <p className="text-xs text-center w-40">
          I hope this year brings you everything you have been wishing for and
          more. You deserve all the happiness in the world, and I am so excited
          to see what this year has in store for you.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mt-5">
        <p className="text-xs text-center w-40">
          So go out there and celebrate like there’s no tomorrow! Here’s to
          another year of adventures, laughter, and making beautiful memories
          together.
        </p>
        <img
          src={pic8}
          alt="Birthday"
          className="mr-10  ml-5 w-30 h-40 rounded-lg shadow-lg"
        />
      </div>
    </>
  );
}

export default App;
