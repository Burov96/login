import { DotLottiePlayer } from "@dotlottie/react-player";

interface LoadingProps {
  width?: number;
  height?: number;
}

const Loading = ({ width = 400, height = 400 }: LoadingProps) => {
  return (
    <div>
      <DotLottiePlayer
        src="/loading.lottie"
        autoplay
        loop
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  );
};

export { Loading };
