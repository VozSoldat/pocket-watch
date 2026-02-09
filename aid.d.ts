/** aid.d.ts **/
declare var state: any;
declare var globalThis: any;
declare var info: {
    characters: any[];
    memory: string;
    maxCharacters: number;
};

interface ModifierResponse {
    text?: string;
    stop?: boolean;
}

declare function inputModifier(text: string): ModifierResponse;
declare function contextModifier(text: string): ModifierResponse;
declare function outputModifier(text: string): ModifierResponse;

interface StoryCard {
    id?: number;       // ID numerik dari AID (read-only)
    keys: string;      // Trigger words (misal: "clock, time")
    entry: string;     // Konten (bisa string biasa atau JSON.stringify)
    type: string;
    title: string;
    description?: string;
}

declare var storyCards: StoryCard[];
declare function addStoryCard(keys: string, entry: string, type: string, name?: string, notes?: string): number;
declare function removeStoryCard(id: number): void;
declare function updateStoryCard(id: number, keys: string, entry: string, type: string, name?: string, notes?: string): void;

declare function log(text: string): void;