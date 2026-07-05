# 🚛 BaySync

Control de muelles de carga en tiempo real.

**App almacén:** `index.html` — El del almacén marca el estado de las puertas y envía.  
**Panel BALIE:** `balie.html` — Tú ves el estado en tiempo real y puedes solicitar actualización.

## 🌐 En vivo

- **App almacén:** https://sacharunaaa-max.github.io/baysync/
- **Panel BALIE:** https://sacharunaaa-max.github.io/baysync/balie.html

## 🧠 Cómo funciona

Ambas apps se conectan a la misma base de datos en tiempo real (Firebase Realtime Database vía REST API).

1. El almacén abre `index.html`, toca las puertas (🟢 Libre → 🔴 Ocupado → 🟡 Parcial), pulsa **ENVIAR**.
2. El panel BALIE se actualiza solo al instante.
3. Tú puedes tocar **SOLICITAR** y al almacén le salta un aviso sonoro + visual.

## 🛠️ Para desarrollo local

Las apps funcionan directamente desde GitHub Pages. No necesitas instalar nada.

## 📦 Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | App del almacén |
| `balie.html` | Panel BALIE |
| `dhl-logo.svg` | Logo DHL |
| `intergamma-logo.svg` | Logo Intergamma |
| `mockup.svg` | Diseño conceptual |

**Autor: Boris Antequera**
