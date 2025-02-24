"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button disabled>
        <IconSunFilled />
      </Button>
    );
  }

  return (
    <div>
      {theme === "light" ? (
        <Button onClick={() => setTheme("dark")}>
          <IconMoonFilled />
        </Button>
      ) : (
        <Button onClick={() => setTheme("light")}>
          <IconSunFilled />
        </Button>
      )}
    </div>
  );
}
