// Direction 02 — DOSSIER (personalized for Leela Ramcharan Sai Kadiyam)
// Mono display (JetBrains Mono), terminal accents, editorial grid.
// Technical-luxury: feels like a classified engineering dossier.

function Dossier({ dark = true }) {
  const bg = dark ? '#0a0a0a' : '#f2efe8';
  const fg = dark ? '#f2efe8' : '#0a0a0a';
  const muted = dark ? 'rgba(242,239,232,0.5)' : 'rgba(10,10,10,0.5)';
  const line = dark ? 'rgba(242,239,232,0.14)' : 'rgba(10,10,10,0.14)';
  const accent = '#9EFF6E'; // sharp signal-green (terminal)

  const mono = `'JetBrains Mono', monospace`;
  const sans = `'Inter', sans-serif`;

  return (
    <div data-scroll-root style={{
      width:'100%', height:'100%', overflowY:'auto', overflowX:'hidden',
      background: bg, color: fg, fontFamily: sans, position:'relative',
    }}>
      <CursorHalo accent={accent} size={360} />

      {/* ── PERSISTENT FRAME ───────────────────────────── */}
      <div style={{position:'fixed', top:24, left:24, right:24, bottom:24, border:`1px solid ${line}`, pointerEvents:'none', zIndex:5}}>
        {[['top','left'],['top','right'],['bottom','left'],['bottom','right']].map(([v,h]) => (
          <div key={v+h} style={{position:'absolute', [v]:-1, [h]:-1, width:8, height:8, borderTop: v==='top' ? `1px solid ${accent}` : 'none', borderBottom: v==='bottom' ? `1px solid ${accent}` : 'none', borderLeft: h==='left' ? `1px solid ${accent}` : 'none', borderRight: h==='right' ? `1px solid ${accent}` : 'none'}} />
        ))}
      </div>

      {/* ── TOP STRIP (always-visible meta) ────────────── */}
      <div style={{
        position:'sticky', top:0, zIndex:10,
        display:'grid', gridTemplateColumns:'1fr 1fr 1fr', alignItems:'center',
        padding:'18px 56px', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
        background: dark ? 'rgba(10,10,10,0.7)' : 'rgba(242,239,232,0.7)',
        borderBottom:`1px solid ${line}`,
        fontFamily:mono, fontSize:11, letterSpacing:'.16em', textTransform:'uppercase',
      }}>
        <div style={{display:'flex', gap:18, alignItems:'center'}}>
          <MarkSlash size={12} color={accent} />
          <span>Dossier · L.R.S. Kadiyam</span>
          <span style={{color:muted}}>// engineering record</span>
        </div>
        <div style={{textAlign:'center', color:muted}}>FILE-2026-LRSK · CLASS · PUBLIC</div>
        <div style={{display:'flex', gap:24, justifyContent:'flex-end'}}>
          <a href="#abstract" style={{color:fg, textDecoration:'none'}}>0.0 Abstract</a>
          <a href="#record" style={{color:fg, textDecoration:'none'}}>1.0 Record</a>
          <a href="#field" style={{color:fg, textDecoration:'none'}}>2.0 Field</a>
          <a href="#contact" style={{color:fg, textDecoration:'none'}}>3.0 Contact</a>
        </div>
      </div>

      {/* ── COVER ───────────────────────────────────────── */}
      <section style={{padding:'120px 56px 100px', position:'relative'}}>
        <GradientSweep accent={fg} dark={dark} />

        <div style={{position:'relative', zIndex:1, maxWidth:1280, margin:'0 auto'}}>

          {/* meta strip */}
          <div style={{display:'grid', gridTemplateColumns:'120px 1fr 220px', gap:40, alignItems:'start', marginBottom:80}}>
            <Reveal>
              <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.2em', color:muted, lineHeight:1.9}}>
                <div>DOC.NO</div><div style={{color:fg}}>2026·LRSK·01</div>
                <div style={{marginTop:14}}>REV</div><div style={{color:fg}}>01</div>
                <div style={{marginTop:14}}>ISSUED</div><div style={{color:fg}}>27·IV·2026</div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div style={{fontFamily:mono, fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:accent, display:'flex', alignItems:'center', gap:10}}>
                <span style={{display:'inline-block', width:8, height:8, borderRadius:'50%', background:accent, boxShadow:`0 0 12px ${accent}`}} />
                Subject · Engineer · Fresh Graduate
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.2em', color:muted, lineHeight:1.9, textAlign:'right'}}>
                <div>STATUS</div><div style={{color:accent}}>● SEEKING ROLE</div>
                <div style={{marginTop:14}}>NODE</div><div style={{color:fg}}>NAMAKKAL · TN</div>
                <div style={{marginTop:14}}>NATIONALITY</div><div style={{color:fg}}>INDIAN</div>
              </div>
            </Reveal>
          </div>

          {/* hero: name + portrait */}
          <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:56, alignItems:'center', marginBottom:80}}>
            <Reveal delay={120}>
              <div>
                <h1 style={{
                  fontFamily:mono, fontWeight:300,
                  fontSize:'clamp(48px, 7vw, 112px)', lineHeight:0.95, letterSpacing:'-0.05em',
                  margin:0,
                }}>
                  LEELA<br/>RAMCHARAN<br/>SAI<span style={{color:accent}}>.</span>
                </h1>
                <h2 style={{
                  fontFamily:mono, fontWeight:300, fontSize:'clamp(16px, 1.4vw, 22px)',
                  letterSpacing:'.14em', textTransform:'uppercase',
                  marginTop:24, color:muted,
                }}>AI &amp; Data Science · Java · Python · Problem Solving</h2>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div style={{position:'relative'}}>
                <div style={{
                  position:'relative', aspectRatio:'3/4', width:'100%',
                  border:`1px solid ${line}`, overflow:'hidden', borderRadius:2,
                  background: dark ? '#000' : '#fff',
                }}>
                  <img
                    src="assets/hero-portrait.png"
                    alt="Subject portrait"
                    style={{
                      width:'100%', height:'100%', objectFit:'cover', display:'block',
                      filter: dark ? 'contrast(1.05) saturate(0.95)' : 'contrast(1.02) saturate(0.9) brightness(0.98)',
                    }}
                  />
                  {/* terminal corner ticks */}
                  {[['top','left'],['top','right'],['bottom','left'],['bottom','right']].map(([v,h]) => (
                    <div key={v+h} style={{
                      position:'absolute', [v]:6, [h]:6, width:14, height:14,
                      borderTop: v==='top' ? `1px solid ${accent}` : 'none',
                      borderBottom: v==='bottom' ? `1px solid ${accent}` : 'none',
                      borderLeft: h==='left' ? `1px solid ${accent}` : 'none',
                      borderRight: h==='right' ? `1px solid ${accent}` : 'none',
                    }} />
                  ))}
                  {/* scanline overlay */}
                  <div style={{
                    position:'absolute', inset:0, pointerEvents:'none',
                    backgroundImage:'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)',
                    mixBlendMode:'overlay',
                  }} />
                  {/* meta caption inside frame */}
                  <div style={{
                    position:'absolute', left:16, bottom:14, right:16,
                    display:'flex', justifyContent:'space-between',
                    fontFamily:mono, fontSize:9, letterSpacing:'.22em', textTransform:'uppercase',
                    color:'#f2efe8', textShadow:'0 1px 6px rgba(0,0,0,0.6)',
                  }}>
                    <span style={{color:accent}}>● PORTRAIT · 01</span>
                    <span>22·VII·2005</span>
                  </div>
                </div>
                {/* tag block beneath the frame */}
                <div style={{
                  marginTop:14, display:'flex', justifyContent:'space-between',
                  fontFamily:mono, fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:muted,
                }}>
                  <span>SUBJECT-A · CAPTURED</span>
                  <span style={{color:accent}}>// verified</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ABSTRACT */}
          <div id="abstract" style={{borderTop:`1px solid ${line}`, paddingTop:40, display:'grid', gridTemplateColumns:'120px 1fr', gap:40}}>
            <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.22em', color:muted}}>0.0 ABSTRACT</div>
            <Reveal>
              <p style={{
                margin:0, fontFamily:sans, fontWeight:300,
                fontSize:'clamp(20px, 2vw, 32px)', lineHeight:1.4, letterSpacing:'-0.005em',
                maxWidth:900, textWrap:'balance',
              }}>
                Final-year B.Tech student in Artificial Intelligence &amp; Data Science. Seeking
                an opportunity to build software inside a team that ships — a place to learn,
                explore new technologies, and grow into a steady, careful engineer.
              </p>
            </Reveal>
          </div>

          {/* CTAs */}
          <div style={{marginTop:80, display:'flex', gap:14, alignItems:'center'}}>
            <Reveal delay={200}>
              <a href="#field" style={{
                fontFamily:mono, fontSize:11, letterSpacing:'.2em', textTransform:'uppercase',
                padding:'18px 28px', background:accent, color:'#0a0a0a', textDecoration:'none',
                borderRadius:2, display:'inline-flex', alignItems:'center', gap:12,
              }}>$ open dossier <span>↘</span></a>
            </Reveal>
            <Reveal delay={280}>
              <a href="#contact" style={{
                fontFamily:mono, fontSize:11, letterSpacing:'.2em', textTransform:'uppercase',
                padding:'18px 28px', background:'transparent', color:fg, textDecoration:'none',
                border:`1px solid ${line}`, borderRadius:2,
              }}>$ ping</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 1.0 RECORD (Career objective + principles) ─── */}
      <section id="record" style={{padding:'140px 56px', borderTop:`1px solid ${line}`, position:'relative'}}>
        <div style={{maxWidth:1280, margin:'0 auto'}}>
          <div style={{display:'grid', gridTemplateColumns:'120px 1fr', gap:40}}>
            <Reveal>
              <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.22em', color:muted, position:'sticky', top:120}}>
                1.0<br/>RECORD<br/><span style={{color:accent}}>// outlook</span>
              </div>
            </Reveal>
            <div>
              <Reveal delay={80}>
                <h3 style={{
                  fontFamily:mono, fontWeight:300, margin:0,
                  fontSize:'clamp(36px, 5vw, 76px)', lineHeight:1.05, letterSpacing:'-0.04em', textWrap:'balance',
                }}>
                  Three<br/>working principles<span style={{color:accent}}>.</span>
                </h3>
              </Reveal>

              {[
                { n:'i.', t:'Quick learner.', body:'Picking up new languages, tools, and frameworks fast — and applying them where they actually solve a problem, not just where they look good on a resume.' },
                { n:'ii.', t:'Solve daily.', body:'At least one problem per day on the TUF platform. Steady reps over heroic sprints — problem-solving is a habit, not a stunt.' },
                { n:'iii.', t:'Communicate clearly.', body:'Code is half the job. The other half is explaining it to teammates, reviewers, and people who will read it long after I have moved on.' },
              ].map((p,i) => (
                <Reveal key={i} delay={120 + i*100}>
                  <div style={{display:'grid', gridTemplateColumns:'80px 1fr', gap:32, padding:'48px 0', borderTop: i===0 ? `1px solid ${line}` : 'none', borderBottom:`1px solid ${line}`, marginTop: i===0 ? 80 : 0}}>
                    <div style={{fontFamily:mono, fontSize:14, color:accent, letterSpacing:'.1em'}}>{p.n}</div>
                    <div>
                      <div style={{fontFamily:mono, fontSize:'clamp(22px, 2.2vw, 32px)', fontWeight:400, letterSpacing:'-0.02em', marginBottom:14}}>{p.t}</div>
                      <div style={{fontFamily:sans, fontSize:16, lineHeight:1.65, color:muted, fontWeight:300, maxWidth:600}}>{p.body}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2.0 FIELD (Education + Trainings) ─────────────── */}
      <section id="field" style={{padding:'140px 56px', borderTop:`1px solid ${line}`, position:'relative'}}>
        <div style={{maxWidth:1280, margin:'0 auto'}}>
          <Reveal>
            <div style={{display:'grid', gridTemplateColumns:'120px 1fr', gap:40, marginBottom:80}}>
              <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.22em', color:muted}}>2.0 FIELD<br/><span style={{color:accent}}>// education</span></div>
              <h3 style={{fontFamily:mono, fontWeight:300, fontSize:'clamp(32px, 4vw, 56px)', letterSpacing:'-0.03em', margin:0}}>
                Academic record, in reverse chronology<span style={{color:accent}}>.</span>
              </h3>
            </div>
          </Reveal>

          {/* education table */}
          <div style={{borderTop:`1px solid ${line}`, fontFamily:mono}}>
            <div style={{display:'grid', gridTemplateColumns:'90px 1.5fr 1.6fr 80px 80px', gap:32, padding:'14px 0', fontSize:10, letterSpacing:'.2em', color:muted, textTransform:'uppercase', borderBottom:`1px solid ${line}`}}>
              <div>YR</div><div>COURSE</div><div>INSTITUTION · BOARD</div><div style={{textAlign:'right'}}>SCORE</div><div style={{textAlign:'right'}}>NODE</div>
            </div>
            {[
              ['2026','B.Tech · AI & Data Science','Gnanamani College of Technology · Anna Univ.','77.5%','TN'],
              ['2022','Intermediate · 12th','Sai Chaitanya Junior College · TSBIE','78.7%','TS'],
              ['2020','Matriculation · 10th','ZPHS Gundlapochampally · SSC','100%','TS'],
            ].map((r,i) => (
              <Reveal key={i} delay={i*60}>
                <div style={{
                  display:'grid', gridTemplateColumns:'90px 1.5fr 1.6fr 80px 80px', gap:32,
                  padding:'28px 0', borderBottom:`1px solid ${line}`,
                  fontSize:14, lineHeight:1.5, alignItems:'baseline',
                  transition:'background .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = dark ? 'rgba(158,255,110,0.04)' : 'rgba(10,10,10,0.03)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{color:accent, letterSpacing:'.08em'}}>{r[0]}</div>
                  <div style={{fontSize:18, letterSpacing:'-0.01em'}}>{r[1]}</div>
                  <div style={{color:muted, fontFamily:sans, fontWeight:300}}>{r[2]}</div>
                  <div style={{color:fg, fontSize:14, letterSpacing:'.05em', textAlign:'right'}}>{r[3]}</div>
                  <div style={{color:muted, fontSize:10, letterSpacing:'.2em', textAlign:'right'}}>{r[4]}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* trainings */}
          <div style={{marginTop:96, display:'grid', gridTemplateColumns:'120px 1fr', gap:40}}>
            <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.22em', color:muted}}>2.1 TRAININGS<br/><span style={{color:accent}}>// 2025</span></div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
              {[
                { date:'Sep 2025', title:'Machine Learning', org:'Amypo Technologies · Coimbatore', dur:'10 days' },
                { date:'Jul 2025', title:'Communication Skills', org:'Gnanamani College of Technology · Namakkal', dur:'10 days' },
              ].map((t,i) => (
                <Reveal key={i} delay={i*120}>
                  <div style={{
                    border:`1px solid ${line}`, padding:24, borderRadius:2,
                    background: dark ? 'rgba(242,239,232,0.02)' : 'rgba(10,10,10,0.02)',
                    height:'100%',
                  }}>
                    <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:accent, marginBottom:18}}>● {t.date} · {t.dur}</div>
                    <div style={{fontFamily:mono, fontSize:22, fontWeight:400, letterSpacing:'-0.02em', marginBottom:8}}>{t.title}</div>
                    <div style={{fontFamily:sans, fontSize:14, lineHeight:1.5, color:muted, fontWeight:300}}>{t.org}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* stack chips */}
          <div style={{marginTop:80, display:'grid', gridTemplateColumns:'120px 1fr', gap:40}}>
            <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.22em', color:muted}}>2.2 STACK<br/><span style={{color:accent}}>// today</span></div>
            <div>
              <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:muted, marginBottom:14}}>Languages</div>
              <div style={{display:'flex', flexWrap:'wrap', gap:8, marginBottom:32}}>
                {['Java','Python','HTML','CSS'].map(s => (
                  <span key={s} style={{fontFamily:mono, fontSize:11, letterSpacing:'.12em', padding:'10px 16px', border:`1px solid ${line}`, borderRadius:2, color:fg}}>{s}</span>
                ))}
              </div>
              <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:muted, marginBottom:14}}>Software &amp; Tools</div>
              <div style={{display:'flex', flexWrap:'wrap', gap:8, marginBottom:32}}>
                {['VS Code','GitHub','MS Word'].map(s => (
                  <span key={s} style={{fontFamily:mono, fontSize:11, letterSpacing:'.12em', padding:'10px 16px', border:`1px solid ${line}`, borderRadius:2, color:muted}}>{s}</span>
                ))}
              </div>
              <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:muted, marginBottom:14}}>Areas of Interest</div>
              <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
                {['Problem Solving','Programming','Public Speaking','Continuous Learning'].map(s => (
                  <span key={s} style={{fontFamily:mono, fontSize:11, letterSpacing:'.12em', padding:'10px 16px', border:`1px dashed ${line}`, borderRadius:2, color:muted}}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2.3 LETTERS (Voices / placeholder testimonials) ── */}
      <section style={{padding:'140px 56px', borderTop:`1px solid ${line}`, background: dark ? 'rgba(158,255,110,0.025)' : 'rgba(10,10,10,0.02)'}}>
        <div style={{maxWidth:1280, margin:'0 auto'}}>
          <Reveal>
            <div style={{display:'grid', gridTemplateColumns:'120px 1fr', gap:40, marginBottom:80}}>
              <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.22em', color:muted}}>2.3 VOICES<br/><span style={{color:accent}}>// notes</span></div>
              <h3 style={{fontFamily:mono, fontWeight:300, fontSize:'clamp(32px, 4vw, 56px)', letterSpacing:'-0.03em', margin:0, textWrap:'balance'}}>
                Activity log &amp; notes from the corridor<span style={{color:accent}}>.</span>
              </h3>
            </div>
          </Reveal>

          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:28}}>
            {[
              { q:'Quick learner — picks up new tools fast and is willing to ask the boring questions until the picture is clear.', who:'Trainer Note', role:'ML Training · Amypo', stamp:'25' },
              { q:'Confident on stage. Has presented at multiple national-level paper symposiums and keeps the room with him.', who:'Symposium Record', role:'Public Speaking · Active', stamp:'25' },
              { q:'Solves at least one problem on the TUF platform every day. The streak shows up in the work.', who:'Practice Log', role:'Problem Solving · Daily', stamp:'26' },
            ].map((t,i) => (
              <Reveal key={i} delay={i*120}>
                <figure style={{
                  margin:0, padding:32, border:`1px solid ${line}`, borderRadius:2,
                  background: dark ? 'rgba(10,10,10,0.4)' : 'rgba(242,239,232,0.6)',
                  backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
                  height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between',
                  minHeight:300, position:'relative', overflow:'hidden',
                }}>
                  <div style={{position:'absolute', top:14, right:18, fontFamily:mono, fontSize:10, letterSpacing:'.16em', color:muted}}>NO. {String(i+1).padStart(2,'0')}</div>
                  <blockquote style={{margin:0, fontFamily:mono, fontSize:18, lineHeight:1.5, fontWeight:300, letterSpacing:'-0.01em'}}>
                    <span style={{color:accent}}>"</span>{t.q}<span style={{color:accent}}>"</span>
                  </blockquote>
                  <figcaption style={{marginTop:32, paddingTop:20, borderTop:`1px solid ${line}`, fontFamily:mono, fontSize:11, letterSpacing:'.16em', textTransform:'uppercase', color:muted}}>
                    <div style={{color:fg}}>{t.who}</div>
                    <div style={{marginTop:4}}>{t.role}</div>
                    <div style={{marginTop:4, color:accent}}>// rec'd '{t.stamp}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          {/* personnel profile mini-block */}
          <div style={{marginTop:96, display:'grid', gridTemplateColumns:'120px 1fr', gap:40}}>
            <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.22em', color:muted}}>2.4 PROFILE<br/><span style={{color:accent}}>// personnel</span></div>
            <div style={{
              display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0,
              borderTop:`1px solid ${line}`, borderBottom:`1px solid ${line}`, fontFamily:mono,
            }}>
              {[
                ['DOB','22·07·2005'],
                ['LANGUAGES','EN · TE · HI'],
                ['NATIONALITY','Indian'],
                ['HOBBIES','Cricket · Travel · DSA'],
              ].map(([k,v],i) => (
                <div key={i} style={{padding:'24px 0', borderRight: i<3 ? `1px solid ${line}` : 'none', paddingLeft: i>0 ? 24 : 0}}>
                  <div style={{fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:muted}}>{k}</div>
                  <div style={{fontSize:15, marginTop:8, color:fg}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3.0 CONTACT ──────────────────────────────────── */}
      <section id="contact" style={{padding:'160px 56px 80px', borderTop:`1px solid ${line}`, position:'relative', overflow:'hidden'}}>
        <GrainField opacity={dark ? 0.1 : 0.05} />
        <div style={{maxWidth:1280, margin:'0 auto', position:'relative', zIndex:1}}>
          <div style={{display:'grid', gridTemplateColumns:'120px 1fr', gap:40}}>
            <div style={{fontFamily:mono, fontSize:10, letterSpacing:'.22em', color:muted}}>3.0 CONTACT<br/><span style={{color:accent}}>// open</span></div>
            <div>
              <Reveal>
                <h3 style={{fontFamily:mono, fontWeight:300, fontSize:'clamp(40px, 6.5vw, 110px)', lineHeight:0.95, letterSpacing:'-0.04em', margin:0, textWrap:'balance'}}>
                  $ <span style={{color:accent, animation:'caret 1.1s steps(2) infinite'}}>_</span> let's build something together.
                </h3>
              </Reveal>
              <Reveal delay={200}>
                <div style={{marginTop:60, display:'flex', flexWrap:'wrap', gap:14}}>
                  <a href="mailto:ramcharankadiyam@gmail.com" style={{
                    fontFamily:mono, fontSize:12, letterSpacing:'.18em', textTransform:'uppercase',
                    padding:'22px 30px', background:accent, color:'#0a0a0a', textDecoration:'none', borderRadius:2,
                  }}>ramcharankadiyam@gmail.com</a>
                  <a href="tel:+919494371515" style={{fontFamily:mono, fontSize:12, letterSpacing:'.18em', textTransform:'uppercase', padding:'22px 30px', border:`1px solid ${line}`, color:fg, textDecoration:'none', borderRadius:2}}>+91 94943 71515</a>
                  <a href="#" style={{fontFamily:mono, fontSize:12, letterSpacing:'.18em', textTransform:'uppercase', padding:'22px 30px', border:`1px solid ${line}`, color:fg, textDecoration:'none', borderRadius:2}}>github · @ramcharan</a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <style>{`@keyframes caret { 50% { opacity: 0; } }`}</style>

        <footer style={{maxWidth:1280, margin:'120px auto 0', display:'grid', gridTemplateColumns:'120px 1fr 220px', gap:40, paddingTop:32, borderTop:`1px solid ${line}`, fontFamily:mono, fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:muted}}>
          <span>EOF</span>
          <span>Dossier · 2026·LRSK·01 · rev 01 · Set in JetBrains Mono · {new Date().getFullYear()}</span>
          <span style={{textAlign:'right'}}>↑ return to cover</span>
        </footer>
      </section>
    </div>
  );
}

window.Dossier = Dossier;
