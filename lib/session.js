const { withIronSession } = require("next-iron-session");

export const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: "theSession",
  sessionOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
export function withSession(handler) {
  return withIronSession(handler, sessionOptions);
}
