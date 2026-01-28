// Simple event emitter for destination selection from map
type DestinationListener = (destination: string) => void;

const listeners: Set<DestinationListener> = new Set();

export const destinationEvents = {
  subscribe: (listener: DestinationListener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  
  emit: (destination: string) => {
    listeners.forEach(listener => listener(destination));
  }
};
