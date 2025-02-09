import { useEffect, useRef } from 'react'
import gsap from 'gsap';
const CursorTracker = () => {
    const cursorRef = useRef(null);

    useEffect(()=>{
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power2.Out"
            });
        }

        window.addEventListener("mousemove", moveCursor);

        return ()=>{
            window.removeEventListener("mousemove", moveCursor);
        }
    },[])
  return (
    <div ref={cursorRef} className="fixed top-2 left-2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-slate-500 rounded-full  z-50 mix-blend-difference" >
    </div>
  )
}

export default CursorTracker