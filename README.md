# 🚛 BaySync

**App de estado de muelles de carga en tiempo real.**
El almacén marca qué puertas están libres/ocupadas y Bo lo ve al instante desde BALIE.

## 📱 Dos URLs, un mismo sistema

| URL | Quién la usa | Qué hace |
|---|---|---|
| `index.html` | 👷 Persona en almacén | Toca puertas → marca libre/ocupado → ENVIAR |
| `balie.html` | 👨‍💻 Bo (BALIE) | Ve estado en vivo + SOLICITAR actualización |

## 🌐 Idiomas

🇪🇸 Español · 🇬🇧 English · 🇳🇱 Nederlands
Selector de idioma en el header de ambas apps.

## 📋 Características

- 9 puertas (18–26) en grid 3×3
- Cada puerta: 🟢 Libre · 🔴 Ocupado · 🟡 Parcial
- Tiempo real con Firebase (o demo local con BroadcastChannel)
- Botón ENVIAR con timestamp del último envío
- Botón SOLICITAR → suena + vibra en móvil del almacén
- Auto-sync cada 60s
- Funciona offline (cola de cambios)
- Selector de idioma (ES/EN/NL)
- Logos DHL + Intergamma + créditos

## 🔧 Sin Firebase (demo local)

Abre **`index.html`** y **`balie.html`** en el mismo navegador (pestañas distintas).
Funciona con localStorage + BroadcastChannel. Ideal para probar.

## ☁️ Con Firebase (producción cruzada)

Para que funcione entre dispositivos diferentes (móvil del almacén ↔ tu PC):

1. Ve a [console.firebase.google.com](https://console.firebase.google.com)
2. Crea proyecto → Activa **Realtime Database**
3. Reglas → pon en modo test:
   ```json
   { "rules": { ".read": true, ".write": true } }
   ```
4. Agrega app web → copia la config
5. Pega en `firebase-config.js`
6. Sube a GitHub Pages

## 🚀 GitHub Pages

```bash
git init
git add .
git commit -m "BaySync v1"
git remote add origin https://github.com/tu-usuario/baysync.git
git push -u origin main
```

Repo → Settings → Pages → Source: main branch, root folder.

## 📐 Puertas

Muelles 18, 19, 20, 21, 22, 23, 24, 25, 26.

---

*Creado por Boris Antequera*
