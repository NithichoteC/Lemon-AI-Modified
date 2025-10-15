export default function ChatPage() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
        <div className="font-bold text-xl mb-6 text-gray-900 dark:text-white">Lemon AI</div>
        <nav className="space-y-2">
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white">
            New Chat
          </button>
        </nav>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center text-gray-500 dark:text-gray-400 mt-20">
              <h2 className="text-2xl font-semibold mb-2">Welcome to Lemon AI</h2>
              <p>Start a conversation with your AI assistant</p>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="max-w-3xl mx-auto flex gap-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
