// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  let yearDate = new Date().getFullYear();
  res.status(200).json(
    {
      "AvailableEndpoints": {
        "/api/": "Returns available endpoints and a copyright message."
      },
      "Copyright": ` © ${yearDate} TheFloofCorp.`
    },
  );
}
