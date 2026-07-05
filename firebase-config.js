// ============================================================
//  BAYSYNC — Configuración de Firebase
//  ============================================================
//  Para activar la sincronización en tiempo real entre
//  el almacén y BALIE, necesitas un proyecto Firebase.
//
//  Instrucciones:
//    1. Ve a https://console.firebase.google.com
//    2. Crea un proyecto (nombre: "baysync" o el que quieras)
//    3. Activa "Realtime Database" → Create Database
//    4. Reglas de seguridad → pon en modo "test" (abierto):
//       {
//         "rules": {
//           ".read": true,
//           ".write": true
//         }
//       }
//    5. Ve a ⚙️ → Configuración del proyecto → General
//       → "Tus apps" → Agregar app → Web
//    6. Copia el objeto firebaseConfig que te da
//    7. Pega aquí abajo, reemplazando los valores
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXX",
  authDomain: "tu-proyecto.firebaseapp.com",
  databaseURL: "https://tu-proyecto-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
