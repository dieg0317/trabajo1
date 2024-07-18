const mongoose = require('mongoose');
const url_db = "mongodb://localhost:27017/mi_base_de_datos"; // Asegúrate de que tu URL de la base de datos sea correcta y completa

mongoose.connect(url_db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conexión exitosa a la base de datos");
})
.catch((error) => {
  console.error("Error al conectar a la base de datos:", error);
});

// Definir el esquema
const esquema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  apepat: {
    type: String,
    required: true
  },
  apemat: {
    type: String,
    required: true
  },
  numerotel: {
    type: Number,
    required: true
  }
});

// Crear el modelo
const Alumno = mongoose.model('Alumno', esquema);
const Maestro = mongoose.model('Maestro', esquema);

// Insertar datos en la colección
Alumno.create({
  name: "Ana",
  apepat: "Salazar",
  apemat: "Montiel",
  numerotel: 1673828
})
.then((doc) => {
  console.log("Documento insertado:", doc);
})
.catch((error) => {
  console.error("Error al insertar documento:", error);
});
