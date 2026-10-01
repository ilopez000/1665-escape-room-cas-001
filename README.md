# Cas 001 · L'empresa del paper · escape room de la sessió 1 del MP 1665

Escape room en línia per a la **sessió 1 de l'AEA1** del mòdul **1665 Digitalització aplicada als sectors productius**
(benvinguda al mòdul i què vol dir digitalitzar una empresa). Fet amb **Astro**. Tot el joc funciona al navegador de
l'alumne: no cal servidor ni base de dades.

## La història

La Sra. Ferrer, gerent de **Distribucions Ferrer**, perd comandes, les factures surten equivocades i els clients es
queixen. «Tenim ordinadors, web i Instagram: ja som digitals», diu tothom. Contracta l'**Agència Dada**, i l'alumnat fa
de detectiu. Recorre sis escenes de l'empresa: a cada una **examina els indicis** (la teoria) i després **resol
l'enigma**. Cada escena dona una lletra de la contrasenya de la caixa forta; amb les sis, s'obre la caixa i es fa
l'informe final per tancar el cas.

## Les escenes

| Escena | Contingut del recurs de la sessió 1 | Enigma |
|---|---|---|
| 01 · Les normes de l'agència | De què va el mòdul, avaluació, normes de joc | 5 preguntes (càlcul de nota, test a partir de 4, nom del fitxer, reserva, IA) |
| 02 · Mites i realitats | Els tòpics sobre digitalitzar | Classificar 10 frases en mite o realitat |
| 03 · Tres graus de canvi | Digitització, digitalització i transformació digital | Classificar 12 exemples dels cinc cicles |
| 04 · La dada que es repeteix | La prova de la dada única, procés d'extrem a extrem | Marcar els 5 passos d'una comanda on es torna a teclejar |
| 05 · L'escala de maduresa | Els cinc nivells de maduresa digital | Ordenar l'escala (amb esglaons falsos) + pista → nivell |
| 06 · Treball de camp | Evidència i opinió, on buscar pistes, triar l'empresa | Fet o opinió + empresa → cicle |
| Caixa forta | Repàs final | Contrasenya (ORIGEN) + 5 preguntes |

Al final surt un **informe del cas** amb el rang, els XP, la credibilitat, les insígnies, el detall per escena i la
llista «Abans de marxar, comprova-ho». L'alumne el pot desar en PDF per lliurar-lo.

## Mecànica de joc

- Cada enigma val **100 XP**. Cada comprovació amb errors en treu 10 i cada pista 30 (mínim 30 per enigma).
- Cada error fa baixar la **credibilitat** del detectiu un 4%. No hi ha «game over».
- A partir del segon intent fallit, el joc mostra l'explicació dels elements que estan malament.
- Les escenes s'obren en ordre. La partida es desa al navegador; es pot tancar i continuar després.
- Una escena ja resolta es pot tornar a fer en mode repàs sense canviar la puntuació.

## Com s'executa al teu ordinador

Cal tenir **Node.js 22 o superior** (https://nodejs.org).

- Doble clic a `executa-escape-room.bat`, o bé
- des d'una terminal: `npm install` i després `npm run dev`

S'obre a `http://localhost:4322` (el de la sessió 2 fa servir el 4321, així es poden tenir tots dos oberts).
Mentre es juga, la finestra negra ha de quedar oberta.

## Com canviar el contingut

**Tot el text del joc és a `src/data/joc.ts`**: la història, els indicis de cada escena, els enigmes, les pistes, les
preguntes finals, els rangs i la checklist.

## Com publicar-lo en línia

Està preparat per a **Cloudflare Pages**: projecte connectat a aquest repositori, preset **Astro**, ordre
`npm run build`, carpeta `dist`. La versió de Node (22) la llegeix del fitxer `.node-version`. Cada cop que es puja un
canvi al repositori, la web es torna a publicar sola.

---

Ignacio López Aylagas · Prat FP · MP 1665 · curs 2026-27
