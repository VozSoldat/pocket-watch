import { CREDIT, STORY_CARD_NAME } from "../../constants.js";
import { StoryCardRepository } from "../system/story-card-repository.js";
import { TimeDataStoryCard } from "../time/time-data-story-card.js";
import { TimeData } from "../time/time-data.js";

export const inputModifier = (text: string): ModifierResponse => {
    initiateData();
    return { text };
}

function initiateData() {
    const storyCard = new TimeDataStoryCard();
    StoryCardRepository.findByTitle(storyCard.title) || StoryCardRepository.create(storyCard);
}