import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  channelName: string;
  language: string;
  onSend: (text: string) => void;
};

export function Composer({ channelName, language, onSend }: Props) {
  const [value, setValue] = useState("");

  function submit() {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  }

  return (
    <div className="border-t border-slate-200 bg-white px-6 py-4">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-end gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm focus-within:border-teal-400 focus-within:ring-2 focus-within:ring-teal-100">
          <Textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            placeholder={`Message ${channelName}`}
            rows={1}
            className="min-h-10 resize-none border-0 bg-transparent shadow-none focus-visible:ring-0"
          />
          <Button
            type="button"
            onClick={submit}
            disabled={!value.trim()}
            className="h-10 shrink-0 gap-2 rounded-xl bg-teal-600 px-4 text-white hover:bg-teal-700"
          >
            <SendHorizontal className="h-4 w-4" />
            Send
          </Button>
        </div>
        <p className="mt-2 text-xs text-slate-400">
          Press Enter to send · Shift + Enter for a new line · Messages are
          translated to{" "}
          <span className="font-medium text-slate-500">
            {language === "en" ? "English" : language.toUpperCase()}
          </span>
        </p>
      </div>
    </div>
  );
}