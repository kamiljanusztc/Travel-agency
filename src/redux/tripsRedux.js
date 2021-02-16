/* SELECTORS */

// import { addTag } from "./filtersRedux";
// import { getAllTags } from "./tagsRedux";

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i'); // regular expression - do znalezenia lub zmiany ciagu znakow. "i" ignoruje wielkosc liter
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  console.log('sprawdz duration', filters.duration);
  if (filters.duration) {
    const durationFrom = filters.duration.from;
    const durationTo = filters.duration.to;

    output = output.filter(trip => trip.days >= durationFrom && trip.days <= durationTo);
    console.log('output duration', output);
  }

  // TODO - filter by tags
  if (filters.tags) {
    for (let tag of filters.tags) {
      output = output.filter(trip => trip.tags.includes(tag));
      console.log('output tag', output);
    }
  }

  // TODO - sort by cost descending (most expensive goes first)
  const descending = output.sort((a, b) => (parseInt(b.cost.slice(1)) > parseInt(a.cost.slice(1))) ? 1 : -1);
  console.log('price descending', descending);

  return output;
};

export const getTripById = ({ trips }, tripId) => {

  // TODO - filter trips by tripId
  const filtered = trips.filter(trip => trip.id == tripId);

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {

  // TODO - filter trips by countryCode
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
