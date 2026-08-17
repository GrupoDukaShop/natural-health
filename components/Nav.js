import { LeafIcon } from "./Icons";

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="brand">
          <LeafIcon />
          The Natural Health Guide
        </div>
        <a href="#pricing" className="btn btn-primary">
          Get the Guide
        </a>
      </div>
    </nav>
  );
}
