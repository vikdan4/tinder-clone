export const profilesSelectors = {
    profiles: ({ profiles }) => profiles?.profiles,
    pageNumber: ({ paging }) => paging?.pageNumber,
};
