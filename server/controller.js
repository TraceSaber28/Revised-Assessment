const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
const fortunes = require ('./db.json')
const legends = ["Bloodhound", "Gibralter", "Lifeline", "Pathfinder", "Wraith", "Bangalore", "Caustic", "Mirage", "Octane", "Watson", "Crypto", "Revenant", "Loba", "Rampart", "Horizon", "Fuse", "Valkrie", "Seer", "Ash", "Mad Maggie", "Newcastle", "Vantage", "Catylyst"]
module.exports = {
    
    getCompliment: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getRandomFortune: (req, res) => {
        const fiveFortunes = ['A fresh start will put you on your way.',
            'A friend asks only for your time not your money.',
            'A friend is a present you give yourself.',
            `A gambler not only will lose what he has, but also will lose what he doesn’t have.`,
            'A golden egg of opportunity falls into your lap this month.']

            let randomIndex = Math.floor(Math.random() * fiveFortunes.length);
            let randomFortune = fiveFortunes[randomIndex];
          
            res.status(200).send(randomFortune);
    },

    getAllFortunes: (req, res) => {
        res.status(200).send(fortunes)
    },
    
    getAllCompliments: (req, res) => {
        res.status(200).send(compliments)
    },

    getRandomLegend: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * legends.length);
        let randomLegend = legends[randomIndex];
      
        res.status(200).send(randomLegend);
    },

    getAllApexLegends: (req, res) => {
        res.status(200).send(legends)
    },



}