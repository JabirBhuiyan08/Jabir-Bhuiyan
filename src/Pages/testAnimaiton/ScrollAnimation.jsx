import { useEffect, useState, useRef } from "react";

const NUM_SEGMENTS = 15; // Number of snake segments
const SPEED = 0.01; // Default speed of the snake
const FRICTION = 0.85; // Friction for smoother movement
const SPRING = 0.1; // Spring force for following
const MAX_SPEED = 1.5; // Maximum speed when boosted

const ScrollAnimation = () => {
  const [positions, setPositions] = useState(
    Array(NUM_SEGMENTS).fill({ x: 0, y: 0, vx: 0, vy: 0 })
  );
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isBoosted, setIsBoosted] = useState(false);
  const [color, setColor] = useState("green");
  const requestRef = useRef(null);
  const speedRef = useRef(SPEED);

  // Mouse move event handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      // Change color based on mouse position
      const hue = (e.clientX / window.innerWidth) * 360;
      setColor(`hsl(${hue}, 100%, 50%)`);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle speed boost on click
  const handleClick = () => {
    setIsBoosted(true);
    speedRef.current = MAX_SPEED;
    setTimeout(() => {
      setIsBoosted(false);
      speedRef.current = SPEED;
    }, 500); // Speed boost lasts 500ms
  };

  // Update snake position with exciting physics
  const updateSnake = () => {
    const newPositions = [...positions];

    // Head follows the mouse
    newPositions[0] = { ...newPositions[0], x: mousePos.x, y: mousePos.y };

    // The rest of the body follows the head
    for (let i = 1; i < NUM_SEGMENTS; i++) {
      const dx = newPositions[i - 1].x - newPositions[i].x;
      const dy = newPositions[i - 1].y - newPositions[i].y;

      // Apply spring force for following
      const ax = dx * SPRING;
      const ay = dy * SPRING;

      newPositions[i].vx += ax;
      newPositions[i].vy += ay;

      // Apply friction to slow down the segments
      newPositions[i].vx *= FRICTION;
      newPositions[i].vy *= FRICTION;

      // Update the position based on velocity and apply speed
      newPositions[i].x += newPositions[i].vx * speedRef.current;
      newPositions[i].y += newPositions[i].vy * speedRef.current;
    }

    setPositions(newPositions);
    requestRef.current = requestAnimationFrame(updateSnake);
  };

  // Start the animation loop
  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateSnake);
    return () => cancelAnimationFrame(requestRef.current); // Cleanup on unmount
  }, [mousePos]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      onClick={handleClick}
    >
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            width: `${25 - index * 1.2}px`, // Dynamic size for each segment (starting big and shrinking)
            height: `${25 - index * 1.2}px`, // Same dynamic size for height
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            opacity: 1 - index / NUM_SEGMENTS, // Tail fading effect
            backgroundColor: color, // Dynamic color change based on mouse position
            boxShadow: isBoosted ? "0 0 10px 5px rgba(255, 255, 255, 0.5)" : "none", // Boost effect
          }}
        />
      ))}
    </div>
  );
};

export default ScrollAnimation;
