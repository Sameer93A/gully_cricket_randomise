import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/api/*", cors());

app.post("/api/v1/captain", async (c) => {
  console.log("Hello from backend");

  const body = await c.req.json();
  const firstCaptainName = body.firstCaptain;
  const secondCaptainName = body.secondCaptain;
  const playerName = body.playerName;

  // Shuffle the playerName array to randomize player
  playerName.sort(() => Math.random() - 0.5);

  const teams = playerName.slice(0, Math.ceil(playerName.length / 2));
  const remainingPlayers = playerName.slice(Math.ceil(playerName.length / 2));

  return c.json({
    [firstCaptainName]: teams,
    [secondCaptainName]: remainingPlayers,
  });
});

export default app;
