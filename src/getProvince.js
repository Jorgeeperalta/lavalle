
const get = async () => {
  try{


   var provincias=[]
    async function asyncData() {
        const response = await fetch(
          "https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.2/download/provincias.json"
        );
        const data = await response.json();
        return data;
      }
      const result = asyncData();
      result.then((data) => {
         provincias=     data;
        // console.log(provincias)
         localStorage.provincias = JSON.stringify(data)
       
      });
    return provincias
  } catch (e) {
    console.log(e)
  }
}
module.exports ={get}
  
