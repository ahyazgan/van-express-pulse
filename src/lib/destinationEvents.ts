// Bidirectional event emitter for map-form synchronization
type DestinationListener = (destination: string) => void;
type FlyToListener = (cityId: string) => void;

const destinationListeners: Set<DestinationListener> = new Set();
const flyToListeners: Set<FlyToListener> = new Set();

export const destinationEvents = {
  // Subscribe to destination selection (map → form)
  subscribe: (listener: DestinationListener) => {
    destinationListeners.add(listener);
    return () => destinationListeners.delete(listener);
  },
  
  // Emit destination selection (from map price tag click)
  emit: (destination: string) => {
    destinationListeners.forEach(listener => listener(destination));
  },

  // Subscribe to flyTo requests (form → map)
  subscribeFlyTo: (listener: FlyToListener) => {
    flyToListeners.add(listener);
    return () => flyToListeners.delete(listener);
  },

  // Request map to fly to a city (from search selection)
  flyTo: (cityId: string) => {
    flyToListeners.forEach(listener => listener(cityId));
  }
};
