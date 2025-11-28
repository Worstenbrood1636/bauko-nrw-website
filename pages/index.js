
import Head from 'next/head'

export default function Home() {
  const gallery = [
    '/site_img_1.svg',
    '/site_img_2.svg',
    '/site_img_3.svg',
    '/site_img_4.svg'
  ];
  const logo = '/logo.png';
  return (
    <div style={{fontFamily: 'Arial, sans-serif', color: '#1f2937'}}>
      <Head>
        <title>BauKo NRW - Baukoordination & Subservice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header style={{background:'#fff',boxShadow:'0 1px 3px rgba(0,0,0,0.06)'}}>
        <div style={{maxWidth:1100, margin:'0 auto', padding:'16px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <img src={logo} alt="BauKo NRW" style={{height:56}}/>
            <div>
              <div style={{fontSize:18, fontWeight:700}}>BauKo NRW</div>
              <div style={{fontSize:12, color:'#6b7280'}}>Baukoordination & Subservice — NRW-weit</div>
            </div>
          </div>
          <nav style={{display:'flex', gap:18}}>
            <a href="#services" style={{color:'#1f2937', textDecoration:'none'}}>Leistungen</a>
            <a href="#packages" style={{color:'#1f2937', textDecoration:'none'}}>Pakete</a>
            <a href="#contact" style={{color:'#1f2937', textDecoration:'none'}}>Kontakt</a>
          </nav>
        </div>
      </header>

      <main style={{maxWidth:1100, margin:'0 auto', padding:'28px'}}>
        <section style={{display:'flex', gap:36, alignItems:'center'}}>
          <div style={{flex:1}}>
            <h1 style={{fontSize:34, margin:0}}>Bauleitung, Koordination & Subservice für Tiefbau und Glasfaser</h1>
            <p style={{color:'#6b7280'}}>Mit über 20 Jahren Erfahrung im Straßen- und Tiefbau sowie als Bauleiter im Glasfaserausbau bieten wir schlanke, zuverlässige und sofort verfügbare Unterstützung für Unternehmen, Kommunen und Bauherren in Nordrhein‑Westfalen.</p>
            <div style={{display:'flex', gap:12, marginTop:12}}>
              <a href="#contact" style={{background:'#f59e0b', padding:'10px 16px', color:'#fff', borderRadius:6, textDecoration:'none'}}>Kostenloses Erstgespräch</a>
              <a href="/profil.pdf" style={{border:'1px solid #e5e7eb', padding:'10px 16px', borderRadius:6, textDecoration:'none'}}>Kurzprofil (PDF)</a>
            </div>
          </div>
          <div style={{width:420}}>
            <div style={{background:'#fff', padding:18, borderRadius:8, boxShadow:'0 4px 12px rgba(0,0,0,0.05)'}}>
              <h3 style={{marginTop:0}}>Sofort verfügbare Services</h3>
              <ul style={{paddingLeft:18, color:'#374151'}}>
                <li>Bauleitung (700–950 €/Tag)</li>
                <li>Monatspauschale Bauüberwachung (1.800–4.500 €/Monat)</li>
                <li>Vermittlung Kolonnen (250–900 €/Monat)</li>
                <li>Baustellendoku (350–550 €/Bericht)</li>
              </ul>
              <a href="#contact" style={{display:'inline-block', marginTop:12, background:'#1d4ed8', color:'#fff', padding:'8px 12px', borderRadius:6, textDecoration:'none'}}>Anfrage stellen</a>
            </div>
            <div style={{marginTop:12}}>
              <div style={{height:220, overflow:'hidden', borderRadius:8}}>
                <img src={gallery[0]} alt="Projekt" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
            </div>
          </div>
        </section>

        <section id="services" style={{marginTop:40}}>
          <h2>Unsere Leistungen</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:12}}>
            <div style={{background:'#fff', padding:16, borderRadius:8}}>Bauleitung & Projektkoordination</div>
            <div style={{background:'#fff', padding:16, borderRadius:8}}>Beratung, LV & Ausschreibungsservice</div>
            <div style={{background:'#fff', padding:16, borderRadius:8}}>Kleine Bauleistungen (Subunternehmer)</div>
            <div style={{background:'#fff', padding:16, borderRadius:8}}>Vermittlung & Kolonnen</div>
          </div>
        </section>

        <section id="gallery" style={{marginTop:40}}>
          <h2>Projekte</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginTop:12}}>
            {gallery.map((g, i) => (
              <div key={i} style={{borderRadius:8, overflow:'hidden'}}>
                <img src={g} alt={'Projekt '+(i+1)} style={{width:'100%', height:160, objectFit:'cover'}}/>
              </div>
            ))}
          </div>
        </section>

        <section id="packages" style={{marginTop:40}}>
          <h2>Angebotspakete</h2>
          <div style={{display:'flex', gap:12, marginTop:12}}>
            <div style={{background:'#fff', padding:16, borderRadius:8}}>Paket S — 1.800 €/Monat</div>
            <div style={{background:'#fff', padding:16, borderRadius:8}}>Paket M — 3.500–4.500 €/Monat</div>
            <div style={{background:'#fff', padding:16, borderRadius:8}}>Paket L — 6.000–8.500 €/Monat</div>
          </div>
        </section>

        <section id="contact" style={{marginTop:40}}>
          <h2>Kontakt</h2>
          <div style={{display:'flex', gap:16, marginTop:12}}>
            <div style={{flex:1}}>
              <p>Telefon: <a href="tel:+491701234567">+49 170 1234567</a></p>
              <p>E‑Mail: <a href="mailto:info@bauko-nrw.de">info@bauko-nrw.de</a></p>
              <p>Adresse: Musterstraße 1, 12345 Musterstadt (NRW)</p>
              <p><a href="/kundenliste.xlsx">Kundenliste (Excel)</a></p>
            </div>
            <div style={{flex:1}}>
              <form>
                <div style={{marginBottom:8}}><input placeholder="Name" style={{width:'100%', padding:8}}/></div>
                <div style={{marginBottom:8}}><input placeholder="E-Mail" style={{width:'100%', padding:8}}/></div>
                <div style={{marginBottom:8}}><textarea placeholder="Nachricht" style={{width:'100%', padding:8}} rows={5}></textarea></div>
                <button type="button" style={{background:'#1d4ed8', color:'#fff', padding:'8px 12px', borderRadius:6}}>Absenden</button>
              </form>
            </div>
          </div>
        </section>

      </main>

      <footer style={{textAlign:'center', padding:24, color:'#6b7280'}}>
        © BauKo NRW — Baukoordination & Subservice
      </footer>
    </div>
  )
}
