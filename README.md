# ⚡ Blitzrechnen

**Mental math against the clock.** A fast web app for training arithmetic, functions, calculus and linear algebra, plus *Coin Drop*, a puzzle where you draw functions to steer falling balls through coins. Works offline, installs like an app, English and German.

**▶ Play:** `https://the00eht.github.io/Mental-Math/`

## Disciplines

| Group | Disciplines |
|---|---|
| Arithmetic | Addition · Subtraction · Multiplication · Division |
| Functions | Parabola zeros · Parabola vertex · Zero of a line · Match the graph (lines, parabolas, sin, cos, \|x\|, √x, eˣ, hyperbolas) |
| Calculus | Definite integrals · Partial derivatives · Gradient · Divergence · Curl · Linear ODEs (roots of the characteristic polynomial, incl. complex) |
| Linear algebra | 2×2 determinant · 2×2 inverse (with 1/det prefactor) · Matrix × vector |

All questions are built to be solvable in your head.

## Modes

- **Timed rounds** of 30, 60, 90 or 120 seconds, or **Endless** with a streak counter
- **Mixed mode:** pick any categories or whole groups, questions come in random order
- **Coin Drop:** type up to six functions (with an optional x range) before three balls drop from one source. Every level is generated from a hidden reference solution and tells you how many functions it needs. Score: 100 per coin, +200 for all, −50 per function
- Three levels: Easy, Normal, Hard

## Features

- Statistics per discipline, filterable by level (Easy, Normal, Hard, All): accuracy, average time, best correct-per-minute, longest streak, recent rounds
- Works offline after the first visit (service worker) and installs to the home screen
- Backup: save and load your statistics as a file (Settings → Your data)
- On-screen keypad on phones with ±, fractions and complex numbers; full keyboard play on desktop
- Light and dark theme, no tracking, no build step, no dependencies

## Install on your phone

- **iPhone / iPad (Safari):** Share → *Add to Home Screen*
- **Android (Chrome):** menu → *Install app*, or the Install button in Settings

Installed, the app starts without internet and your statistics stay on the device.

## Deploy on GitHub Pages

1. Push these files to a repository named `blitzrechnen`
2. **Settings → Pages → Deploy from a branch**, branch `main`, folder `/ (root)` → **Save**
3. The app is live at `https://<your-username>.github.io/blitzrechnen/` after about a minute

## Files

```
index.html             the whole app (HTML, CSS, JS)
manifest.webmanifest   app name, icons, colors for installing
sw.js                  service worker for offline use
icons/                 app icons
```

## Deutsch

Kopfrechnen gegen die Uhr: Grundrechnen, Funktionen, Analysis und lineare Algebra in Zeitrunden, im Endlos- oder Mix-Modus, dazu das Knobelspiel *Münzfall*. Die Statistik ist nach Disziplinen getrennt, lässt sich nach Stufe filtern und wird nur auf dem Gerät gespeichert. Ein Backup kannst du unter Einstellungen → Deine Daten speichern und laden. Die App funktioniert nach dem ersten Besuch offline. Auf dem iPhone über Teilen → *Zum Home-Bildschirm* installieren. Sprache unter Einstellungen auf Deutsch umstellen.

## License

MIT
