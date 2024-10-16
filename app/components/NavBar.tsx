import { Tabs, Tab } from "@nextui-org/react";
import { useLocation } from "@remix-run/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <nav aria-label="Navigation">
      <Tabs selectedKey={pathname} aria-label="Locations" variant="bordered">
        <Tab key="/aqi/here" href="/aqi/here" title="Your Location 📍" />
        <Tab key="/aqi/nyc" href="/aqi/nyc" title="NYC, USA" />
        <Tab
          key="/aqi/new_delhi"
          href="/aqi/new_delhi"
          title="New Delhi, India"
        />
        <Tab
          key="/aqi/cape_town"
          href="/aqi/cape_town"
          title="Cape Town, South Africa"
        />
      </Tabs>
    </nav>
  );
}
