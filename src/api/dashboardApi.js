const dashboardApi = {
    get: (params) => {
      return fetch('', {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
      })
    // .then(response => response.json()) 
    // .then(json => console.log(json))
    // .catch(err => console.log(err));
    }
  }
  
  export default dashboardApi;