import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 844bb31f0ceb0c2bef5b2bbed7224d10e0c803b1a1c3c4b7974822a01cdefe28"
  }
});
