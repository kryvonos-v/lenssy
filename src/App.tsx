import './styles/styles.scss';
import { Navbar } from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu diam dui. Donec bibendum tristique ultricies. Nulla mauris urna, tincidunt in velit a, dictum malesuada dui. Quisque ac pulvinar turpis. Ut quis purus non felis vulputate auctor. Morbi porttitor nisl convallis, iaculis lacus sed, tincidunt enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lacus elit, elementum eget tincidunt quis, gravida non quam. Phasellus libero purus, aliquam eu neque tincidunt, sodales dapibus neque. Vivamus rhoncus tempus magna, vitae egestas sapien bibendum et. Aliquam fermentum tincidunt tempor.</p>

        <p>Cras ligula odio, imperdiet consequat ante ac, venenatis porttitor sapien. Donec ligula lacus, tincidunt bibendum congue non, commodo in nulla. Phasellus ex odio, venenatis vulputate scelerisque eget, gravida vitae orci. Morbi at elit lacus. Vestibulum vulputate sollicitudin fringilla. Mauris gravida, eros quis vulputate lobortis, odio dui congue ante, vitae varius quam elit a ipsum. Sed consectetur blandit quam a viverra. Aliquam ac eros hendrerit, tincidunt libero vel, iaculis ante. Nunc sit amet pellentesque lacus. Nam molestie mauris et mi sollicitudin, id porttitor tellus pretium. Mauris tincidunt purus est, vel tristique orci commodo id. Nullam tincidunt, justo non hendrerit ultricies, turpis massa dignissim enim, ac aliquam tortor purus eget urna. Nam commodo volutpat massa a efficitur. Nulla ullamcorper lectus sed tempus auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue ex, pretium ut sodales in, laoreet sed nisl.</p>
      </main>
    </div>
  );
}

export default App;
