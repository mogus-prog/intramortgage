import { useState } from 'react';

interface ChatInputProps {
  variant?: 'hero' | 'cta';
}

const suggestedQuestions = [
  { emoji: '💰', text: 'How much home can I afford?' },
  { emoji: '📊', text: "What's today's rate?" },
  { emoji: '🏡', text: 'First-time buyer programs' },
  { emoji: '🔄', text: 'Should I refinance?' },
];

export default function ChatInput({ variant = 'hero' }: ChatInputProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const handleSubmit = (text?: string) => {
    const message = text || query;
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', content: message }]);
    setIsOpen(true);
    setQuery('');

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Great question! I'd love to help you with "${message}". To give you personalized information, let me connect you with one of our mortgage experts. You can also call us at (800) 555-0199 for immediate assistance.`,
        },
      ]);
    }, 1000);
  };

  const isHero = variant === 'hero';

  return (
    <div className="w-full">
      {/* Chat Messages (expandable) */}
      {isOpen && messages.length > 0 && (
        <div className={`mb-4 rounded-xl overflow-hidden ${isHero ? 'bg-white/5 border border-white/10' : 'bg-white/10 border border-white/15'}`}>
          <div className="max-h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm ${
                    msg.role === 'user'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-white/80'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input Field */}
      <div className={`rounded-2xl p-2 ${isHero ? 'glass-strong' : 'bg-white/15 border border-white/25 backdrop-blur-xl'}`}>
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center ml-1">
            <span className="text-base">💬</span>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder='Ask anything... "How much can I afford?"'
            className="flex-1 min-w-0 bg-transparent text-white placeholder:text-white/40 text-sm py-2.5 px-1 outline-none"
          />
          <button
            onClick={() => handleSubmit()}
            className={`flex-shrink-0 font-bold text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap ${
              isHero
                ? 'bg-cyan-500 hover:bg-cyan-400 text-white'
                : 'bg-white hover:bg-white/90 text-cyan-600'
            }`}
          >
            Ask Now →
          </button>
        </div>
      </div>

      {/* Suggested Questions */}
      {!isOpen && (
        <div className="flex flex-wrap gap-2 mt-4">
          {suggestedQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSubmit(`${q.text}`)}
              className="bg-white/8 hover:bg-white/12 text-white/70 hover:text-white text-xs px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              {q.emoji} {q.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
