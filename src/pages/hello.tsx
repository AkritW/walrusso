import { useEffect, useState } from "react"

interface HelloApiResponse {
  message: string
}

const HelloFetchPage = () => {
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    void (async () => {
      const response = await fetch("/api/say_hello")
      console.log(response)
      const data = (await response.json()) as HelloApiResponse
      console.log(data)

      setMessage(data.message)
    })()
  }, [])

  return ( <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "48px", textAlign: "center" }}>{message}</h1>
    </div>
  );
}

export default HelloFetchPage
