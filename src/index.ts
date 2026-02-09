import { getTimeString, getTimeOfDay } from './time-system.js';

(globalThis as any).inputModifier = (text: string) => {
  // 1. Initialize time if it doesn't exist
  if (typeof state.totalMinutes === 'undefined') {
    state.totalMinutes = 480; // Start at 8:00 AM
  }

  // 2. Advance time per turn (e.g., 10 minutes per action)
  state.totalMinutes += 10;

  return { text };
};

(globalThis as any).contextModifier = (text: string) => {
  const timeStr = getTimeString(state.totalMinutes);
  const period = getTimeOfDay(state.totalMinutes);

  // 3. Inject the "Current Time" at the top of the AI's memory
  // This forces the AI to realize it's Night or Day.
  const timeInjection = `[ Current Time: ${timeStr} (${period}) ]\n`;
  
  return { text: timeInjection + text };
};