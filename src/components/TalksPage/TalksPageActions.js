const handleOwnerFilter = (selectedOwner) => {
  return {
    type: 'UPDATE_OWNER_FILTER_IN_STORE',
    payload: selectedOwner,
  };
};
// tried using this export default, check with anthony if this is ok
export default handleOwnerFilter;
