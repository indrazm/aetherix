import { Login } from "@/components/Auth/Login"

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ width: '300px', marginTop: '20px' }}>
        <Login />
      </div>
    </div>
  )
}
