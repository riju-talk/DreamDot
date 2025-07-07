// RichTextEditor.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ImageIcon, X } from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  onThumbnailChange: (file: File | null) => void;
  thumbnailPreview: string | null;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  onThumbnailChange,
  thumbnailPreview,
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillInstance = useRef<Quill | null>(null);
  const [editorHtml, setEditorHtml] = useState(value);

  // Initialize Quill once
  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });

      quillInstance.current.on("text-change", () => {
        const html = editorRef.current!.querySelector(".ql-editor")!.innerHTML;
        setEditorHtml(html);
        onChange(html);
      });
    }
  }, [editorRef, onChange]);

  // Keep editor in sync when `value` changes externally
  useEffect(() => {
    if (quillInstance.current && value !== editorHtml) {
      quillInstance.current.root.innerHTML = value;
      setEditorHtml(value);
    }
  }, [value, editorHtml]);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onThumbnailChange(file);
  };

  const removeThumbnail = () => onThumbnailChange(null);

  const wordCount = editorHtml.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.floor(wordCount / 200));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div
          ref={editorRef}
          className="h-[500px] border rounded-xl overflow-hidden bg-white"
        />
      </div>

      <div className="lg:col-span-1 space-y-6">
        {/* Thumbnail Upload */}
        <div className="space-y-2">
          <Label>Thumbnail</Label>
          {thumbnailPreview ? (
            <div className="relative group">
              <img
                src={thumbnailPreview}
                alt="Thumbnail preview"
                className="rounded-xl border w-full h-48 object-cover"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={removeThumbnail}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="border-2 border-dashed rounded-xl p-6 text-center bg-muted/50 flex flex-col items-center">
              <ImageIcon className="h-10 w-10 text-muted-foreground mb-3" />
              <Label
                htmlFor="thumbnail-upload"
                className="dream-button text-primary-foreground cursor-pointer"
              >
                Upload Thumbnail
              </Label>
              <input
                id="thumbnail-upload"
                type="file"
                accept="image/*"
                onChange={handleThumbnailChange}
                className="hidden"
              />
              <p className="text-sm text-muted-foreground mt-2">
                JPG, PNG (max 5MB)
              </p>
            </div>
          )}
        </div>

        {/* SEO Description */}
        <div className="space-y-2">
          <Label htmlFor="seo-description">SEO Description</Label>
          <textarea
            id="seo-description"
            placeholder="Short description for search engines"
            className="w-full p-3 border rounded-xl min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Content Format */}
        <div className="space-y-2">
          <Label>Content Format</Label>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="rounded-xl">
              Article
            </Button>
            <Button variant="outline" className="rounded-xl">
              Tutorial
            </Button>
            <Button variant="outline" className="rounded-xl">
              Story
            </Button>
            <Button variant="outline" className="rounded-xl">
              Interview
            </Button>
          </div>
        </div>

        {/* Reading Time Estimate */}
        <div className="p-4 bg-muted/30 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Reading Time</span>
            <span className="font-mono bg-background px-2 py-1 rounded-md">
              {readingTime} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
