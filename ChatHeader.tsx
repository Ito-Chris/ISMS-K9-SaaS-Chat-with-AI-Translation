import { Hash, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Channel } from "@/data/seed";

type Props = {
  channel: Channel;
  language: string;
  onLanguageChange: (lang: string) => void;
};

export const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "nl", label: "Dutch" },
  { value: "ru", label: "Russian" },
  { value: "pl", label: "Polish" },
  { value: "tr", label: "Turkish" },
  { value: "hi", label: "Hindi" },
  { value: "bn", label: "Bengali" },
  { value: "ur", label: "Urdu" },
  { value: "ar", label: "Arabic" },
  { value: "he", label: "Hebrew" },
  { value: "fa", label: "Persian" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "zh", label: "Chinese" },
  { value: "zh-TW", label: "Taiwanese" },
  { value: "vi", label: "Vietnamese" },
  { value: "th", label: "Thai" },
  { value: "id", label: "Indonesian" },
  { value: "tl", label: "Tagalog" },
  { value: "ceb", label: "Bisaya" },
  { value: "sw", label: "Swahili" },
];

export function ChatHeader({ channel, language, onLanguageChange }: Props) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          {channel.kind === "channel" ? (
            <Hash className="h-5 w-5 text-teal-600" />
          ) : (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-[10px] font-bold text-teal-700">
              {channel.name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </span>
          )}
          <h1 className="truncate text-lg font-bold text-slate-900">
            {channel.name}
          </h1>
        </div>
        <p className="mt-0.5 truncate text-sm text-slate-500">
          {channel.topic}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 sm:flex">
          <Users className="h-3.5 w-3.5" />
          {channel.members} members
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-xs font-medium text-slate-500 sm:inline">
            Translate
          </span>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger className="h-9 w-40 border-slate-200 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((l) => (
                <SelectItem key={l.value} value={l.value}>
                  {l.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}