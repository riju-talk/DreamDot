"use client";

import React, { useEffect, useRef } from "react";

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<any>(null);
  const lastValueRef = useRef<string>("");

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (!editorRef.current || quillRef.current) return;

      const QuillModule = await import("quill");
      const Quill = (QuillModule as any).default ?? QuillModule;

      // @ts-ignore
      await import("quill/dist/quill.snow.css");

      if (!mounted) return;

      const quill = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Start writing your dream...",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ header: [1, 2, 3, false] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [
              {
                color: [
                  "#216869", // primary
                  "#49a078", // accent
                  "#9cc5a1", // secondary / muted
                  "#1f2421", // dark neutral
                  "#dce1de", // light neutral
                ],
              },
              {
                background: [
                  "#49a078",
                  "#216869",
                  "#9cc5a1",
                ],
              },
            ],
            ["link"],
            ["clean"],
          ],
        },
      });

      quillRef.current = quill;

      // ✅ Correct initial content load
      if (value) {
        quill.clipboard.dangerouslyPasteHTML(value);
        lastValueRef.current = value;
      }

      // ✅ Let Quill manage its state
      quill.on("text-change", () => {
        const html = quill.root.innerHTML;
        lastValueRef.current = html;
        onChange(html);
      });
    };

    init();

    return () => {
      mounted = false;
    };
  }, []);

  // ✅ Sync external value WITHOUT breaking Quill
  useEffect(() => {
    const quill = quillRef.current;
    if (!quill) return;

    if (value !== lastValueRef.current) {
      quill.clipboard.dangerouslyPasteHTML(value || "");
      lastValueRef.current = value || "";
    }
  }, [value]);

  return (
    <div className="w-full">
      <style jsx global>{`
        /* ================================
           QUILL – THEME SAFE (LIGHT + DARK)
        ================================= */

        .ql-toolbar.ql-snow {
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-radius: 12px 12px 0 0;
        }

        .ql-container.ql-snow {
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-top: none;
          border-radius: 0 0 12px 12px;
        }

        /* Toolbar buttons */
        .ql-toolbar button {
          width: 36px;
          height: 36px;
          border-radius: 8px;
        }

        .ql-toolbar button:hover {
          background: hsl(var(--accent));
        }

        .ql-toolbar button.ql-active {
          background: hsl(var(--primary));
        }

        .ql-toolbar button.ql-active .ql-stroke {
          stroke: hsl(var(--primary-foreground));
        }

        .ql-toolbar button.ql-active .ql-fill {
          fill: hsl(var(--primary-foreground));
        }

        /* Icons */
        .ql-stroke {
          stroke: hsl(var(--foreground));
        }

        .ql-fill {
          fill: hsl(var(--foreground));
        }

        /* Pickers */
        .ql-picker-label {
          color: hsl(var(--foreground));
          border-radius: 8px;
        }

        .ql-picker-label:hover {
          background: hsl(var(--accent));
        }

        .ql-picker-options {
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-radius: 8px;
        }

        .ql-picker-item {
          color: hsl(var(--foreground));
        }

        .ql-picker-item:hover {
          background: hsl(var(--accent));
        }

        .ql-picker-item.ql-selected {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }

        /* Editor */
        .ql-editor {
          min-height: 400px;
          padding: 24px;
          font-size: 16px;
          line-height: 1.8;
          color: hsl(var(--foreground));
        }

        .ql-editor.ql-blank::before {
          color: hsl(var(--muted-foreground));
          opacity: 0.6;
          font-style: normal;
        }
      `}</style>

      <div ref={editorRef} />
    </div>
  );
};
