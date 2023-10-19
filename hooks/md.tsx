import { useEffect, useState } from "react";

export const useMdContent = (url: string): string => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {}, [url]);

  return content;
};
