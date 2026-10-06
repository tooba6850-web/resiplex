import { createContext, useContext, useEffect, useMemo, useState } from "react";

const KEY = "resiplex:favorites";

const FavoritesContext = createContext(null);

function load() {
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(load());
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(favorites));
    } catch {
      /* storage unavailable */
    }
  }, [favorites]);

  const value = useMemo(
    () => ({
      favorites,
      count: favorites.length,
      isFavorite: (slug) => favorites.includes(slug),
      toggle: (slug) =>
        setFavorites((prev) =>
          prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
        ),
      clear: () => setFavorites([]),
    }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}