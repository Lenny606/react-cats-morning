
    const url = "https://catfact.ninja/fact"

export const fetchData = async () => {


    const response = await fetch("https://catfact.ninja/fact")
    const respData = await response.json();
    
    return respData
    

}


