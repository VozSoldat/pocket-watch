
export abstract class StoryCardRepository {

    /**
     * Create a new card.
     * @param card 
     */
    public static create(card: StoryCard): void {
        // addWorldInfo(keys, entry, internalId)
        addStoryCard(card.keys, card.entry, card.type, card.title);
    }
    /**
     * Save an existing card's changes or create a new card.
     */
    public static save(card: StoryCard): void {
        if (card.id === undefined) {
            this.create(card);
        } else {
            updateStoryCard(card.id, card.keys, card.entry, card.type, card.title);
        }
    }


    /**
     * Find cart by title.
     */
    public static findByTitle(title: string): StoryCard | null {
        // Kita iterasi worldInfo bawaan AID
        const rawCard = storyCards.find(c => (c as any).title === title);

        if (!rawCard) return null;

        return {
            keys: rawCard.keys,
            entry: rawCard.entry,
            type: rawCard.type,
            title: rawCard.title,
        };
    }

    /**
     * Remove card by title.
     * @param title
     * @returns title
     */
    public static removeByTitle(title: string): boolean {
        const rawCard = this.findByTitle(title);
        if (!rawCard) return false;
        if (rawCard.id === undefined) {
            return false;
        }
        removeStoryCard(rawCard.id);
        return true;
    }
}