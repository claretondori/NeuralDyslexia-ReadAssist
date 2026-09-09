"use client";

import React, { useState } from "react";

interface WordToken {
  original: string;
  bionic_html: string;
  inversion_risk: boolean;
}

interface ApiResponse {
  original_text: string;
  transformed_text: string;
  word_matrix: WordToken[];
  title?: string;
  image_url?: string;
  site_name?: string;
}

export default function Reader() {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState<"text" | "url">("text");
  const [simplify, setSimplify] = useState(true);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const [bionicEnabled, setBionicEnabled] = useState(true);
  const [isolateInversions, setIsolateInversions] = useState(true);
  const [largeSpacing, setLargeSpacing] = useState(true);

  const handleTransform = async () => {
    if (mode === "text" && !text.trim()) return;
    if (mode === "url" && !url.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(
        "https://neuraldyslexia-readassist.onrender.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: mode === "text" ? text : "",
            url: mode === "url" ? url : "",
            simplify,
          }),
        },
      );
      if (!res.ok) throw new Error("API processing error");
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {!response ? (
        <div className="bg-white space-y-4">
          <div
            style={{
              display: "flex",
              gap: "1rem",
              borderBottom: "1px solid #EADCC9",
              paddingBottom: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <button
              className={
                mode === "text"
                  ? "btn-toggle-bionic-active"
                  : "btn-toggle-inactive"
              }
              onClick={() => setMode("text")}
              style={{ padding: "0.5rem 1rem" }}
            >
              Paste Clean Text
            </button>
            <button
              className={
                mode === "url"
                  ? "btn-toggle-spacing-active"
                  : "btn-toggle-inactive"
              }
              onClick={() => setMode("url")}
              style={{ padding: "0.5rem 1rem" }}
            >
              Scrape Live Website URL
            </button>
          </div>

          {mode === "text" ? (
            <textarea
              placeholder="Paste text here to run cognitive analysis and structural transformation..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            <div style={{ padding: "0.5rem 0 1.5rem 0" }}>
              <input
                type="url"
                placeholder="Enter live news, article or blog URL (e.g., https://bbc.com...)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{
                  width: "100%",
                  padding: "1rem",
                  border: "1px solid #D2B48C",
                  borderRadius: "0.5rem",
                  background: "#FAFAFA",
                  boxSizing: "border-box",
                  fontSize: "1rem",
                }}
              />
            </div>
          )}

          <div className="flex-wrap" style={{ marginTop: "1.5rem" }}>
            <label>
              <input
                type="checkbox"
                checked={simplify}
                onChange={(e) => setSimplify(e.target.checked)}
              />
              <span>
                Enable OpenAI Cognitive Restructuring (Highly Recommended for
                Web Scrapes)
              </span>
            </label>
            <button
              onClick={handleTransform}
              disabled={
                loading || (mode === "text" ? !text.trim() : !url.trim())
              }
              style={{ marginTop: "0.5rem" }}
            >
              <span>
                {loading
                  ? "Processing Matrix Pipeline..."
                  : "Scrape, Simplify & Render"}
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white flex-wrap">
            <div className="flex-gap-4">
              <button
                onClick={() => setBionicEnabled(!bionicEnabled)}
                className={
                  bionicEnabled
                    ? "btn-toggle-bionic-active"
                    : "btn-toggle-inactive"
                }
              >
                Bionic Fixation Points
              </button>
              <button
                onClick={() => setIsolateInversions(!isolateInversions)}
                className={
                  isolateInversions
                    ? "btn-toggle-inversion-active"
                    : "btn-toggle-inactive"
                }
              >
                Highlight Mirror Letters (b/d/p/q)
              </button>
              <button
                onClick={() => setLargeSpacing(!largeSpacing)}
                className={
                  largeSpacing
                    ? "btn-toggle-spacing-active"
                    : "btn-toggle-inactive"
                }
              >
                Accessible Letter Spacing
              </button>
            </div>
            <button
              onClick={() => {
                setResponse(null);
                setText("");
                setUrl("");
              }}
              className="btn-clear"
            >
              Clear Workspace
            </button>
          </div>

          <div className="output-viewport">
            <div className="reader-article-header">
              {response.site_name && (
                <span className="reader-site-tag">{response.site_name}</span>
              )}
              {response.title && (
                <h2 className="reader-hero-title">{response.title}</h2>
              )}
            </div>

            {response.image_url && (
              <img
                src={response.image_url}
                alt="Article Thumbnail"
                className="reader-hero-image-frame"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            )}

            <div
              className={`text-render-engine ${largeSpacing ? "accessible-spacing-active" : ""}`}
              style={{ wordSpacing: largeSpacing ? "0.25em" : "normal" }}
            >
              {response.word_matrix.map((token, idx) => {
                const needsHighlight =
                  isolateInversions && token.inversion_risk;
                return (
                  <span
                    key={idx}
                    className={`word-token-node ${needsHighlight ? "mirror-highlight-active" : ""}`}
                  >
                    {bionicEnabled ? (
                      <span
                        dangerouslySetInnerHTML={{ __html: token.bionic_html }}
                      />
                    ) : (
                      token.original
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
