import { useMemo, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ChatHeader } from "@/components/ChatHeader";
import { MessageThread } from "@/components/MessageThread";
import { Composer } from "@/components/Composer";
import { channels as seedChannels, messagesByChannel } from "@/data/seed";
import type { Channel, Message } from "@/data/seed";

export default function App() {
  const [channels] = useState<Channel[]>(seedChannels);
  const [activeId, setActiveId] = useState<string>(seedChannels[0].id);
  const [language, setLanguage] = useState<string>("en");
  const [threads, setThreads] = useState<Record<string, Message[]>>(
    messagesByChannel,
  );

  const activeChannel = useMemo(
    () => channels.find((c) => c.id === activeId) ?? channels[0],
    [channels, activeId],
  );

  const messages = threads[activeId] ?? [];

  function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const message: Message = {
      id: `m-${Date.now()}`,
      author: "You",
      avatar: "YO",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: trimmed,
      self: true,
    };
    setThreads((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] ?? []), message],
    }));
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-100 text-slate-900">
      <Sidebar
        channels={channels}
        activeId={activeId}
        onSelect={setActiveId}
      />
      <main className="flex min-w-0 flex-1 flex-col bg-slate-50">
        <ChatHeader
          channel={activeChannel}
          language={language}
          onLanguageChange={setLanguage}
        />
        <MessageThread messages={messages} language={language} />
        <Composer
          channelName={activeChannel.name}
          onSend={handleSend}
          language={language}
        />
      </main>
    </div>
  );
}