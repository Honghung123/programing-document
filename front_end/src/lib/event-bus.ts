export interface ChatEventMap {
  addVocabulary: { conversationId: string };
  // add other events...
}

type EventCallback<T> = (payload: T) => void;

export class EventBus<Events extends Record<string, any>> {
  private subscribers: {
    [K in keyof Events]?: Set<EventCallback<Events[K]>>;
  } = {};

  // Listen an event
  on<K extends keyof Events>(eventName: K, callback: EventCallback<Events[K]>): () => void {
    if (!this.subscribers[eventName]) {
      this.subscribers[eventName] = new Set();
    }
    this.subscribers[eventName]!.add(callback);

    // Unsubscribe an event
    return () => {
      this.subscribers[eventName]?.delete(callback);
      if (this.subscribers[eventName]?.size === 0) {
        delete this.subscribers[eventName];
      }
    };
  }

  // Emit event
  emit<K extends keyof Events>(eventName: K, payload: Events[K]): void {
    this.subscribers[eventName]?.forEach((callback) => {
      try {
        callback(payload);
      } catch (error) {
        console.error(`Error in event handler for ${String(eventName)}`, error);
      }
    });
  }
}

// Initialize EventBus with event type
const eventBus = new EventBus<ChatEventMap>();
export default eventBus;

// Component A phát event
// function ComponentA() {
// 	const handleRegister = () => {
// 		eventBus.emit("changeConversation", { userId: "123", email: "user@example.com" });
// 	};
// }

// // Component B lắng nghe event
// function ComponentB() {
// 	useEffect(() => {
// 		const unsubscribe = eventBus.on("changeConversation", (payload) => {
// 			console.log("User registered:", payload.userId, payload.email);
// 			// Xử lý logic khi có event
// 		});

// 		return () => {
// 			unsubscribe(); // Hủy đăng ký khi component unmount
// 		};
// 	}, []);
// }
