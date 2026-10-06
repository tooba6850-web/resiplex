import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import Button from "../components/Button";
import { BRAND } from "../data/site";

export default function NotFoundPage() {
  return (
    <section className="nfp">
      <div className="container nfp__inner">
        <p className="nfp__code" aria-hidden="true">
          404
        </p>
        <h1 className="nfp__title">This page slipped off the shortlist.</h1>
        <p className="nfp__lead">
          The address you followed doesn't exist — or has been taken off market.
          Head back to the listings and we'll find the right door.
        </p>
        <div className="nfp__actions">
          <Button to="/">Back to Home</Button>
          <Button to="/properties" variant="ghost">
            Browse {BRAND.name} Properties
          </Button>
        </div>
      </div>
    </section>
  );
}