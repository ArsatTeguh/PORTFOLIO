import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatches = (event) => {
      setMatches(event.matches);
    };

    // Inisialisasi nilai awal matches
    setMatches(media.matches);

    // Tambahkan event listener pada perubahan media query
    media.addEventListener("change", updateMatches);

    return () => {
      // Hapus event listener ketika komponen unmount
      media.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return { matches };
}
