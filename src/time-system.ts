export interface TimeState {
  totalMinutes: number;
}

export const getTimeString = (totalMinutes: number): string => {
  const hours = Math.floor((totalMinutes / 60) % 24);
  const minutes = totalMinutes % 60;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${displayHours}:${displayMinutes} ${ampm}`;
};

export const getTimeOfDay = (totalMinutes: number): string => {
  const hour = (totalMinutes / 60) % 24;
  if (hour >= 5 && hour < 12) return "Morning";
  if (hour >= 12 && hour < 17) return "Afternoon";
  if (hour >= 17 && hour < 21) return "Evening";
  return "Night";
};