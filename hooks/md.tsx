import { useEffect, useState } from "react";
import { getMdContent } from "~utils/md";

export const useMdContent = (url: string): string => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    getMdContent(url)
      .then((res) => {
        setContent(res);
      })
      .catch((err) => {
        setContent("");
      });
  }, [url]);

  return content;
};
