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
	const { query, title } = req.query;

	if (req.method === 'GET') {
		if(!query) return res.status(400).json({ status: 'error', error: 'Query is required' });
		//search inside documentation using nextra

		const results = [];

		if (title) {
			const titleResults = doSearch(title).map((r) => {
				return {
					route: "https://wiki.theripper93.com" + r.route,
					title: r.title,
					content: r.content,
				}
			});
			const finalTitleResults = [];
			for (const result of titleResults) {
				if (!finalTitleResults.find(r => r.route === result.route)) {
					finalTitleResults.push(result);
				}
				if (finalTitleResults.length >= 3) break;
			}
			results.push(finalTitleResults);
		}

		if (query) {
			const queryResults = doSearch(query).map((r) => {
				return {
					route: "https://wiki.theripper93.com" + r.route,
					title: r.title,
					content: r.content,
				}
			});
			const finalQueryResults = [];
			for (const result of queryResults) {
				if (!finalQueryResults.find(r => r.route === result.route)) {
					finalQueryResults.push(result);
				}
				if (finalQueryResults.length >= 2) break;
			}
			results.push(finalQueryResults);
		}
		res.status(200).json({ status: 'success', results });
	} else {
		res.status(405).json({ status: 'error', error: 'Method not allowed' });
	}
}