const data = {}

data.fetchFruits = async () => {
    try{
        const response = await fetch('../data/fruits.json')
        const fruits = await response.json();
        return fruits;

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

export default data;