interface IReq {
		email: string,
		password: string
}

export async function post(resource: string, data: IReq ) {
	const response = await fetch(`http://localhost:3000/${resource}`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json",
			"Access-Control-Allow-Origin": "*"
		},
	});

	return response;
}