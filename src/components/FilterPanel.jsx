import "./FilterPanel.css";
import { Field, Input, Select } from "./Field";
import {
  LOCATION_OPTIONS,
  TYPE_OPTIONS,
  STATUS_OPTIONS,
  PRICE_OPTIONS,
  BED_OPTIONS,
  BATH_OPTIONS,
} from "../data/properties";
import { IconSearch, IconClose } from "./icons";

export default function FilterPanel({ filters, onChange, count }) {
  const set = (key, value) => onChange({ ...filters, [key]: value });
  const hasActive = Object.entries(filters).some(
    ([k, v]) => k !== "sort" && k !== "keyword" && v !== ""
  );

  return (
    <div className="filters">
      <div className="filters__grid">
        <Field label="Keyword" htmlFor="f-keyword" className="filters__keyword">
          <div className="filters__search">
            <IconSearch />
            <Input
              id="f-keyword"
              type="search"
              placeholder="Address, area or type"
              aria-label="Search keyword"
              value={filters.keyword}
              onChange={(e) => set("keyword", e.target.value)}
            />
          </div>
        </Field>

        <Field label="Location" htmlFor="f-location">
          <Select
            id="f-location"
            value={filters.location}
            onChange={(e) => set("location", e.target.value)}
          >
            {LOCATION_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Type" htmlFor="f-type">
          <Select id="f-type" value={filters.type} onChange={(e) => set("type", e.target.value)}>
            {TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Status" htmlFor="f-status">
          <Select id="f-status" value={filters.status} onChange={(e) => set("status", e.target.value)}>
            {STATUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Budget" htmlFor="f-price">
          <Select id="f-price" value={filters.price} onChange={(e) => set("price", e.target.value)}>
            {PRICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Bedrooms" htmlFor="f-beds">
          <Select id="f-beds" value={filters.beds} onChange={(e) => set("beds", e.target.value)}>
            {BED_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Bathrooms" htmlFor="f-baths">
          <Select id="f-baths" value={filters.baths} onChange={(e) => set("baths", e.target.value)}>
            {BATH_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </Field>

        <div className="filters__actions">
          <p className="filters__count">
            {count} {count === 1 ? "Result" : "Results"}
          </p>
          {hasActive ? (
            <button
              type="button"
              className="filters__clear"
              onClick={() =>
                onChange({
                  keyword: "",
                  location: "",
                  type: "",
                  status: "",
                  price: "",
                  beds: "",
                  baths: "",
                  sort: filters.sort,
                })
              }
            >
              <IconClose /> Clear filters
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}