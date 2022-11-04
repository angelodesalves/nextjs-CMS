export default async function handler(req, res) {
	const previousPage = req.headers.referer;

	if (req.preview) {
		res.clearPreviewData();
	} else {
		res.setPreviewData({});
	}
	
	if (req.query.password !== '0000') {
		return res.status(401).json({ message: 'Invalid Password' })
	}

	res.writeHead(307, { Location: previousPage });
	res.end();
}

//	https://nextjs.org/docs/advanced-features/preview-mode