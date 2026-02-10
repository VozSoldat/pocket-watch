import { CREDIT, STORY_CARD_NAME } from "../../constants.js";
import { TimeData } from "./time-data.js";

export class TimeDataStoryCard implements StoryCard {
    public id?: number;
    public keys: string = CREDIT;
    public entry: string = TimeData.empty().toJSONString();
    public type: string = STORY_CARD_NAME;
    public title: string = STORY_CARD_NAME;
}