# VN 2.0 Launcher – Pages/Teams-Trennung

## GitHub Pages
Nur diese kleinen Dateien veröffentlichen:
- `index.html`
- `launcher.js`
- `sw.js`
- `.nojekyll`

**Nicht** auf GitHub Pages veröffentlichen:
- `version.json` des VN-Datenstands
- `*.enc` Datenpakete
- Zugangsschlüssel

## Teams / SharePoint
In einen lokal synchronisierten Ordner legen:
- `version.json`
- die in `version.json.file` genannte versionsspezifische `.enc`-Datei
- optional `PRUEFSUMMEN.txt`

Der Anwender gibt diesen lokalen Sync-Ordner im Launcher einmal frei.

## Update-Sicherheit
Eine neue Version wird nur aktiviert, wenn:
1. `version.json` gelesen werden kann,
2. SHA-256 der `.enc`-Datei exakt übereinstimmt,
3. AES-GCM-Entschlüsselung erfolgreich ist,
4. das tar.gz extrahiert werden kann,
5. `index.html` im Runtime-Cache vorhanden ist.

Bis dahin bleibt die zuletzt erfolgreich geprüfte Runtime aktiv.

## Zugangsschlüssel
Der Schlüssel ist Base64URL. Der Launcher normalisiert `-`/`_` und fehlendes Padding korrekt.
Nach erfolgreicher Einrichtung versucht der Launcher einen nicht exportierbaren WebCrypto-AES-Schlüssel in IndexedDB zu speichern.
