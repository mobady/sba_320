import { useEffect} from "react"


function App() {

  useEffect(() => {
    // 
    async function fetchData() {
      const response = await fetch("https://api.alquran.cloud/v1/meta")
      const data = await response.json()
      console.log(data)
      
    }
    fetchData();
  }, [])

  return (
    <>
   
    </>
  )
}

export default App
