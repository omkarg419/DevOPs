import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.json({
		message: "Server is Healthy v4.5",
		status: "GitHub Actions is working fine with Docker SSL🐬",
	});
});

const PORT = process.env.PORT ?? 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
