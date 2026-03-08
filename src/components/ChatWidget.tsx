import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Mic, MicOff, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickReplies = [
  "Browse Workflows",
  "Pricing Info",
  "How to get started?",
  "Talk to support",
];

const botResponses: Record<string, string> = {
  "browse workflows": "You can explore all our workflows at the Marketplace page! We have categories like AI Agents, WhatsApp Automation, Email Automation, and more. 🚀",
  "pricing info": "We have both free and premium workflows! Free workflows are completely free to download. Premium workflows range from $15 to $39. 💰",
  "how to get started?": "It's easy! Just 3 steps:\n1️⃣ Browse our marketplace\n2️⃣ Download the workflow JSON\n3️⃣ Import it into your n8n instance\nDone! 🎉",
  "talk to support": "You can reach our support team at support@naaaworkflowhub.com or visit our Contact page. We typically respond within 24 hours! 📧",
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 Welcome to NaaaworkflowHub. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBotResponse = (userText: string) => {
    setIsTyping(true);
    const key = userText.toLowerCase().trim();
    const response =
      botResponses[key] ||
      "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to browse our workflows at the Marketplace. 😊";

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: response,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    addBotResponse(input.trim());
    setInput("");
  };

  const handleQuickReply = (text: string) => {
    const userMsg: Message = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    addBotResponse(text);
  };

  const toggleVoice = () => {
    setIsVoiceActive(!isVoiceActive);
    if (!isVoiceActive) {
      // Simulate voice recognition
      setTimeout(() => {
        setIsVoiceActive(false);
        const voiceMsg: Message = {
          id: Date.now(),
          text: "How to get started?",
          sender: "user",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, voiceMsg]);
        addBotResponse("How to get started?");
      }, 3000);
    }
  };

  const toggleCall = () => {
    setIsCallActive(!isCallActive);
    if (!isCallActive) {
      const botMsg: Message = {
        id: Date.now(),
        text: "🎙️ Voice call started! I'm listening... (This is a demo — real voice bot integration coming soon!)",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } else {
      const botMsg: Message = {
        id: Date.now(),
        text: "📞 Voice call ended. How else can I help you?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 flex items-center justify-center text-primary-foreground"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-4rem)] flex flex-col rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 bg-background"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-primary-foreground">NaaaworkflowHub</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-primary-foreground/80">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={toggleCall}
                  className={`p-2 rounded-lg transition-colors ${
                    isCallActive
                      ? "bg-red-500/30 text-red-200"
                      : "hover:bg-primary-foreground/10 text-primary-foreground/80"
                  }`}
                  title={isCallActive ? "End voice call" : "Start voice call"}
                >
                  <Phone className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-primary-foreground/10 text-primary-foreground/80"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Voice Call Banner */}
            <AnimatePresence>
              {isCallActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-accent/10 border-b border-border/50 px-4 py-3 flex items-center justify-between shrink-0"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-medium text-accent">Voice Bot Active</span>
                  </div>
                  <button
                    onClick={toggleCall}
                    className="text-xs px-3 py-1 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                  >
                    End Call
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-card border border-border/50 text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-card border border-border/50 px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex gap-2 flex-wrap shrink-0">
                {quickReplies.map((text) => (
                  <button
                    key={text}
                    onClick={() => handleQuickReply(text)}
                    className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {text}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border/50 flex items-center gap-2 shrink-0">
              <button
                onClick={toggleVoice}
                className={`p-2 rounded-lg transition-colors ${
                  isVoiceActive
                    ? "bg-red-500/20 text-red-400 animate-pulse"
                    : "hover:bg-card text-muted-foreground"
                }`}
                title={isVoiceActive ? "Stop listening" : "Voice input"}
              >
                {isVoiceActive ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={isVoiceActive ? "Listening..." : "Type a message..."}
                className="flex-1 bg-card border-border/50 text-sm h-9"
                disabled={isVoiceActive}
              />
              <Button
                onClick={handleSend}
                variant="hero"
                size="icon"
                className="h-9 w-9 shrink-0"
                disabled={!input.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
