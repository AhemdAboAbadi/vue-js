const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "The Hero of Ages",
          author: "Brandon Sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "The Long Earth",
          author: "Terry Pratchett and Stephen Baxter",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      showBooks: true,
    };
  },
  methods: {
    changeShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handelEvent(e, data) {
      if (data) {
        console.log(data);
      }
    },
    handelMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    handelChangeFav(item) {
      item.isFav = !item.isFav;

    },
  },
  computed: {
    filteredBooks() {
      
      return this.books.filter((book) => book.isFav);
    }
  }
});

app.mount("#app");
