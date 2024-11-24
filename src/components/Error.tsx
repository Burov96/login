import { DotLottiePlayer } from '@dotlottie/react-player';

interface ErrorProps {
  width?: number;
  height?: number;
}

const ErrorLottie = ({ width = 200, height = 200 }: ErrorProps) => {
  return (
      <DotLottiePlayer
        src="/failure.lottie"
        autoplay
        loop
        style={{ width: `${width}px`, height: `${height}px` }}
      />
  );
};

export {ErrorLottie};