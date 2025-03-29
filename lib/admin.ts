import { auth } from '@clerk/nextjs/server'

const adminIds = [
    "user_2lCYM9IIcN9GTiqHc4Fl4kuwo7m",
]

export const isAdmin = () => {
    const { userId } = auth();

    if (!userId)
        return false;

    return adminIds.indexOf(userId) !== -1;
}