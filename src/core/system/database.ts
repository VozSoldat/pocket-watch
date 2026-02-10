import { Singleton } from '../../common/singleton.js';
import { CREDIT, STORY_CARD_NAME } from '../../constants.js';
import { TimeData } from '../time/time-data.js';
import { StoryCardRepository } from './story-card-repository.js';

export class Database extends Singleton {
    public get data(): TimeData | null {
        const storyCard = StoryCardRepository.findByTitle(STORY_CARD_NAME);
        if (!storyCard) {
            StoryCardRepository.create({ keys: CREDIT, entry: TimeData.empty().toJSONString(), type: STORY_CARD_NAME, title: STORY_CARD_NAME });
            return TimeData.empty();
        }
        return TimeData.fromJSONString(storyCard.entry);
    }

    public set data(data: TimeData) {
        const storyCard = StoryCardRepository.findByTitle(STORY_CARD_NAME);
        if (!storyCard) return;
        StoryCardRepository.create({ ...storyCard, entry: data.toJSONString() });
    }

}