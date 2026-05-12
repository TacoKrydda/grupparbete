## GET /api/artists 

Hämtar alla artister.

**Svar:** `200 OK`

```json
{
  "data": [
    {
      "id": 3,
      "documentId": "gogywhl358qp3c9c0uwlnnrh",
      "name": "Nickelback",
      "description": "text here.",
      "createdAt": "2026-05-12T08:40:37.365Z",
      "updatedAt": "2026-05-12T08:59:33.418Z",
      "publishedAt": "2026-05-12T08:59:33.439Z"
    },
    {
      "id": 5,
      "documentId": "r9fpm2zp8g5xwizr3lkpfklf",
      "name": "Miss Li",
      "description": "text here.",
      "createdAt": "2026-05-12T09:52:21.171Z",
      "updatedAt": "2026-05-12T09:52:21.171Z",
      "publishedAt": "2026-05-12T09:52:21.180Z"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 2
    }
  }
}

```

---

## GET /api/artists/:id

Hämtar en specifik artist.

**Svar:** `200 OK`

```json
{
  "data": {
    "id": 3,
    "documentId": "gogywhl358qp3c9c0uwlnnrh",
    "name": "Nickelback",
    "description": "text here ",
    "createdAt": "2026-05-12T08:40:37.365Z",
    "updatedAt": "2026-05-12T08:59:33.418Z",
    "publishedAt": "2026-05-12T08:59:33.439Z"
  }
```

**Fel:** `404 Not Found`

```json
{ 
"fel": "Artisten hittades inte"
 }
```

---

## POST /api/artists

Skapar en ny artist.

**Body:**

```json
{
  "name": "Håkan Hellström",
  "description": blah blah,
  "img": "bild.jpg"
}
```

**Svar:** `201 Created`

```json
{ 
"name": "Håkan Hellström", 
"description": blah blah, 
"img": "bild.jpg" 
}
```

**Fel:** `400 Bad Request`

```json
{
 "fel": "fyll i dom obligatoriska fälten"
 }
```

---

## PUT /api/artists/:id

uppdaterar en befintlig artist.

**Body:**

```json
{ 
"name": "Håkan Hellström", 
"description": blah blah, 
"img": "bild.jpg" 
}

```

**Svar:** `200 OK` med det uppdaterade objektet.

**Fel:** `404 Not Found` | `400 Bad Request`

---

## DELETE /api/artists/:id

Tar bort en artist.

**Svar:** `204 No Content` (tom body)

**Fel:** `404 Not Found`

```json
{ 
"fel": "artist hittades inte" 
}
```



## GET /api/albums 

Hämtar alla albums.

**Svar:** `200 OK`

```json
{
  "data": [
    {
      "id": 2,
      "documentId": "wczxzwwznn6ybk712ufi26rt",
      "title": "All the Right Reasons",
      "releaseDate": "2005-10-04",
      "createdAt": "2026-05-12T08:49:08.647Z",
      "updatedAt": "2026-05-12T08:49:08.647Z",
      "publishedAt": "2026-05-12T08:49:08.662Z"
    },
    {
      "id": 4,
      "documentId": "ghc327soyd5qeqnwtxc9tdxv",
      "title": "Underbart i all misär",
      "releaseDate": "2021-09-24",
      "createdAt": "2026-05-12T11:46:26.333Z",
      "updatedAt": "2026-05-12T11:46:26.333Z",
      "publishedAt": "2026-05-12T11:46:26.352Z"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 2
    }
  }
}
```

---

## GET /api/album/:id

Hämtar ett specifikt album.

**Svar:** `200 OK`

```json
{
  "data": {
    "id": 2,
    "documentId": "wczxzwwznn6ybk712ufi26rt",
    "title": "All the Right Reasons",
    "releaseDate": "2005-10-04",
    "createdAt": "2026-05-12T08:49:08.647Z",
    "updatedAt": "2026-05-12T08:49:08.647Z",
    "publishedAt": "2026-05-12T08:49:08.662Z"
  },
  "meta": {}
} ```

**Fel:** `404 Not Found`

```json
{ 
"fel": " album hittades inte"
 }
```

---

## POST /api/ albums 

Skapar ett nytt album.

**Body:**

```json
{
      "title": "All the Right Reasons",
      "releaseDate": "2005-10-04", 
      “img”: “bild.jpg”
},
```

**Svar:** `201 Created`

```json
{
      "id": 2,
      "documentId": "wczxzwwznn6ybk712ufi26rt",
      "title": "All the Right Reasons",
      "releaseDate": "2005-10-04",
      "createdAt": "2026-05-12T08:49:08.647Z",
      "updatedAt": "2026-05-12T08:49:08.647Z",
      "publishedAt": "2026-05-12T08:49:08.662Z"
    },
```

**Fel:** `400 Bad Request`

```json
{
 "fel": " fyll i dom obligatoriska fälten "
 }
```

---

## PUT /api/album/:id

uppdaterar ett befintligt album.

**Body:**

```json
{
      "title": "All the Right Reasons",
      "releaseDate": "2005-10-04", 
      “img”: “bild.jpg”
},
```

**Svar:** `200 OK` med det uppdaterade objektet.

**Fel:** `404 Not Found` | `400 Bad Request`

---

## DELETE /api/album/:id

Tar bort ett album.

**Svar:** `204 No Content` (tom body)

**Fel:** `404 Not Found`

```json
{ 
"fel": "album hittades inte" 
}
```

## GET /api/reviews 

Hämtar alla reviews.

**Svar:** `200 OK`

```json
{
  "data": [
    {
      "id": 3,
      "documentId": "b9qv4vry8bac3i2cjipq89ii",
      "rating": 2,
      "comment": "All the Right Reasons av Nickelback är som att någon frågade:\n“Kan vi göra ett album som låter som en energidryck blandad med motorolja och skilsmässopapper?”\noch producenten svarade: “Absolut, men gör refrängen ännu större.”",
      "createdAt": "2026-05-12T08:55:58.183Z",
      "updatedAt": "2026-05-12T12:17:20.171Z",
      "publishedAt": "2026-05-12T12:17:20.182Z"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
} ```

---

## GET /api/review/:id

Hämtar ett specifikt review.

**Svar:** `200 OK`

```json
{
  "data": [
    {
      "id": 3,
      "documentId": "b9qv4vry8bac3i2cjipq89ii",
      "rating": 2,
      "comment": "All the Right Reasons av Nickelback är som att någon frågade:\n“Kan vi göra ett album som låter som en energidryck blandad med motorolja och skilsmässopapper?”\noch producenten svarade: “Absolut, men gör refrängen ännu större.”",
      "createdAt": "2026-05-12T08:55:58.183Z",
      "updatedAt": "2026-05-12T12:17:20.171Z",
      "publishedAt": "2026-05-12T12:17:20.182Z"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
} ```

**Fel:** `404 Not Found`

```json
{ 
"fel": " review hittades inte"
 }
```

---

## POST /api/ reviews

Skapar ett nytt review.

**Body:**

```json
{
      "rating": 2,
      "comment": "blah blah", 
      “album”: “All the Right Reasons”, 
      “users_permissions_user”: “xxxxxxxxx”
},
```

**Svar:** `201 Created`

```json
{
  "data": [
    {
      "id": 3,
      "documentId": "b9qv4vry8bac3i2cjipq89ii",
      "rating": 2,
      "comment": "All the Right Reasons av Nickelback är som att någon frågade:\n“Kan vi göra ett album som låter som en energidryck blandad med motorolja och skilsmässopapper?”\noch producenten svarade: “Absolut, men gör refrängen ännu större.”",
      "createdAt": "2026-05-12T08:55:58.183Z",
      "updatedAt": "2026-05-12T12:17:20.171Z",
      "publishedAt": "2026-05-12T12:17:20.182Z"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

**Fel:** `400 Bad Request`

```json
{
  "fel": " fyll i dom obligatoriska fälten "
 }
```

---

## PUT /api/review/:id

uppdaterar ett befintligt review.

**Body:**

```json
{
      "rating": 2,
      "comment": "blah blah", 
      “album”: “All the Right Reasons”, 
      “users_permissions_user”: “xxxxxxxxx”
},
```

**Svar:** `200 OK` med det uppdaterade objektet.

**Fel:** `404 Not Found` | `400 Bad Request`

---

## DELETE /api/reviews/:id

Tar bort ett review.

**Svar:** `204 No Content` (tom body)

**Fel:** `404 Not Found`

```json
{ 
"fel": "review hittades inte" 
}
```
