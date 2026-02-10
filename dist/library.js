// PocketWatch by VozSoldat.
// https://github.com/VozSoldat/PocketWatch
"use strict";
(() => {
  // src/constants.ts
  var STORY_CARD_NAME = "Pocket Watch";
  var CREDIT = "VozSoldat";

  // src/core/system/story-card-repository.ts
  var StoryCardRepository = class {
    /**
     * Buat kartu baru.
     * @param card 
     */
    static create(card) {
      addStoryCard(card.keys, card.entry, card.type, card.title);
    }
    /**
     * Menyimpan atau memperbarui kartu.
     */
    static save(card) {
      if (card.id === void 0) {
        this.create(card);
      } else {
        updateStoryCard(card.id, card.keys, card.entry, card.type, card.title);
      }
    }
    /**
     * Mencari kartu berdasarkan title buatan kita.
     */
    static findByTitle(title) {
      const rawCard = storyCards.find((c) => c.title === title);
      if (!rawCard) return null;
      return {
        keys: rawCard.keys,
        entry: rawCard.entry,
        type: rawCard.type,
        title: rawCard.title
      };
    }
    static removeByTitle(title) {
      const rawCard = this.findByTitle(title);
      if (!rawCard) return false;
      if (rawCard.id === void 0) {
        return false;
      }
      removeStoryCard(rawCard.id);
      return true;
    }
  };

  // src/core/time/time-data.ts
  var TimeData = class _TimeData {
    constructor(tunsFromLastUpdate, year, month, dayInMonth, dayInWeek, hour, minute) {
      this.tunsFromLastUpdate = tunsFromLastUpdate;
      this.year = year;
      this.month = month;
      this.dayInMonth = dayInMonth;
      this.dayInWeek = dayInWeek;
      this.hour = hour;
      this.minute = minute;
    }
    static empty() {
      return new _TimeData(0, "", 0, 0, 0, 0, 0);
    }
    toJSONString() {
      return JSON.stringify(this);
    }
    static fromJSONString(jsonString) {
      return JSON.parse(jsonString);
    }
  };

  // src/core/time/time-data-story-card.ts
  var TimeDataStoryCard = class {
    id;
    keys = CREDIT;
    entry = TimeData.empty().toJSONString();
    type = STORY_CARD_NAME;
    title = STORY_CARD_NAME;
  };

  // src/core/modifiers/input-modifier.ts
  var inputModifier = (text) => {
    initiateData();
    return { text };
  };
  function initiateData() {
    const storyCard = new TimeDataStoryCard();
    StoryCardRepository.findByTitle(storyCard.title) || StoryCardRepository.create(storyCard);
  }

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
  var PocketWatch = {
    inputModifier: (text) => inputModifier(text),
    contextModifier: (text) => {
      const timeStr = getTimeString(state.totalMinutes);
      const period = getTimeOfDay(state.totalMinutes);
      const timeInjection = `[ Current Time: ${timeStr} (${period}) ]
`;
      return { text: timeInjection + text };
    },
    repository: StoryCardRepository
  };
  globalThis.PocketWatch = PocketWatch;
})();

// END OF PocketWatch by VozSoldat. 
// Copy other scripts below.