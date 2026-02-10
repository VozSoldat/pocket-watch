import { inputModifier } from './core/modifiers/input-modifier.js';
import { StoryCardRepository } from './core/system/story-card-repository.js';
import { getTimeString, getTimeOfDay } from './time-system.js';

const PocketWatch = {
    inputModifier: (text: string) => inputModifier(text),

    contextModifier: (text: string) => {
        const timeStr = getTimeString(state.totalMinutes);
        const period = getTimeOfDay(state.totalMinutes);

        // 3. Inject the "Current Time" at the top of the AI's memory
        // This forces the AI to realize it's Night or Day.
        const timeInjection = `[ Current Time: ${timeStr} (${period}) ]\n`;

        return { text: timeInjection + text };
    },
    repository: StoryCardRepository
};

(globalThis as any).PocketWatch = PocketWatch;