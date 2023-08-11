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
			return "https://wiki.theripper93.com" + r.route;
		});
		//remove duplicates
		results = [...new Set(results)];
		res.status(200).json({ status: 'success', results });
	} else {
		res.status(405).json({ status: 'error', error: 'Method not allowed' });
	}
}