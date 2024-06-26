const User = require('@/models/userSchema.js');
const database = require('@/lib/Backend/database/Database.js');


async function updateInitFavorites(email, favorite_category) {
    const update = {
        $set: {
            init_favorites: favorite_category
        }
    };
    const updateUser = await database.findAndUpdate(User, { email: email }, update);
    if (updateUser) {
        console.log("Init Favorites updated successfully");
        return true;
    }
    
    console.log("Failed to update favorites");
    return false;
}

module.exports = updateInitFavorites;