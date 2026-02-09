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