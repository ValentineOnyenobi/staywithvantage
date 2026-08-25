import { useEffect } from "react";

const SCRIPT_SRC = "https://js-eu1.hsforms.net/forms/embed/148941859.js";

export function HubSpotForm() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region="eu1"
      data-form-id="6de4f4f8-a9eb-4233-b5c7-0a2fe2ee15c3"
      data-portal-id="148941859"
    />
  );
}
