import { createSelector } from "reselect";

export const selectNameFilter = (state) => state.filters.name;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      const contactName = contact.name ? contact.name.toLowerCase() : "";
      return contactName.includes(normalizedFilter);
    });
  }
);
