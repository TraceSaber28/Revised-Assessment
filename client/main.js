const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const allFortunesBtn = document.getElementById("allFortunesButton")
const allComplimentsBtn = document.getElementById("allComplimentsButton")
const allLegendsBtn = document.getElementById("allLegendsButton")
const legendButton = document.getElementById("legendButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getRandomFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getAllFortunes = () => {
    axios.get('http://localhost:4000/api/all-fortunes')
    .then(res => {
        const data = res.data
        data.forEach(element => {
            alert(element.fortune)
        })
    })
}


const getAllCompliments = () => {
    axios.get('http://localhost:4000/api/all-compliments')
    .then(res => {
        const data = res.data
        for (let i = 0; i < data.length; i++){
        alert(data[i])
        }
        })
    }

    const getAllApexLegends = () => {
        axios.get('http://localhost:4000/api/apex-legends')
        .then(res => {
            const data = res.data
            for (let i = 0; i < data.length; i++){
            alert(data[i])
            }
            })
        }

        const getRandomLegend = () => {
            axios.get("http://localhost:4000/api/random-Legend")
                .then(res => {
                    const data = res.data;
                    alert(data);
            });
        };
        



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getRandomFortune)
allFortunesBtn.addEventListener('click', getAllFortunes)
allComplimentsBtn.addEventListener('click', getAllCompliments)
allLegendsBtn.addEventListener('click', getAllApexLegends)
legendButton.addEventListener('click', getRandomLegend)

