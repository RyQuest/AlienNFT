import React from "react";
const openseaUrl = "https://testnets.opensea.io/assets/greenalians?embed=true";

export default function RarityComp() {
  return (
    <iframe
      src={openseaUrl}
      style={{
        minHeight: "93vh",
        marginTop: "0",
        paddingTop: "0",
      }}
      width="100%"
      frameBorder="0"
    ></iframe>
  );
}
