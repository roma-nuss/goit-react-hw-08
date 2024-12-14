export const selectAllContacts = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters.name;

export const selectContactsLoading = (state) => state.contacts.loading;

export const selectContactsError = (state) => state.contacts.error;
