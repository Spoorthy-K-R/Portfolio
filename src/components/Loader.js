import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearBuffer() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  React.useEffect(() => {
    // Set up the interval timer
    const timer = setInterval(() => {
      if (progress < 100) {
        // Update progress by 10 every 100ms
        setProgress((prevProgress) => prevProgress + 10);

        // Add some random buffer increase
        if (buffer < 100 && progress % 5 === 0) {
          setBuffer((prevBuffer) => {
            const newBuffer = prevBuffer + 10 + Math.random() * 10;
            return newBuffer > 100 ? 100 : newBuffer;
          });
        }
      } else {
        clearInterval(timer); // Stop the timer when progress reaches 100
      }
    }, 100);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [progress, buffer]);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
  );
}
