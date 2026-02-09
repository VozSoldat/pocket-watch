"use strict";
(() => {
  // src/time-system.ts
  var getTimeString = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60 % 24);
    const minutes = totalMinutes % 60;
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${displayHours}:${displayMinutes} ${ampm}`;
  };
  var getTimeOfDay = (totalMinutes) => {
    const hour = totalMinutes / 60 % 24;
    if (hour >= 5 && hour < 12) return "Morning";
    if (hour >= 12 && hour < 17) return "Afternoon";
    if (hour >= 17 && hour < 21) return "Evening";
    return "Night";
  };

  // src/index.ts
  globalThis.inputModifier = (text) => {
    if (typeof state.totalMinutes === "undefined") {
      state.totalMinutes = 480;
    }
    state.totalMinutes += 10;
    return { text };
  };
  globalThis.contextModifier = (text) => {
    const timeStr = getTimeString(state.totalMinutes);
    const period = getTimeOfDay(state.totalMinutes);
    const timeInjection = `[ Current Time: ${timeStr} (${period}) ]
`;
    return { text: timeInjection + text };
  };
})();
