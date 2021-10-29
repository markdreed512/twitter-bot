    
    function getGreeting(){
        
        let greetings = [
            "Hello!! ", "Salutations!! ", "Best Regards! ", "Dearest humans, ", '"Warmest" regards, ', "My condolences!! ", ""
        ]
        let index = Math.floor(Math.random()*greetings.length)
        return greetings[index]
    }
    
    async function getRandomFact(){
        
        let greeting = `${getGreeting()} I am a human!! Did you know that `
        let response = await fetch("https://uselessfacts.jsph.pl/random.json")
        const data = await response.json()
        let dataAsArray = data.text.split('')
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(alphabet.includes(dataAsArray[0])){
            dataAsArray[0] = dataAsArray[0].toLowerCase()
        }
        let lowerCasedText = dataAsArray.join('')
        document.getElementById('fact').innerHTML = greeting + lowerCasedText + "!!"
    }

    document.getElementById('btn').addEventListener('click', getRandomFact)