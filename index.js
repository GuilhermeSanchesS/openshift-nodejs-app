const express = require("express");
const app = express();

app.get("/", (req, res) => {
	const html = `<h1>Bem-vindo SDC - OpenShift NodeJS App</h1>
	<p>Meu nome: ${process.env.MY_POD_NAME}</p>
	<p>Meu nome: ${process.env.MY_APPLICATION_NAME}</p>`;

	res.status(200).send(html);
});


