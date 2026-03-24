"use client";

import * as React from "react";
import { Check, Copy } from "phosphor-react";
import { Button } from "matcha-ui";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="gap-2"
      onClick={handleCopy}
    >
      {copied ? (
        <>
          <Check size={16} weight="bold" className="shrink-0" />
          Copied
        </>
      ) : (
        <>
          <Copy size={16} weight="bold" className="shrink-0" />
          Copy code
        </>
      )}
    </Button>
  );
}
