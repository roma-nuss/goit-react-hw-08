import { createSelector } from "reselect";

export const selectNameFilter = (state) => state.filters.name;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter?.toLowerCase() || "";

    if (!normalizedFilter) {
      return contacts;
    }

    return contacts.filter((contact) => {
      const contactName = contact.name?.toLowerCase() || "";
      return contactName.includes(normalizedFilter);
    });
  }
);
