# ⚡ Blitzrechnen

**Mental math against the clock.** A fast web app for training arithmetic, functions, calculus and linear algebra, plus *Coin Drop*, a puzzle where you draw functions to steer falling balls through coins. Statistics show how you improve, a training mode targets your weak spots. Works offline, installs like an app, English and German.

### ▶ [Play now](https://the00eht.github.io/Mental-Math/)

## Disciplines

| Group | Disciplines |
|---|---|
| Arithmetic | Addition · Subtraction · Multiplication · Division · Percentages · Fractions · Squares & roots · Powers · Estimating |
| Functions | Parabola zeros · Parabola vertex · Zero of a line · Match the graph (lines, parabolas, sin, cos, \|x\|, √x, eˣ, hyperbolas) |
| Calculus | Definite integrals · Partial derivatives · Gradient · Divergence · Curl · Linear ODEs (roots of the characteristic polynomial, incl. complex) · Taylor coefficients |
| Linear algebra | Dot product · Cross product · 2×2 determinant · 2×2 inverse (with 1/det prefactor) · Matrix × vector · Matrix × matrix · 2×2 eigenvalues |

All questions are built to be solvable in your head. Three levels: Easy, Normal, Hard.

## Game modes

- **Countdown:** 30, 60, 90, 120 seconds or any length from 10 to 600 s
- **Endless:** no timer, with a streak counter
- **Time bonus:** start with 30 s, +3 s for every correct answer, −5 s for every wrong one
- **Sprint:** 20 correct answers as fast as possible, best time is the record
- **Mixed mode:** pick any categories or whole groups
- **Weakness training:** practices the disciplines with your lowest accuracy and repeats questions you got wrong
- **Coin Drop:** type up to six functions (with an optional x range) before three balls drop from one source. Levels are generated from a hidden reference solution and tell you how many functions they need. Some levels have rules (lines only, parabolas only, sin/cos only), obstacles or moving coins. A *Level of the day* is the same for everyone. Score: 100 per coin, +200 for all, −50 per function

## Statistics

Filterable by level (Easy, Normal, Hard, All):

- **Progress chart** per discipline: correct per minute or average time per round, with a trend line and a sentence like "You're 18 % faster than two weeks ago"
- **Trend arrows** in the overview: last 7 days compared with the time before
- **Accuracy bar chart**, sorted from weakest to strongest
- **Error analysis:** which mistakes you make, for example the 7 times table, sign errors, ad + bc instead of ad − bc, or a wrong prefactor in the inverse
- **Answer time histogram** with median and share of slow answers
- **Records** for every mode, Coin Drop results and recent rounds

## Features

- Works offline after the first visit (service worker) and installs to the home screen
- Backup: save and load your statistics as a file (Settings → Your data)
- Appearance: Auto, Light or Dark, plus five color themes
- On-screen keypad on phones with ±, fractions and complex numbers; full keyboard play on desktop
- No tracking, no build step, no dependencies

## Install on your phone

- **iPhone / iPad (Safari):** Share → *Add to Home Screen*
- **Android (Chrome):** menu → *Install app*, or the Install button in Settings

Installed, the app starts without internet and your statistics stay on the device.

**Wrong or missing icon on iPhone?** iOS saves the icon at the moment you add the app. After an update, remove the app from the Home Screen, close the tab, open the site again in Safari and add it again.

## Deploy on GitHub Pages

1. Upload all files to a repository named `blitzrechnen` (there are no subfolders, everything sits next to `index.html`)
2. **Settings → Pages → Deploy from a branch**, branch `main`, folder `/ (root)` → **Save**
3. The app is live at `https://<your-username>.github.io/blitzrechnen/` after about a minute

## Files

```
index.html             the whole app (HTML, CSS, JS)
manifest.webmanifest   app name, icons, colors for installing
sw.js                  service worker for offline use
icon.svg               browser tab icon
icon-192.png           app icon (install, Android)
icon-512.png           app icon (install, Android)
apple-touch-icon.png   iPhone / iPad home screen icon
```

## Deutsch

Kopfrechnen gegen die Uhr: 27 Disziplinen von Grundrechnen und Prozent über Funktionen, Integrale, Taylor-Koeffizienten und DGL bis zu Eigenwerten und Matrixprodukten. Spielmodi: Countdown mit frei wählbarer Länge, Endlos, Zeitbonus, Sprint, Mix und „Schwächen trainieren“, dazu das Knobelspiel *Münzfall* mit Regel-Leveln, Hindernissen, bewegten Münzen und Level des Tages. Die Statistik zeigt deinen Verlauf mit Trendlinie, Trendpfeile, eine sortierte Trefferquote, eine Fehleranalyse und die Verteilung deiner Antwortzeiten, getrennt nach Stufe. Alles wird nur auf dem Gerät gespeichert, ein Backup kannst du unter Einstellungen → Deine Daten speichern und laden. Farbthema und Hell/Dunkel sind wählbar. Die App funktioniert nach dem ersten Besuch offline. Auf dem iPhone über Teilen → *Zum Home-Bildschirm* installieren. Sprache unter Einstellungen auf Deutsch umstellen.

## License

MIT
