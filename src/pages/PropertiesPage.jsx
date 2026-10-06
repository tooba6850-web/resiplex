import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./PropertiesPage.css";
import PageHeader from "../components/PageHeader";
import FilterPanel from "../components/FilterPanel";
import { PropertyGrid, PropertyList } from "../components/PropertyGrid";
import Pagination from "../components/Pagination";
import { IconGrid, IconList, IconSearch, IconHome } from "../components/icons";
import { PROPERTIES, EMPTY_FILTERS, filterProperties, SORT_OPTIONS } from "../data/properties";
import { HERO_BACKDROP } from "../data/site";
import Button from "../components/Button";

const PAGE_SIZE = 9;

function toParams(filters) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([k, v]) => {
    if (v) params.set(k, v);
  });
  return params;
}

function fromParams(searchParams) {
  return {
    keyword: searchParams.get("keyword") || "",
    location: searchParams.get("location") || "",
    type: searchParams.get("type") || "",
    status: searchParams.get("status") || "",
    price: searchParams.get("price") || "",
    beds: searchParams.get("beds") || "",
    baths: searchParams.get("baths") || "",
    sort: searchParams.get("sort") || EMPTY_FILTERS.sort,
  };
}

export default function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo(() => fromParams(searchParams), [searchParams]);
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [searchParams]);

  const results = useMemo(() => filterProperties(PROPERTIES, filters), [filters]);
  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const pageItems = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const updateFilters = (next) => {
    setSearchParams(toParams(next), { replace: true });
  };

  const clearAll = () => {
    setSearchParams(toParams({ ...EMPTY_FILTERS, sort: filters.sort }), { replace: true });
  };

  return (
    <div className="page">
      <PageHeader
        image={HERO_BACKDROP[2]}
        eyebrow="Explore Properties"
        title={
          <>
            Properties<em>.</em>
          </>
        }
        lead="Search the most complete real estate listings online. Find homes for sale, real estate, apartments, and houses for rent."
      />

      <section className="section props">
        <div className="container">
          <FilterPanel filters={filters} onChange={updateFilters} count={results.length} />

          <div className="props__toolbar">
            <p className="props__count">
              {results.length} {results.length === 1 ? "residence" : "residences"}
              {filters.location ? (
                <>
                  {" "}
                  in{" "}
                  <b>{LOC_BY[filters.location] || cap(filters.location)}</b>
                </>
              ) : null}
            </p>
            <div className="props__controls">
              <label className="props__sort">
                <span className="props__sort-label">Sort</span>
                <select
                  aria-label="Sort listings"
                  value={filters.sort}
                  onChange={(e) => updateFilters({ ...filters, sort: e.target.value })}
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="props__view" role="group" aria-label="View layout">
                <button
                  type="button"
                  className={`props__view-btn ${view === "grid" ? "is-active" : ""}`.trim()}
                  aria-label="Grid view"
                  aria-pressed={view === "grid"}
                  onClick={() => setView("grid")}
                >
                  <IconGrid />
                </button>
                <button
                  type="button"
                  className={`props__view-btn ${view === "list" ? "is-active" : ""}`.trim()}
                  aria-label="List view"
                  aria-pressed={view === "list"}
                  onClick={() => setView("list")}
                >
                  <IconList />
                </button>
              </div>
            </div>
          </div>

          {results.length === 0 ? (
            <div className="props__empty">
              <span className="props__empty-icon">
                <IconSearch />
              </span>
              <h3>No residences match your search</h3>
              <p>
                Try widening your budget, removing a filter, or exploring a
                different city.
              </p>
              <div className="props__empty-actions">
                <Button variant="gold" onClick={clearAll}>
                  Clear all filters
                </Button>
                <Button variant="outline" to="/locations">
                  Browse locations
                </Button>
              </div>
            </div>
          ) : view === "grid" ? (
            <PropertyGrid key={`${page}-${filters.sort}`} properties={pageItems} />
          ) : (
            <PropertyList key={`${page}-${filters.sort}`} properties={pageItems} />
          )}

          <Pagination page={page} totalPages={totalPages} onChange={setPage} />

          <div className="props__cta">
            <span className="props__cta-icon">
              <IconHome />
            </span>
            <p>
              Selling? Add your residence to the portfolio.
            </p>
            <Button to="/list-property" variant="outline" size="sm">
              List your property
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const LOC_BY = {
  dubai: "Dubai",
  karachi: "Karachi",
  london: "London",
  "new-york": "New York",
  miami: "Miami",
  toronto: "Toronto",
};

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}