class IngredientModel {

    id: number;
    title: string;
    definition: string;
    cancerous_rating: number;
    alternatives: string;

    constructor(id: number, title: string, definition: string,
        cancerous_rating: number, alternatives: string
    ) {
        this.id = id;
        this.title = title;
        this.definition = definition;
        this.cancerous_rating = cancerous_rating;
        this.alternatives = alternatives;
    }

}

export default IngredientModel;