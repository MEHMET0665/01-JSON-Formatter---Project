const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "Oooops", "More", "Next", "Continue", "Keep going", "Click me", "A new one", "Try Again", "So Close", "Well Done"];
const url='https://jsonplaceholder.typicode.com/'


async function getJson(){
  try {
    const response = await fetch(url+e);
    if(response.ok) {
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
    
        console.log(jsonResponse)
    
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error)
  }
}



const requestOptions = {
  method: 'POST',
  body: JSON.stringify({
    "word": "fretful",
    "score": 398,
    "numSyllables": 2
  }),
  header:{
    'Content-Type':'application/json',
  }
}

async function sendJson() {
  try {
    const response = await fetch(url, requetOptions);
    if(response.ok) {
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      console.log(jsonResponse[i])
      }
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error)
  }


// DONOT CHANGE BELOW THIS LINE 
const formatJson = (resJson) => {
  resJson = JSON.stringify(resJson);
  //console.log(resJson);
  let counter = 0;
  return resJson.split('')
  .map(char => {
    switch (char) {
      case ',':
        return `,\n${' '.repeat(counter * 2)}`;
      case '{':
        counter += 1;
        return `{\n${' '.repeat(counter * 2)}`;
      case '}':
        counter -= 1;
        return `\n${' '.repeat(counter * 2)}}`;
      default:
        return char;
    }
  })
  .join('');
}

const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  sendJson();
  jsonButton.innerHTML = `${collection[jsonSelection]}!`;
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
}

jsonButton.addEventListener('click', getJson());

