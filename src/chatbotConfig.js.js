import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Helper Bot";

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hello! How can I help you today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
