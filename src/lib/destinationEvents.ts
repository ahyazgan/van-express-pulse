// Bidirectional event emitter for map-form synchronization
type DestinationListener = (destination: string) => void;
type FlyToListener = (cityId: string) => void;

// Raw origin/destination text from the search form; the map resolves it to
// known cities and switches to single-route mode when both match.
export interface RouteSelection {
  origin: string;
  destination: string;
}
type RouteSelectionListener = (selection: RouteSelection) => void;

const destinationListeners: Set<DestinationListener> = new Set();
const flyToListeners: Set<FlyToListener> = new Set();
const routeSelectionListeners: Set<RouteSelectionListener> = new Set();

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
  },

  // Subscribe to route selection changes (form → map single-route mode)
  subscribeRouteSelection: (listener: RouteSelectionListener) => {
    routeSelectionListeners.add(listener);
    return () => routeSelectionListeners.delete(listener);
  },

  // Announce the current origin/destination pair (from the search form)
  emitRouteSelection: (selection: RouteSelection) => {
    routeSelectionListeners.forEach(listener => listener(selection));
  }
};
