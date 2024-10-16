import { useLocation } from "@remix-run/react";

export default function Any() {
  const { pathname } = useLocation();

  <p>{pathname}</p>;
}
