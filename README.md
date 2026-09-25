REHA Vertragsnavigator v19.4 – Secure Pages Shell

Dieses öffentliche Repository enthält ausschließlich die technische Startoberfläche.
Es enthält keine Vertrags-, Preis-, Kassen-, IK- oder Vertragsdokumentdaten.

Automatische Updates ohne Graph / Entra:
1. Der Teams-/SharePoint-Ordner „Vertragsnavigator“ wird über OneDrive/Teams lokal auf dem Windows-PC synchronisiert.
2. Im Ordner liegen immer:
   - REHA-Vertragsmanager-current.enc
   - version.json
3. Der Anwender verbindet diesen lokalen Ordner einmalig über „Teams-Datenordner verbinden“.
4. Der Ordnerzugriff wird browserseitig gespeichert. Je nach Browser-Sicherheitsstatus kann die Freigabe nach einem Neustart erneut bestätigt werden müssen.
5. Der Zugangsschlüssel wird einmalig eingegeben. Gespeichert wird nur ein nicht exportierbarer CryptoKey im Browser, nicht der Klartext-Schlüssel.
6. Beim Start und vor dem Öffnen des Vertragsmanagers wird version.json geprüft.
7. Ist ein neuerer Datenstand vorhanden, wird REHA-Vertragsmanager-current.enc lokal gelesen, per SHA-256 geprüft, entschlüsselt und in den Produktiv-Cache übernommen.
8. Der bisherige Datenstand bleibt während Download/Prüfung/Entschlüsselung bestehen. Erst nach erfolgreicher Vorbereitung wird der neue Stand in den Produktiv-Cache übertragen.
9. Bei fehlerhafter Prüfsumme, falschem Schlüssel oder unvollständig synchronisierter Datei bleibt der bisherige produktive Datenstand erhalten.

Wichtig für neue Releases im Teams-Ordner:
- Zuerst REHA-Vertragsmanager-current.enc vollständig ersetzen/synchronisieren lassen.
- Danach version.json als letzten Schritt aktualisieren.
- So erkennen Clients den neuen Stand erst, wenn das Paket bereits vollständig vorliegt.

version.json Schema:
{
  "schema": 1,
  "version": "v19.4",
  "date": "2026-09-25",
  "file": "REHA-Vertragsmanager-current.enc",
  "sha256": "4f14c85d5b69bd92a6fa15d73d551d6ae36f2a6c1655fd2c37095443a6fbdefa"
}

Fallback:
Die Startseite unterstützt weiterhin die manuelle Auswahl einer .enc-Datei.

Sicherheitsregeln:
- Kein Zugangsschlüssel im öffentlichen Repository.
- Keine Vertrags- oder Preisdokumente im öffentlichen Repository.
- Automatische Ordnerupdates benötigen einen aktuellen Chromium-Browser (Edge oder Chrome).
- Der lokale Teams-Ordner muss für den Benutzer bereits über die bestehende Firmenumgebung synchronisiert sein.

Fallback-Datenpaket-SHA256: 4f14c85d5b69bd92a6fa15d73d551d6ae36f2a6c1655fd2c37095443a6fbdefa
