export const dynamic = 'force-static';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background: '#0a0a0a',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Portfolio Loading...</h1>
      <p style={{ fontSize: '1.2rem' }}>Testing Vercel Deployment</p>
      <p style={{ marginTop: '2rem', color: '#888' }}>Build: {new Date().toISOString()}</p>
    </div>
  );
}
