import axios from "axios"

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const addToMyList = (e) => {
  const updateMyList = async () => {
    try {
      const request = await axios.post(`${backendUrl}movies/`, {user, movie});
      console.log(request.data);
    } catch (err) {
      console.log(err)
    }
  }

  updateMyList();
  e.preventDefault();
  console.log(`Added ${id} to list`);
}

export default addToMyList