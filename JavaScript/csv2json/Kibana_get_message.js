result = await fetch // (Copy fetch part from Chrome Devtool Network sheet)
payload = await result.json()
hits = payload.responses[0].hits

for (let i in hits.hits) {
	console.log(hits.hits[i]._source.message.match(/acct.*?BR/)[0])
}


// right click
// Save as