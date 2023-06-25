import axios from "axios"

const addToMyList = (e) => {
  const updateMyList = async () => {
    try {
      const request = await axios.post('movies/', {user, movie});
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