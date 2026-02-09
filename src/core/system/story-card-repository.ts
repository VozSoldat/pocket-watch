
export abstract class StoryCardRepository {

    /**
     * Menyimpan atau memperbarui kartu.
     * Menggunakan Polymorphism untuk menyimpan data apa pun.
     */
    public static save(card: StoryCard): void {
        // addWorldInfo(keys, entry, internalId)
        addStoryCard(card.keys, card.entry, card.type, card.title);
    }

    /**
     * Mencari kartu berdasarkan title buatan kita.
     */
    public static findByTitle(title: string): StoryCard | null {
        // Kita iterasi worldInfo bawaan AID
        const rawCard = storyCards.find(c => (c as any).title === title);

        // Catatan: Di beberapa versi AID, internal ID dipetakan ke 'externalId'
        if (!rawCard) return null;

        return {
            keys: rawCard.keys,
            entry: rawCard.entry,
            type: rawCard.type,
            title: rawCard.title,
        };
    }

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