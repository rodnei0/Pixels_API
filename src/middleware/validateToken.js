import db from "../db.js";

export default async function validateToken(req, res, next) {
  const authorization = req.headers.authorization;
  console.log(authorization);
  const token = authorization?.replace("Bearer ", "");
  console.log(token+"token")
  if (!token) {
    console.log("1")
    return res.sendStatus(401);
  }

  const session = await db.collection("sessions").findOne({ token });
  if (!session) {
    console.log("2")
    return res.sendStatus(401);
  }

  const user = await db.collection("users").findOne({ _id: session.userId });
  if (!user) {
    // console.log(session)
    console.log("3")

    return res.sendStatus(401);
  }

  res.locals.user = user;
  next();
}