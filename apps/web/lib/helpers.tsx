import {
  IconAutomation,
  IconDeviceIpadHorizontalCode,
} from "@tabler/icons-react";

export const IProyectType = ({
  className,
  type,
}: {
  className: string;
  type: string;
}) =>
  type === "automation" ? (
    <IconAutomation className={className} />
  ) : (
    <IconDeviceIpadHorizontalCode className={className} />
  );
