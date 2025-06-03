import "./styles.css";
import React from "react";
import Image from "./components/Image";
import LifecycleDemo from "./components/LifecycleDemo.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],   // State to store fetched photos
      loading: false   // State to manage loading status
    };
  }
  async componentDidMount() {
    this.setState({ loading: true })
    try {
      const photos = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      const data = await photos.json()
      this.setState({ photos: data })
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({ loading: false })
    }
  }
  // Use the required lifecycle methods here
  // Make an API call to fetch images and update state accordingly
  // Ensure that loading is set to true before the API request and false after data is fetched

  render() {
    // Display loading status here
    // If loading is true, display the message "Loading..."
    return (
      <div className="App">
        {/* {this.state.loading ? (<p>Loading...</p>) : (
            this.state.photos.map((photo) => {
              return <Image key={photo.id} photo={photo} />;
            })
        )} */}
        <LifecycleDemo />
      </div>
    );
  }
}
