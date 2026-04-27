// app.jsx — wires Tweaks + DesignCanvas with the three directions.

const { TweaksPanel, useTweaks, TweakSection, TweakRadio } = window;

function App() {
  const [tweaks, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const dark = tweaks.theme !== 'light';

  // artboard size — desktop hi-fi
  const W = 1440, H = 900;

  return (
    <>
      <DesignCanvas>
        <DCSection
          id="portfolio"
          title="Portfolio · 3 directions"
          subtitle="Editorial noir · technical-luxury · kinetic cinema. Same content, three voices."
        >
          <DCArtboard id="monolith" label="01 · Monolith" width={W} height={H}>
            <Monolith dark={dark} />
          </DCArtboard>
          <DCArtboard id="dossier" label="02 · Dossier" width={W} height={H}>
            <Dossier dark={dark} />
          </DCArtboard>
          <DCArtboard id="aperture" label="03 · Aperture" width={W} height={H}>
            <Aperture dark={dark} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakRadio
            label="Mode"
            value={tweaks.theme}
            onChange={v => setTweak('theme', v)}
            options={[
              { value: 'dark', label: 'Dark' },
              { value: 'light', label: 'Light' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Note">
          <div style={{fontSize:12, lineHeight:1.5, color:'#888'}}>
            Each direction has its own ambient motion, accent color, and editorial voice. Hover an artboard's expand icon to view it fullscreen.
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
