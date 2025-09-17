import { useEffect } from "react";
import { createChat } from "@n8n/chat";
import Page from "./Page.tsx";

import "@n8n/chat/style.css";
import "./App.css";

// see https://www.npmjs.com/package/@n8n/chat for more options

const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl: import.meta.env.VITE_WEBHOOK_URL,
      webhookConfig: {
        method: "POST",
        headers: {},
      },
      target: "#n8n-chat",
      mode: "window",
      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",
      loadPreviousSession: true,
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: "en",
      initialMessages: ["Hi there! 👋", "How can I assist you today?"],
      i18n: {
        en: {
          title: "Chatbot",
          subtitle: "",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your question..",
        },
      },
      enableStreaming: true,
    });
  }, []);

  return (
    <div>
      <Page />
      <div id="n8n-chat"></div>
    </div>
  );
};

export default App;
