import { useEffect } from "react";
import { site } from "../data/site";

export function useDocumentTitle(title) {
  useEffect(() => {
    const nextTitle = `${site.name} | ${title}`;

    if (document.title !== nextTitle) {
      document.title = nextTitle;
    }
  }, [title]);
}
