import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { useLottieCache } from "./animationsConfig.jsx";

const useOnScreen = (options) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
};

const LottieStatic = ({ id, style, loop = true }) => {
  const containerRef = useRef(null);
  const cache = useLottieCache();
  const [ref] = useOnScreen({ threshold: 0.1 }); 

  useEffect(() => {
    if (!cache || !cache[id] || !containerRef.current) return;

    const cachedAnim = cache[id];

    if (cachedAnim.instance && cachedAnim.instance.isLoaded) {
      if (!containerRef.current.contains(cachedAnim.instance.wrapper)) {
        containerRef.current.appendChild(cachedAnim.instance.wrapper);
      }
      cachedAnim.instance.play();
      return;
    }

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      animationData: cachedAnim.data,
      loop,
      autoplay: true,
      renderer: "svg", 
    });

    cachedAnim.instance = anim;
    anim.isLoaded = true;

    return () => {
      if (cachedAnim.instance) {
        cachedAnim.instance.pause();
      }
    };
  }, [id, cache, loop]);

  return (
    <div
      ref={(el) => {
        containerRef.current = el;
        ref.current = el;
      }}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        pointerEvents: "none", 
        position: "relative",
        zIndex: 1,
        ...style,
      }}
    />
  );
};

export default LottieStatic;

