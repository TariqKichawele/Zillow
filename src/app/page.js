import Navbar from "./components/Navbar";
import Grid from "./components/Grid";

const getProperties = async () =>{
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;
  if(!HYGRAPH_ENDPOINT) throw new Error('Hygrpah endpoint not set')

  const res = await fetch(HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        properties {
          beds
          description
          id
          images {
            fileName
            url
          }
          name
          location {
            longitude
            latitude
          }
          rentalPrice
          slug
        }
      }
      `
    })
  }) 

  const json = await res.json()
  return json.data.properties;
}

export default async function Home() {
  const properties = await getProperties();
  console.log(properties)
  const locations = properties.map(property => property.location)
  
  return (
    <>
      <Navbar />
      <Grid properties={properties}/>
    </>
  );
}
