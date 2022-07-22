// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let yearDate = new Date().getFullYear();
  res.status(200).json(
    {0: "Nice try lol.",
    1: ` © ${yearDate} TheFloofCorp.`},
  );
}
