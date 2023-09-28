export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.contacts.filter;

export const selectIsLoadind = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
