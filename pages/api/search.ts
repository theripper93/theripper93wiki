// @ts-nocheck

import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';
import { indexes, doSearch } from './_initSearch';


const cors = Cors({
	methods: ['GET', 'HEAD', 'POST', 'OPTIONS'],
});


function runMiddleware(
	req: NextApiRequest,
	res: NextApiResponse,
	fn: Function
) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result: any) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await runMiddleware(req, res, cors);
	const { query } = req.query;

	if (req.method === 'GET') {
		if(!query) return res.status(400).json({ status: 'error', error: 'Query is required' });
		//search inside documentation using nextra
		let results = doSearch(query).map((r) => {
			return {
				route: "https://wiki.theripper93.com" + r.route,
				title: r.title,
				content: r.content,
			}
		});
		//remove duplicates
		const finalResults = [];
		for (const result of results) { 
			if (!finalResults.find(r => r.route === result.route)) {
				finalResults.push(result);
			}
			if(finalResults.length >= 5) break;
		}
		res.status(200).json({ status: 'success', results: finalResults });
	} else {
		res.status(405).json({ status: 'error', error: 'Method not allowed' });
	}
}