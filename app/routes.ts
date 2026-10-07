import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/Home.tsx"),
  route("contact", "routes/contact/Contact.tsx"),
  route("about", "routes/about/About.tsx"),
  route("services", "routes/services/Services.tsx"),
  route("works", "routes/works/Works.tsx"),
  route("testimonies", "routes/testimonies/Testimonies.tsx"),
] satisfies RouteConfig;
