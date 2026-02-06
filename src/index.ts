import { Hono } from "hono";
import { healthRoute, messageRoute, siteRoute, rootRoute } from './routes'

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.route("/", rootRoute)
app.route("/site", siteRoute)
app.route("/health", healthRoute);
app.route("/message", messageRoute)

export default app;
