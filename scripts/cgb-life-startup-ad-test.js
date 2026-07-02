const headers = $request.headers || {};
const operationType =
  headers["operation-type"] ||
  headers["Operation-Type"] ||
  headers["operation-Type"] ||
  headers["Operation-type"] ||
  "";

if (operationType === "alipay.client.getUnionResource") {
  $done({
    response: {
      status: 204,
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      },
      body: ""
    }
  });
} else {
  $done({});
}
