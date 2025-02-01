'use server';

const { default: connecteDB } = require('@/config/database');
const { default: User } = require('@/models/User');
const { getSessionUser } = require('@/utils/getSessionUser');

async function checkBookmarkStatus(propertyId){
    await connecteDB();

    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.userId){
        return { error: 'User ID is required' };
    }

    const { userId } = sessionUser;

    // Find user in Database
    const user = await User.findById(userId);

    // Check if the user has bookmarked the property
    let isBookmarked = user.bookmarks.includes(propertyId);

    return { isBookmarked };
}

export default checkBookmarkStatus;