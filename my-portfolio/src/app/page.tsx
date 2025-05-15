"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import ProfileCard from "@/components/ProfileCard";
import NavBar from "@/components/NavBar";
import MainContent from "@/components/MainContent";

const SECTION_IDS = ["home", "skills", "experience", "projects", "contact"];

const PortfolioPage: React.FC = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isWheeling, setIsWheeling] = useState(false); // Prevents rapid scroll triggers

  const lastWheelTime = useRef(0);
  const scrollAccumulator = useRef(0);

  const SCROLL_INTENT_THRESHOLD = 50;
  const SCROLL_COOLDOWN = 800; // ms: Cooldown between scroll navigations (should be > transition duration).
  const CSS_TRANSITION_DURATION = 700; // ms: Match this with your CSS.

  const navigateToSection = useCallback((index: number) => {
    if (index >= 0 && index < SECTION_IDS.length) {
      setActiveSectionIndex(index);
      // Optional: Update URL hash for bookmarking/linking (consider implications with scroll hijacking)
      // window.history.pushState(null, '', `#${SECTION_IDS[index]}`);
    }
  }, []);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      const currentTime = Date.now();

      // Cooldown to prevent processing multiple wheel events during/immediately after a transition
      if (isWheeling || currentTime - lastWheelTime.current < SCROLL_COOLDOWN) {
        event.preventDefault(); // Still prevent default if in cooldown but event fires
        return;
      }

      event.preventDefault(); // Crucial to prevent default page scroll

      scrollAccumulator.current += event.deltaY;

      if (Math.abs(scrollAccumulator.current) >= SCROLL_INTENT_THRESHOLD) {
        setIsWheeling(true); // Start "locking" against other scrolls
        lastWheelTime.current = currentTime;

        if (scrollAccumulator.current > 0) {
          // Scrolling down
          navigateToSection(
            Math.min(activeSectionIndex + 1, SECTION_IDS.length - 1)
          );
        } else {
          // Scrolling up
          navigateToSection(Math.max(activeSectionIndex - 1, 0));
        }
        scrollAccumulator.current = 0; // Reset accumulator

        // Release the "lock" after the transition and a small buffer
        setTimeout(() => {
          setIsWheeling(false);
        }, CSS_TRANSITION_DURATION + 100); // Match CSS transition duration + buffer
      }
      // Optional: Implement a timeout to reset scrollAccumulator if user scrolls a bit then stops for a while
      // clearTimeout(scrollAccumulatorTimeoutRef.current);
      // scrollAccumulatorTimeoutRef.current = setTimeout(() => scrollAccumulator.current = 0, 300);
    },
    [activeSectionIndex, navigateToSection, isWheeling]
  );

  useEffect(() => {
    // Attach listener to window for global scroll capture
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  // Optional: Handle hash changes for direct navigation or back/forward buttons
  // This can be tricky with scroll hijacking, use with caution or adapt.
  // useEffect(() => {
  //   const handleHashChange = () => {
  //     const hash = window.location.hash.replace('#', '');
  //     const index = SECTION_IDS.indexOf(hash);
  //     if (index !== -1 && index !== activeSectionIndex) {
  //       navigateToSection(index);
  //     }
  //   };
  //   window.addEventListener('hashchange', handleHashChange);
  //   // Initial check
  //   // handleHashChange();
  //   return () => window.removeEventListener('hashchange', handleHashChange);
  // }, [navigateToSection, activeSectionIndex]);

  return (
    // Main container: Added `overflow-hidden` to the body effectively to prevent native scrollbars
    // The `h-screen` ensures it tries to take full screen height.
    <div className="min-h-screen h-screen bg-gray-200 dark:bg-gray-950 flex flex-col md:flex-row p-4 md:p-6 lg:p-8 gap-4 md:gap-6 lg:gap-8 overflow-hidden">
      <aside className="w-full md:w-64 lg:w-72 xl:w-80 md:sticky md:top-6 lg:top-8 self-start h-auto md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] order-first z-20">
        {/* Ensure ProfileCard has a defined background to not be transparent over sliding content */}
        <ProfileCard />
      </aside>

      {/* Center Column: Main Content - CRITICAL: `overflow-hidden` here */}
      <main
        // ref={mainContentScrollRef} // Use if attaching wheel listener here instead of window
        className="flex-grow w-full md:flex-1 md:order-none overflow-hidden relative" // `relative` for absolute positioning of children if needed, `overflow-hidden` is key
      >
        <MainContent
          activeSectionId={SECTION_IDS[activeSectionIndex]}
          sectionIds={SECTION_IDS}
          cssTransitionDuration={CSS_TRANSITION_DURATION}
        />
      </main>

      <aside className="w-full md:w-20 lg:w-24 xl:w-24 md:sticky md:top-6 lg:top-8 self-start h-auto md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] z-20 order-last md:order-last">
        {/* Ensure NavBar has a defined background */}
        <NavBar
          sectionIds={SECTION_IDS}
          activeSectionId={SECTION_IDS[activeSectionIndex]}
          onNavigate={(sectionId) => {
            const index = SECTION_IDS.indexOf(sectionId);
            if (index !== -1) {
              // If clicking, we want an immediate effect without scroll accumulation logic
              setIsWheeling(true); // Briefly set to prevent immediate scroll after click-navigate
              navigateToSection(index);
              lastWheelTime.current = Date.now(); // Update last wheel time
              setTimeout(
                () => setIsWheeling(false),
                CSS_TRANSITION_DURATION + 100
              );
            }
          }}
        />
      </aside>
    </div>
  );
};

export default PortfolioPage;
