export class Photographer {
  constructor (name, id, city, country, tags, tagline, price, portrait, alt) {
    this.name = name
    this.id = id
    this.city = city
    this.country = country
    this.tags = tags
    this.tagline = tagline
    this.price = price
    this.portrait = portrait
    this.alt = alt
    this.mediaList = []
  }

  addMedia (media) {
    this.mediaList.push(media)
  }

  getLikes () {
    let sum = 0
    this.mediaList.forEach((media) => {
      sum += media.likes
    })
    return sum
  }
}