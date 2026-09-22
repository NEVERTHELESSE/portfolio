import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/Home.tsx"),
  route("contact", "routes/contact/Contact.tsx"),
] satisfies RouteConfig;
