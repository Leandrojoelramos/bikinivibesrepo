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
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  useEffect(() => {
    if (!visible || !cache || !cache[id] || !containerRef.current) return;

    const cachedAnim = cache[id];


    if (cachedAnim.instance && cachedAnim.instance.isLoaded) {
      containerRef.current.appendChild(cachedAnim.instance.wrapper);
      return;
    }

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      animationData: cachedAnim.data,
      loop,
      autoplay: true,
      renderer: "canvas", 
    });

    cachedAnim.instance = anim;
    anim.isLoaded = true;

    return () => {
      if (containerRef.current && anim.wrapper) {
        try {
          containerRef.current.removeChild(anim.wrapper);
        } catch {}
      }
    };
  }, [id, cache, loop, visible]);

  return (
    <div
      ref={(el) => {
        containerRef.current = el;
        ref.current = el;
      }}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        ...style,
      }}
    />
  );
};

export default LottieStatic;
