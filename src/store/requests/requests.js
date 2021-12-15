
const URL = 'https://61b46e1759c6ac00173010ef.mockapi.io/'

export const getData = async (resourse) => {
    const response = await fetch(`${URL}${resourse}`);
    const result = await response.json();
    return result;
}

export const postData = async (itemData, resourse) => {
    const options = {
        method: "POST",
        body: JSON.stringify(itemData),
        headers: {
            "Content-Type": "application/json"
        }
    };
    const response = await fetch(`${URL}${resourse}`, options);
    const result = await response.json();
    return result;
}

export const putData = async (itemData, resourse) => {
    const options = {
        method: "PUT",
        body: JSON.stringify(itemData),
        headers: {
          "Content-Type": "application/json"
        }
      };
      const response = await fetch(`${URL}${resourse}/${itemData.id}`, options);
      const result = await response.json();
  
      return result;
}

export const deleteData = async (itemId, resourse) => {
      const response = await fetch(`${URL}${resourse}/${itemId}`, { method: "DELETE" });
      const result = await response.json();
  
      return result;
}
