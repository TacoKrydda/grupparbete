"use strict";

module.exports = {
  async bootstrap({ strapi }) {

    const { default: artists } = await import("../scripts/data/artists.js");
    const { default: albums } = await import("../scripts/data/albums.js");
    const { default: users } = await import("../scripts/data/users.js");
    const { default: reviews } = await import("../scripts/data/reviews.js");

    const existingArtists =
      await strapi.entityService.findMany("api::artist.artist");

    if (existingArtists.length > 0) {
      return;
    }

    for (const artist of artists) {
      await strapi.entityService.create("api::artist.artist", {
        data: artist,
      });
    }

    for (const album of albums) {
      const matchingArtist = await strapi.db
        .query("api::artist.artist")
        .findOne({
          where: {
            name: album.artistName,
          },
        });

      await strapi.entityService.create("api::album.album", {
        data: {
          title: album.title,
          releaseDate: album.releaseDate,
          artist: matchingArtist.id,
        },
      });
    }

    for (const user of users) {
      const existingUser = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            email: user.email,
          },
        });

      if (!existingUser) {
        await strapi.plugin("users-permissions").service("user").add({
          username: user.username,
          password: user.password,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          confirmed: true,
        });
      }
    }

    for (const review of reviews) {
      const matchingAlbum = await strapi.db.query("api::album.album").findOne({
        where: {
          title: review.albumTitle,
        },
      });

      const matchingUser = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            email: review.email,
          },
        });

      await strapi.entityService.create("api::review.review", {
        data: {
          rating: review.rating,
          comment: review.comment,
          album: matchingAlbum.id,
          users_permissions_user: matchingUser.id,
        },
      });
    }
  },
};
