import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  type MousePosition = {
    x: number;
    y: number;
  };

  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    // CleanUp EventListener
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Animation
  const variants = {
    cursorAnimation: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
    dotAnimation: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 50,
      },
    },
  };

  return (
    <main>
      <motion.div
        variants={variants}
        animate="cursorAnimation"
        className="cursor"
      ></motion.div>
      <motion.div
        variants={variants}
        animate="dotAnimation"
        className="cursor-dot"
      ></motion.div>
      <div>
        <h1>Custom Cursor</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </main>
  );
}

export default App;
