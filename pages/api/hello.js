// pages/api/hello.js

export default function handler(req, res) {
  // Manejar la solicitud GET
  if (req.method === "GET") {
    // Responder con un mensaje JSON
    res.status(200).json({ message: "Hola, mundo!" })
  }
}
